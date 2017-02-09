var express = require('express');
var articleModel = require('../model/article');
var markdown = require('markdown').markdown;
//这是一个路由的实例
var router = express.Router();
router.use(function(req,res,next){
  console.log('user');
  next();
});
//当用户访问/的时候，执行对应的回调函数
router.get('/', function(req, res, next) {
  //用数据渲染模板 从session
  //第二个参数对象最后会合并到res.locals对象上，并渲染模板
  //先配置参数，然后再执行查询
  //我们查出来的articleModel中的user是ID，需要通过populate转成对象
  articleModel.find().populate('user').exec(function(err,articles){
    if(err){
      req.flash('error',error);
      return res.redirect('/');
    }
    articles.forEach(function(article){
      //把数据库中存储的源代码在显示的时候转成HTML代码
      article.content =markdown.toHTML(article.content);
    });
    res.render('index', {articles:articles});
  });

});


module.exports = router;
