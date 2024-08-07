const newsRouter = require('./news');
const siteRouter = require('./site');

function routes(app) {
    app.use('/news', newsRouter); //         http://localhost:8081/news

    // app.get('/news', (req, res) => { 
    //     res.render('news');
    // });

    app.use('/', siteRouter); //             http://localhost:8081
    // app.get('/', (req, res) => { 
    //     res.render('home');
    // });


    app.use('/search', siteRouter); //             http://localhost:8081/search
    // app.get('/search', (req, res) => { //         http://localhost:8081/search
    //     console.log(req);
    //     res.render('search');
    // });

    // app.post('/search', (req, res) => { //         
    //     res.send('search');
    // });

}

module.exports = routes;