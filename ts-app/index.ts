import os from 'os';
import { performance } from 'perf_hooks';

async function main() {
  const startTime = performance.now();

  // Get runtime information
  const runtime = process.release.name;
  console.log(`Runtime: ${runtime}`);

  // Get OS information
  const osName = os.type();
  const osVersion = os.release();
  console.log(`OS: ${osName} ${osVersion}`);

  // Get hardware information
  const cpuModel = os.cpus()[0].model;
  const totalMemory = os.totalmem();
  console.log(`CPU: ${cpuModel}`);
  console.log(`Total Memory: ${totalMemory} bytes`);

  const endTime = performance.now();
  console.log(`Execution time: ${endTime - startTime}ms`);
}

main().catch((error) => {
  console.error('An error occurred:', error);
});

