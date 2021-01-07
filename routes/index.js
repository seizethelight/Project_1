var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('main', { 
    title: 'Express' });
});

/* router 역할만 하는 중 */
// router.get('/*.ejs', function(req, res){
//   var url = req.url.substring(1, req.url.indexOf('.html'));
//   res.render(url,{title:'프로젝트', bodyId:url, js:url+'.js'});
// })
router.get('/test', function(req, res){
  res.render('test')
})

module.exports = router;

