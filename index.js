const core = require('@actions/core')
const chat = require('./src/chat')

// Run Action.
const run = async () => {
  try {
    const url = core.getInput('url', { required: true })
    const project = core.getInput('project', { required: false })
    const jiraHost = core.getInput('jiraHost', { required: false })
    await chat.send(url, project, jiraHost)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
