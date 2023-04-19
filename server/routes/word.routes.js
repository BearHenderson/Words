const WordController = require('../controllers/word.controller');

module.exports = (app) => {
    app.post('/api/words/register', WordController.register);
    app.post('/api/words/login', WordController.login);
    app.post('/api/words/logout', WordController.logout);
    app.post('/api/word', WordController.createNewWord);
    // app.get('/api/words', WordController.findAllWords);
    // app.get('/api/words/:id', WordController.findOneWord);
    // app.delete('/api/words/:id', WordController.deleteWord);
    // app.put('/api/words/:id', WordController.updateWord);
}