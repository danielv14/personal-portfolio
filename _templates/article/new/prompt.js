module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve, reject) => {
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
          {
            type: 'input',
            name: 'preamble',
            message: 'Enter short optional preamble of the article. It can be omitted.',
          },
        ])
        .then(({ name, summary, preamble }) => {
          const date = new Date().toISOString().split('T')[0];
          if (!name) {
            reject('You have to provide a article name');
            return;
          }
          resolve({
            name,
            date,
            summary: summary.length ? summary : 'Please add a relevant summary',
            preamble,
          });
        })
        .catch((_error) => {
          console.log('Something went wrong or maybe you just exited out of CLI 🤷‍♂️');
        });
    });
  },
};
