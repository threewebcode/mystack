.PHONY: commit ai

commit:
	git add --all && git commit -m "feat: feat" && git push

msg = ""
ifneq ($(filter ai,$(MAKECMDGOALS)),)
	msg := $(word 2,$(MAKECMDGOALS))
endif

ai:
	@TMP_FILE=$$(mktemp); \
	echo "$(msg)" | bito | tee $$TMP_FILE; \
	cat $$TMP_FILE; \
	rm $$TMP_FILE