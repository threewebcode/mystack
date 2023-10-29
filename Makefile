.PHONY: github

github:
	@read -rp "Please enter your commit message: " message && \
	if [ -z "$$message" ]; then \
		echo "Commit message cannot be empty. Aborting."; \
		exit 1; \
	fi; \
	git add --all && \
	git commit -m "$$message" && \
	if [ $$? -eq 0 ]; then \
		echo "Commit successful!"; \
		git push; \
		if [ $$? -eq 0 ]; then \
			echo "Push successful!"; \
		else \
			echo "Push failed."; \
		fi; \
	else \
		echo "Commit failed."; \
	fi
