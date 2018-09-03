const express =require('express');
const crypto =require('crypto');
const Reqcli=require('node-rest-client').Client;
const path = require('path');

const xmlreader = require("xmlreader");




var app = express();
var reqcli = new Reqcli();



// engine views
app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');





app.get('/',function(req,res){

    res.render('index.pug')

});


app.post('/callback',function(req,res){
  console.log(req.body)
})

i=568
nonce_sum=1000000006
trade_no=561903606226
app.get('/createOrder',function(req,res){

  mch_create_ip="47.104.14.108:9527"
  mch_id="101520000465"
  nonce_sum=nonce_sum+i
  nonce_str=(nonce_sum).toString()
  notify_url="http://47.104.14.108:9527/callback"
  trade_no=trade_no+i
  out_trade_no=(trade_no).toString()
  service="pay.alipay.native"
  total_fee="1"
  key1="58bb7db599afc86ea7f7b262c32ff42f"
  key="7d0561ce1d01495bd586f7d9815e5198"


  xxx="body=测试支付&mch_create_ip="+mch_create_ip+"&mch_id="+mch_id+"&nonce_str="+nonce_str+"&notify_url="+notify_url+"&out_trade_no="+out_trade_no+"&service="+service+"&total_fee="+total_fee+"&key="+key1




  sign=crypto.createHash('md5').update(xxx).digest("hex").toUpperCase();







  dataxxx="<xml><body><![CDATA[测试支付]]></body><mch_create_ip><![CDATA["+mch_create_ip+"]]></mch_create_ip><mch_id><![CDATA["+mch_id+"]]></mch_id><nonce_str><![CDATA["+nonce_str+"]]></nonce_str><notify_url><![CDATA["+notify_url+"]]></notify_url><out_trade_no><![CDATA["+out_trade_no+"]]></out_trade_no><service><![CDATA["+service+"]]></service><sign><![CDATA["+sign+"]]></sign><total_fee><![CDATA["+total_fee+"]]></total_fee></xml>"






  var args = {

      data:dataxxx
  };







  reqcli.post("https://pay.swiftpass.cn/pay/gateway", args, function (data, response) {
      let xml_string = data.toString();
      console.log(xml_string)
    xmlreader.read(xml_string, function(errors, response){
      if(null !== errors ){
        console.log(errors)
        return;
      }
    console.log(response.xml)
    // console.log( response.xml.code_url.text() )
    var code={ addr:response.xml.code_url.text()}
    res.render('order.pug',{
      code:code
    })
    // res.send(response.xml.code_url.text())
  })
  });



});








app.listen(9563,()=>console.log('server is runing on localhost:8080'));
