# Github Chat action

Messages are sent by [chat.js](src/chat.js) and defined in [messages.js](src/messages.js).

## Supported messages

- [New pull request](#new-pull-request)

## Inputs

### `url`

**Required** Your Google Chat Webhook URL. You can find it in "Configure Webhooks" option in Chat rooms.

### `project`

Your jira project code to make a link to the issue if the title contains the code.

## Example workflows

### New pull request

- Create a file `chat-pull-request.yml` in `.github/workflows/` directory with the following content:

```yaml
name: chat-pull-request 
on:
  pull_request:
    types: [opened, reopened]
jobs:
  chat:
    runs-on: ubuntu-latest
    steps:
      - uses: despegar/github-chat-action@v1
        with:
          url: ${{ secrets.GOOGLE_CHAT_PULL_REQUEST_WEBHOOK_URL }}
          project: ${{ secrets.GOOGLE_CHAT_PULL_REQUEST_WEBHOOK_URL }}
```
