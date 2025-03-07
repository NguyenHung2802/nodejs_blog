class NewsController {

    // Get /News
    index(res, rep){
        res.render('news');
    }
}

module.exports = NewsController;