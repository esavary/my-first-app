const { Probot } = require('probot');
const axios = require('axios');

module.exports = (app) => {
  app.log.info('Yay, the app was loaded!');

  app.on('issues.opened', async (context) => {
    const { owner, repo, number } = context.issue();

    // Make a GET request to the Base URL
    const response = await axios.get('https://receptive-yellow-thorium.glitch.me');

    // Create a comment on the issue with the data from the Base URL
    const issueComment = context.issue({
      body: `Thanks for opening this issue!\nThe data from the Base URL is: ${response.data}`,
    });

    // Post the comment to the issue
    await context.octokit.issues.createComment(issueComment);
  });
};



