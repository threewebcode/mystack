#!/usr/bin/env php
<?php

require 'vendor/autoload.php'; // Include Composer autoloader

use Smalot\PdfParser\Parser;

// Check if URL is provided as a command-line argument
if ($argc !== 2) {
    echo "Usage: php {$argv[0]} <arXiv PDF URL>\n";
    echo "Example: php {$argv[0]} https://arxiv.org/pdf/1234.56789.pdf\n";
    exit(1);
}

$url = $argv[1];

// Validate URL
if (!filter_var($url, FILTER_VALIDATE_URL)) {
    echo "Error: Please provide a valid PDF URL from arXiv (e.g., https://arxiv.org/pdf/1234.56789.pdf)\n";
    exit(1);
}

// Function to fetch PDF file
function fetchPdf($url, $tempFile) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Adjust based on security needs
    $pdfData = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode !== 200 || $pdfData === false) {
        echo "Error: Failed to fetch PDF from $url\n";
        exit(1);
    }

    file_put_contents($tempFile, $pdfData);
    return $tempFile;
}

// Function to extract text from PDF
function extractTextFromPdf($pdfFile) {
    try {
        $parser = new Parser();
        $pdf = $parser->parseFile($pdfFile);
        return $pdf->getText();
    } catch (Exception $e) {
        echo "Error: Failed to parse PDF: " . $e->getMessage() . "\n";
        exit(1);
    }
}

// Main logic
try {
    // Create a temporary file for the PDF
    $tempPdfFile = sys_get_temp_dir() . '/arxiv_pdf_' . uniqid() . '.pdf';
    $outputTextFile = 'output_' . time() . '.txt';

    // Fetch the PDF
    echo "Fetching PDF from $url...\n";
    fetchPdf($url, $tempPdfFile);

    // Extract text
    echo "Extracting text from PDF...\n";
    $text = extractTextFromPdf($tempPdfFile);

    // Save text to file
    file_put_contents($outputTextFile, $text);
    echo "Text extracted and saved to $outputTextFile\n";

    // Clean up temporary PDF file
    unlink($tempPdfFile);
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
    exit(1);
}
