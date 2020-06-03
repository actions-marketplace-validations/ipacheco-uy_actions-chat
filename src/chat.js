const github = require('@actions/github')
const { newAxios } = require('./axios')
const { openedPullRequest } = require('./messages')

/**
 * Send Google Chat message.
 *
 * @param {string} url - Google Chat Webhook URL
 */
const send = async (url) => {
  const axiosInstance = newAxios(url)

  const { repo } = github.context.repo
  const title = github.context.payload.pull_request.title
  const author = github.context.actor
  const htmlUrl = github.context.payload.pull_request.html_url

  const body = openedPullRequest(repo, title, author, htmlUrl)
  const response = await axiosInstance.post(url, body)

  if (response.status !== 200) throw new Error(`Google Chat notification failed. response status=${response.status}`)
}

module.exports = { send }