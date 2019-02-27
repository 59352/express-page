var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', (req, res, next) => {
    let temp = req.body.txt 
    res.render('test', {title : temp});
    next();
});

router.get('/', (req, res, next) => {
    res.render('test');
});

router.post('/', (req, res, next) => {
    req.body.txt;
})
module.exports = router;
