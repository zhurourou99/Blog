//要求下面的路由必须登录后才能访问
exports.checkLogin = function(req,res,next){
   if(req.session.user){
       next();
   }else{
       req.flash('error','未登陆');
       res.redirect('/users/login');
   }
}
//要求下面的路由必须未登录后才能访问
exports.checkNotLogin = function(req,res,next){
    if(req.session.user){
        req.flash('error','已 登陆');
        res.redirect('/');
    }else{
        next();
    }
}