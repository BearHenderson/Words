const QuoteController = require('../controllers/quote.controller');

module.exports = (app) => {
    app.post('/api/quote', QuoteController.createNewQuote);
    app.get('/api/quotes', QuoteController.findAllQuotes);
    app.get('/api/quote/:id', QuoteController.findOneQuote);
    app.get('/api/quoted/:type', QuoteController.findByType);
    app.delete('/api/quotes/:id', QuoteController.deleteQuote);
    app.put('/api/quotes/:id', QuoteController.updateQuote);
}
