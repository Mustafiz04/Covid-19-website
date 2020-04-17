var express = require('express');
var router =  express.Router();


router.get('/', ( req,res) => {
    res.locals.title = "COVID-19 Tracker India | Stay Home | Stay Safe";
    res.render('pages/home');
})

router.get('/developer', (req,res) =>  {
    res.locals.title = 'Developer';
    res.render('pages/developer');
})

router.get('/pm-care-fund', (req,res) => {
    res.locals.title = 'Donate for nation';
    res.render('pages/donate');
})


module.exports = router;