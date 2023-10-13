.PHONY: commit

DEFAULT_MSG := "feat: feat"
COMMIT_MSG ?= $(DEFAULT_MSG)

commit:
	git add --all && git commit -m $(COMMIT_MSG) && git push