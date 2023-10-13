.PHONY: commit

msg = "feat:feat"
ifneq ($(filter commit,$(MAKECMDGOALS)),)
	msg := $(word 2,$(MAKECMDGOALS))
endif

commit:
	git add --all && git commit -m "$(msg)" && git push