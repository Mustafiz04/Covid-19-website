var express = require('express');
var router = express.Router();

router.get('/worldcovid', (req,res) => {
    res.render('pages/worldcovid');
})


module.exports = router;