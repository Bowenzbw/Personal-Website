var nodemailer = require('nodemailer');//引入nodemailer模块


var transporter = nodemailer.createTransport({  
service: 'gmail',  
auth: {  
 user: 'bowenmessage@gmail.com',  //开通了stmp的邮箱
 pass: '********' //邮箱的授权码
 
}  
});  
var mailOptions = {  
 from: 'bowenmessage@mail.com', //开通了stmp的邮箱 ,发送者
 to: 'bowenqq.com', // 接受者,可以同时发送给多个邮箱,以逗号隔开  
 subject: '测试邮件', // 标题  
 text:这个邮件是测试用的// 文本  
 // html:`<p>啦啦啦啦</p>`
};  
 
transporter.sendMail(mailOptions, function (err, info) {  
 if (err) {  
   console.log(err);  
   return;  
 }  
 
 console.log('发送成功');  
 res.json('ok');  
});  
