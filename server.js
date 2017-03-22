var express = require('express')
var app = express()
app.use(express.static('wwwroot'))

app.get('/user',function(req,res){
    console.log(req.query);
    var name = req.query.name;
    var phone = req.query.phone;
    res.status(200).send('<strong>你提交的数据是：</strong><br>'+ '<h1>'+ name +'</h1>'+'<h1>'+ phone +'</h1>')
})
app.listen(3000, function () {
    console.log('Node Server OK')
})