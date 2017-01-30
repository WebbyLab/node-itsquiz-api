const itsquiz = require('../src');
const api = itsquiz({ apiPrefix: 'https://app.itsquiz.com/api/v1' });

api.quizzes.list().then( data => {
    console.log(data);
}).catch( error => {
    console.log(error);
});
