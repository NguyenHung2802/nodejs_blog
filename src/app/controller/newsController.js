class NewsController {

    // Get /News
    index(rep, res){
        res.render('news');
    }

    // [GET] news slag
    show (rep, res) {
        res.send('NEWS DETAILS');
    }
}

module.exports = new NewsController;