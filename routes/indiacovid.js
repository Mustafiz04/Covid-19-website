var express = require('express');
var router = express.Router();

router.get('/indiacovid', (req,res) => {
    res.render('pages/indiacovid');
})


module.exports = router;