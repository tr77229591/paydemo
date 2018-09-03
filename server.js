const express =require('express');
const crypto =require('crypto');
const Reqcli=require('node-rest-client').Client;
const path = require('path');
const fs = require('fs');

const xmlreader = require("xmlreader");




var app = express();
var reqcli = new Reqcli();

i=568
nonce_sum=1000000016
trade_no=561903606216

mch_create_ip="127.0.0.1"
// mch_id="102545707300"
mch_id=102532336411
// nonce_sum=nonce_sum+i
// nonce_str=(nonce_sum).toString()
nonce_str="wNzpaD0sN17KI80yBQwINNHfmOIeNqap"
notify_url="127.0.0.1"
trade_no=trade_no+i
out_trade_no=(trade_no).toString()
service="pay.alipay.native"
total_fee="1"
key1="58bb7db599afc86ea7f7b262c32ff42f"
key="7d0561ce1d01495bd586f7d9815e5198"
// privateKey= fs.readFileSync('./app_private_key.pem', 'ascii'),
// alipayPublicKey= fs.readFileSync('./app_public_key.pem', 'ascii'),



test="attach=附加信息&body=测试购买商品&mch_create_ip=127.0.0.1&mch_id=102532336411&nonce_str=wNzpaD0sN17KI80yBQwINNHfmOIeNqap&notify_url=http://www.baidu.cn/notify.aspx&out_trade_no=6057113230875088&service=pay.alipay.native&sign_type=RSA_1_256&total_fee=1&version=1.0"



privateKey=
`-----BEGIN RSA PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCfU8v4BUr81SK
m/H0ahbdQZjEpO8nMyk+xuYSatHwnU4//m47R+4G2YB4Z6PHsJi4+ScfJpQutFh
KrFwTXZ6TDqLvaqZDDkJq5G271g+PmrzFp7f40/E9m0qjeL64RJra0rZql23dvP
W4vVomMRgRcoPOn0YWVp+M6T5PaFgE4M8dh4lMZz57gVwOdd08F99Z92f3QgZtE
jI+/EXvMenXxb/aRofNkt+Wdk2ELJ6MIP0d9UU5v3WgLuuNv5QnQYzj/RMr8GD+
wrDYiNQJxsaTmE/OEJggsumhD4eYY5YlRy2EIN504cujYVKU1wOSZgq9oJCynGR
0aPuQWx58IHxEtAgMBAAECggEAHfEFd8qm2PTE2lTAvec7F+TcgD84IUAz0dZnU
Rtx6YIOoZ5+LH/zVG6juYLJU/Oo5RPAc+iMVS68u2JMCp7zm8Ft7B3JkrbuHLNH
GuR6Q7PQuXN8PkDcOxqDmZ2kPJzl4PZvBZRE0abdug+tMatGzpGAuJzrWcB/N0o
VIvrXp9PnOqfo/Y5nxmpOFCImJppIS3AL1pftNtQZo9G15CPHDYtpUbXPtD2Mjj
W4OLxKuPRoHSwUgo6LW9XSwNXfcuK+lbzLL0BhlWD9IV/+yCEUEblN87yxxfhpQ
FaAhXj5W+B3YsMOZuK93+XMOpYmw8EpUDMObOnvwb0NSHUrV2RUAQKBgQDTojln
NS1e7+tjPzFtOhGPj1uCBPAEIeHAcnPgd80bEiujxMLCnGaAvmnTrMu4Xo0e5fA
P4F7R6UD+IUsfr3CAAu7CadQ49TW+SovAvciy9AZuSVVIwynu6QdYgFyPKe1LZY
AEq5k+mB1Vh5q0RoxMNAA5pGYKg8+4MmmsJi7X7QKBgQDAunCOqIiH128bs/1VR
IhDpzuRW5Qr/SRbO2saVg5RSHnO/nGT2OuxSTTkc8yrx7qd9SmAxXl5kR238DhM
OQOnRBomldmVtAJuJgrdQyt0wXfeQVQqshqCUaE/xhEbpSCdbPSZbKZZdplV0y6
O5vXIhxw+1qAvXLcxw46s3R92QQKBgQClQ+ejywkVPDILHMwSSehwvThufkCYWY
UbbcVDowpOe5AMoZidtNju7MNjg2rLHTsCx/kBzOr+7THNwl4R7kTiEmg09cO+f
u5rHXepGgtig+GJukaZPZ6/bMZJvGOLgOhHmomwG/jdwpgVtIGBCh6BW5JZcSIm
T+ykIOoYfvDRuQKBgCgwOHxnBGFfORoLxE3dhpSk8LT05cbueIBVuZW6UC3+8Pe
K82AjIbLMUy04QHupoG6Dyu3BP/1rl0jd3L94PBzLBLD7Gm4vJTqW0DknYo5sMX
S1JrnofcKjBv7nbHXZTx3EtJSxpVaOdpcA/HpsCuCP3AH2e1yk9sZ3wu6lBYSBA
oGACYM60j1CVRNSZxUNRgiwfWzS69qI1eezPc7xQEganpVBI9SZcTNp1kpDKmQi
kXJ4Yb5XWn12HCY/sFeBW6Su3ruNqxvg1XiUPbH6A6nxd5B3QX0mS9+wDm6ONys
PLRdKbfFO0mdP4CeyuGPdvDIMXP4dJdLhMUL4pcJLI0B7gBE=
-----END RSA PRIVATE KEY-----`
// xxx="attach=附加信息&body=测试支付&mch_create_ip="+mch_create_ip+"&mch_id="+mch_id+"&nonce_str="+nonce_str+"&notify_url="+notify_url+"&out_trade_no="+out_trade_no+"&service="+service+"&sign_type=RSA_1_256"+"&total_fee="+total_fee+"&version=1.0"


privateKey=
`-----BEGIN RSA PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCfU8v4BUr81SKm/H0ahbdQZjEpO8nMyk+xuYSatHwnU4//m47R+
4G2YB4Z6PHsJi4+ScfJpQutFhKrFwTXZ6TDqLvaqZDDkJq5G271g+PmrzFp7f40/E9m0qjeL64RJra0rZql23dvPW4vVomMRgRcoPOn0YWVp+M6T5PaFgE4M8dh4lMZz57gVwOdd08F99Z92f3QgZtEjI+/EXvMenXxb/aRofNkt+Wdk2ELJ6MIP0d9UU5v3WgLuuNv5QnQYzj/RMr8GD+wrDYiNQJxsaTmE/OEJggsumhD4eYY5YlRy2EIN504cujYVKU1wOSZgq9oJCynGR0aPuQWx58IHxEtAgMBAAECggEAHfEFd8qm2PTE2lTAvec7F+TcgD84IUAz0dZnURtx6YIOoZ5+LH/zVG6juYLJU/Oo5RPAc+iMVS68u2JMCp7zm8Ft7B3JkrbuHLNHGuR6Q7PQuXN8PkDcOxqDmZ2kPJzl4PZvBZRE0abdug+tMatGzpGAuJzrWcB/N0oVIvrXp9PnOqfo/Y5nxmpOFCImJppIS3AL1pftNtQZo9G15CPHDYtpUbXPtD2MjjW4OLxKuPRoHSwUgo6LW9XSwNXfcuK+lbzLL0BhlWD9IV/+yCEUEblN87yxxfhpQFaAhXj5W+B3YsMOZuK93+XMOpYmw8EpUDMObOnvwb0NSHUrV2RUAQKBgQDTojlnNS1e7+tjPzFtOhGPj1uCBPAEIeHAcnPgd80bEiujxMLCnGaAvmnTrMu4Xo0e5fAP4F7R6UD+IUsfr3CAAu7CadQ49TW+SovAvciy9AZuSVVIwynu6QdYgFyPKe1LZYAEq5k+mB1Vh5q0RoxMNAA5pGYKg8+4MmmsJi7X7QKBgQDAunCOqIiH128bs/1VRIhDpzuRW5Qr/SRbO2saVg5RSHnO/nGT2OuxSTTkc8yrx7qd9SmAxXl5kR238DhMOQOnRBomldmVtAJuJgrdQyt0wXfeQVQqshqCUaE/xhEbpSCdbPSZbKZZdplV0y6O5vXIhxw+1qAvXLcxw46s3R92QQKBgQClQ+ejywkVPDILHMwSSehwvThufkCYWYUbbcVDowpOe5AMoZidtNju7MNjg2rLHTsCx/kBzOr+7THNwl4R7kTiEmg09cO+fu5rHXepGgtig+GJukaZPZ6/bMZJvGOLgOhHmomwG/jdwpgVtIGBCh6BW5JZcSImT+ykIOoYfvDRuQKBgCgwOHxnBGFfORoLxE3dhpSk8LT05cbueIBVuZW6UC3+8PeK82AjIbLMUy04QHupoG6Dyu3BP/1rl0jd3L94PBzLBLD7Gm4vJTqW0DknYo5sMXS1JrnofcKjBv7nbHXZTx3EtJSxpVaOdpcA/HpsCuCP3AH2e1yk9sZ3wu6lBYSBAoGACYM60j1CVRNSZxUNRgiwfWzS69qI1eezPc7xQEganpVBI9SZcTNp1kpDKmQikXJ4Yb5XWn12HCY/sFeBW6Su3ruNqxvg1XiUPbH6A6nxd5B3QX0mS9+wDm6ONysPLRdKbfFO0mdP4CeyuGPdvDIMXP4dJdLhMUL4pcJLI0B7gBE=`

test="attach=附加信息&body=测试购买商品&mch_create_ip=127.0.0.1&mch_id=102532336411&nonce_str=wNzpaD0sN17KI80yBQwINNHfmOIeNqap&notify_url=http://www.baidu.cn/notify.aspx&out_trade_no=6057113230875088&service=pay.alipay.native&sign_type=RSA_1_256&total_fee=1&version=1.0"

privateKey=`-----BEGIN RSA PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCfU8v4BUr81SKm/H0ahbdQZjEpO8nMyk+xuYSatHwnU4//m47R+
4G2YB4Z6PHsJi4+ScfJpQutFhKrFwTXZ6TDqLvaqZDDkJq5G271g+PmrzFp7f40/E9m0qjeL64RJra0rZql23dvPW4vVomMRgRcoPOn0
YWVp+M6T5PaFgE4M8dh4lMZz57gVwOdd08F99Z92f3QgZtEjI+/EXvMenXxb/aRofNkt+Wdk2ELJ6MIP0d9UU5v3WgLuuNv5QnQYzj/
RMr8GD+wrDYiNQJxsaTmE/OEJggsumhD4eYY5YlRy2EIN504cujYVKU1wOSZgq9oJCynGR0aPuQWx58IHxEtAgMBAAECggEAHfE
Fd8qm2PTE2lTAvec7F+TcgD84IUAz0dZnURtx6YIOoZ5+LH/zVG6juYLJU/Oo5RPAc+iMVS68u2JMCp7zm8Ft7B3JkrbuHLNHGuR6Q7
PQuXN8PkDcOxqDmZ2kPJzl4PZvBZRE0abdug+tMatGzpGAuJzrWcB/N0oVIvrXp9PnOqfo/Y5nxmpOFCImJppIS3AL1pftNtQZo9G15C
PHDYtpUbXPtD2MjjW4OLxKuPRoHSwUgo6LW9XSwNXfcuK+lbzLL0BhlWD9IV/+yCEUEblN87yxxfhpQFaAhXj5W+B3YsMOZuK93+X
MOpYmw8EpUDMObOnvwb0NSHUrV2RUAQKBgQDTojlnNS1e7+tjPzFtOhGPj1uCBPAEIeHAcnPgd80bEiujxMLCnGaAvmnTrMu4Xo0
e5fAP4F7R6UD+IUsfr3CAAu7CadQ49TW+SovAvciy9AZuSVVIwynu6QdYgFyPKe1LZYAEq5k+mB1Vh5q0RoxMNAA5pGYKg8+4Mm
msJi7X7QKBgQDAunCOqIiH128bs/1VRIhDpzuRW5Qr/SRbO2saVg5RSHnO/nGT2OuxSTTkc8yrx7qd9SmAxXl5kR238DhMOQOnRBo
mldmVtAJuJgrdQyt0wXfeQVQqshqCUaE/xhEbpSCdbPSZbKZZdplV0y6O5vXIhxw+1qAvXLcxw46s3R92QQKBgQClQ+ejywkVPDILHM
wSSehwvThufkCYWYUbbcVDowpOe5AMoZidtNju7MNjg2rLHTsCx/kBzOr+7THNwl4R7kTiEmg09cO+fu5rHXepGgtig+GJukaZPZ6/bMZ
JvGOLgOhHmomwG/jdwpgVtIGBCh6BW5JZcSImT+ykIOoYfvDRuQKBgCgwOHxnBGFfORoLxE3dhpSk8LT05cbueIBVuZW6UC3+8Pe
K82AjIbLMUy04QHupoG6Dyu3BP/1rl0jd3L94PBzLBLD7Gm4vJTqW0DknYo5sMXS1JrnofcKjBv7nbHXZTx3EtJSxpVaOdpcA/HpsCuCP
3AH2e1yk9sZ3wu6lBYSBAoGACYM60j1CVRNSZxUNRgiwfWzS69qI1eezPc7xQEganpVBI9SZcTNp1kpDKmQikXJ4Yb5XWn12HCY/s
FeBW6Su3ruNqxvg1XiUPbH6A6nxd5B3QX0mS9+wDm6ONysPLRdKbfFO0mdP4CeyuGPdvDIMXP4dJdLhMUL4pcJLI0B7gBE=
-----END RSA PRIVATE KEY-----`

sign_type="RSA_1_256"

sign=crypto.createSign("RSA-SHA256")
sign=sign.update(test)
sign=sign.sign(privateKey,'base64')


console.log(sign)




dataxxx="<xml><attach><![CDATA[附加信息]]></attach><body><![CDATA[测试支付]]></body><mch_create_ip><![CDATA["+mch_create_ip+"]]></mch_create_ip><mch_id><![CDATA["+mch_id+"]]></mch_id><nonce_str><![CDATA["+nonce_str+"]]></nonce_str><notify_url><![CDATA["+notify_url+"]]></notify_url><out_trade_no><![CDATA["+out_trade_no+"]]></out_trade_no><service><![CDATA["+service+"]]></service><sign><![CDATA["+sign+"]]></sign><sign_type><![CDATA["+sign_type+"]]></sign_type><total_fee><![CDATA["+total_fee+"]]></total_fee></xml>"






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
  // console.log(response.xml)
  console.log( response.xml.code_url.text() )
  var code={ addr:response.xml.code_url.text()}

  // res.send(response.xml.code_url.text())
})
});
