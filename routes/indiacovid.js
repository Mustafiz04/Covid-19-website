var express = require('express');
var router = express.Router();

router.get('/indiatimeline', (req,res) => {
    res.locals.title = "India's Covid-19 report timeline";
    res.render('pages/indiacovid');
})

router.get('/statewise', (req,res) => {
    res.locals.title = "India's Covid-19 State-wise";
    res.render('pages/statewise');
})

module.exports = router;