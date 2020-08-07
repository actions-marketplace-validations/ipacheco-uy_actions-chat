# Github Chat action

Messages are sent by [chat.js](src/chat.js) and defined in [messages.js](src/messages.js).

## Supported messages

- [New pull request](#new-pull-request)

## Inputs

### `url`

**Required** Your Google Chat Webhook URL. You can find it in "Configure Webhooks" option in Chat rooms.

### `project`

Your jira project code to make a link to the issue if the title contains the code.

### `jiraHost`

Your jira host for making jira link

## Example workflows

### New pull request

- Create a file `chat-pull-request.yml` in `.github/workflows/` directory with the following content:

```yaml
name: chat-pull-request 
on:
  pull_request:
    types: [opened, reopened]
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      - name: Checkout Repo
        # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
        uses: actions/checkout@v2
      
      - name: Google chatroom message
        uses: ipacheco-uy/actions-chat@v2.0.2
        with:
          # Google Chat Webhook URL
          url: ${{ secrets.CHAT_WEBHOOK }}
          project: AA
          jiraHost: https://jira.com
```
