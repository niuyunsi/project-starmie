NO_COLOR=\033[0m
OK_COLOR=\033[32m

# Extract version from package.json
VERSION=$(shell jq -r '.version' package.json)

all: build

build:
	@echo "$(OK_COLOR)>>>>>>>>>>BUILDING>>>>>>>>>>$(NO_COLOR)"
	@echo "$(OK_COLOR)Version: $(VERSION)$(NO_COLOR)"
	@docker build -t project-starmie:latest -t public.ecr.aws/n6q5v2z5/project-starmie:latest -t project-starmie:$(VERSION) -t public.ecr.aws/n6q5v2z5/project-starmie:$(VERSION) .

push:
	@echo "$(OK_COLOR)>>>>>>>>>>PUSHING>>>>>>>>>>$(NO_COLOR)"
	@docker push public.ecr.aws/n6q5v2z5/project-starmie:latest
	@docker push public.ecr.aws/n6q5v2z5/project-starmie:$(VERSION)

.PHONY: build push
