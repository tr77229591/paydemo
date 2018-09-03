const express =require('express');
const crypto =require('crypto');
const Reqcli=require('node-rest-client').Client;
const path = require('path');
const fs = require('fs');
const bodyparser = require('body-parser')
const xmlreader = require("xmlreader");



var app = express();


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var reqcli = new Reqcli();
app.get('/',function(req,res){

    res.render('index.pug')

});

app.get('/createOrder',function(req,res){
i=568
nonce_sum=1000000016
trade_no=561903606216

mch_create_ip="127.0.0.1"
mch_id="102565729146"
nonce_sum=nonce_sum+i
nonce_str=(nonce_sum).toString()
notify_url="127.0.0.1"
trade_no=trade_no+i
out_trade_no=(trade_no).toString()
service="pay.alipay.native"
total_fee="1"

privateKey= fs.readFileSync('./app_private_key.pem'),

xxx="body=测试支付&mch_create_ip="+mch_create_ip+"&mch_id="+mch_id+"&nonce_str="+nonce_str+"&notify_url="+notify_url+"&out_trade_no="+out_trade_no+"&service="+service+"&sign_type=RSA_1_256&total_fee="+total_fee

console.log(xxx)
sign_type="RSA_1_256"

sign=crypto.createSign("RSA-SHA256")
sign=sign.update(xxx)
sign=sign.sign(privateKey,'base64')


console.log(sign)




dataxxx="<xml><body><![CDATA[测试支付]]></body><mch_create_ip><![CDATA["+mch_create_ip+"]]></mch_create_ip><mch_id><![CDATA["+mch_id+"]]></mch_id><nonce_str><![CDATA["+nonce_str+"]]></nonce_str><notify_url><![CDATA["+notify_url+"]]></notify_url><out_trade_no><![CDATA["+out_trade_no+"]]></out_trade_no><service><![CDATA["+service+"]]></service><sign><![CDATA["+sign+"]]></sign><sign_type><![CDATA["+sign_type+"]]></sign_type><total_fee><![CDATA["+total_fee+"]]></total_fee></xml>"


// engine views
app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');



var args = {

    data:dataxxx
};

app.post('/',function(req,res){

    console.log(req.body)

});



reqcli.post("https://pay.swiftpass.cn/pay/gateway", args, function (data, response) {
    let xml_string = data.toString();
    console.log(xml_string)
  xmlreader.read(xml_string, function(errors, response){
    if(null !== errors ){
      console.log(errors)
      return;
    }
  console.log( response.xml.code_url.text() )
  var code={ addr:response.xml.code_url.text()}
  res.render('order.pug',{
    code:code
  })

})
});

})
app.listen(9563,()=>console.log('server is runing on localhost:9563'));
