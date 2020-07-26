module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve, _reject) => {
      prompter
        .prompt([
          {
            type: 'input',
            name: 'name',
            message: "What's the name of the article?",
          },
          {
            type: 'input',
            name: 'summary',
            message: 'Please enter summary for the article. Leave blank to fill in later.',
          },
        ])
        .then(({ name, summary }) => {
          const date = new Date().toISOString().split('T')[0];
          resolve({
            name,
            date,
            summary: summary.length ? summary : 'Please add a relevant summary',
          });
        })
        .catch((_error) => {
          console.log('Something went wrong or maybe you just exited out of CLI 🤷‍♂️');
        });
    });
  },
};
