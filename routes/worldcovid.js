var express = require('express');
var router = express.Router();

router.get('/countrywise', (req,res) => {
    res.locals.title = "World's Covid-19 Report";
    res.render('pages/worldcovid');
})


module.exports = router;