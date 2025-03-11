
const Course = require('../models/Course');

class SiteController {

    // Get /Home
    async index(rep, res){
        try{
            const courses = await Course.find({});
            res.json(courses);
        } catch(err){
            res.status(404).json({error: 'Course not found'});
        }
        // res.render('home');
    }
    
    //Search  
    search (req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;