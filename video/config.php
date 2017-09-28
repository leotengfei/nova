<?php
$config = array (	
		//应用ID,您的APPID。
		'app_id' => "2016081900289806",

		//商户私钥
		'merchant_private_key' => "MIIEpAIBAAKCAQEA2P4Y9uXq17ydZeH//po7hBSsl1M+jfU7JtPQkgH9eL5dy5bwZvEg7iyYvzE/vyG2WA50/AKJvE7h2fpRKsCc3nDJ1+rR2ddQdOKBBXk7MzfBuIUFGd5NFK6NAHkGATRBLFJ7+MR/PI98ILdceAEx2BP1hnr5vZEx6qSxPuNrM2XYN+1SrC7IBqYPcN/OFHNg+FKyFQa9CsoxuXJhIF3J3yw01d7JPgFHMh/ZcAjQW7GQJkRAxx/5byUFHjtNdKoSrV/PPbAUf+kkpR0ipPZOF0t1RDyWS6Gthm+lRk5le6weaVTO4fjLl2AkOqg0hMgpRuaIhgQ/lWiIxteCLakoWwIDAQABAoIBAQC1quaTrqISxGKybae5LL8vMW/dsV/p0aoYM7Wmx+vCLv6v+EqEpNQBE20+hKjuB/d1eYUPh8Bw20nTCPLzbBbpVFxoXLwcOVuuwANs5bZehwu0xAklQywdaJW8E5anY2w9A0GvYDN2LFqruVe9UKK+WNdyI3r67phv7jpGgHe7qrjgiISddUL4jIxDiaVCehOELucGqvY+UL+7k8bwAAx89za986Z2lt2mYp7WfNGlM5itaqYVKmVliJHLgaXlLpu+EZ9TzdBjMbIQJsPEFAcnptadO6be4bgKHd9EGIuuPhXk3EibVnA8ftNEu7xf0x2FII84QZlx/4Hf1lJ258rhAoGBAPzMmoCM7e2/JRwoH716tX8RxLgRMMulcXpKlCBYu7ak6m47QEbcvK9xpbM++Q3BFVCeliTj+mFHEHA3R2oVH8XYmpG8NFWns3SVK0fTMHHTy9wOEL+1BYB0de/wpmP2w3Ek2zTOL/8AZY1iDB9bMsqw3egBJBO7S+G4PK2C/YlPAoGBANu9byCNp5vmMnzGHoOxzSh5Mmt1ugAPHBIrwidOT1I6oa+paGJ+Ps5fX1fsXWD8tz6l6tJpew8PBogUkU3Gubfqhm7OhNCWnkmv8ETP1Tk+fMnY07+e/KstO6ztVMUmbb5BdcmrbOxgthjkTCAVE0N8fjiGcIV9/K75JDeAA9U1AoGATG70W9/AZHzBlKTRC/IZBCV0LA8OiNQp3kbESI9rmgp80v1ZLtO4vPcImYx1suHpNunsDZVcc6MP5k3gasOeSqx195BG5osA6EPdxSamZBQcdBlQmRX7Zt5Pdk91j43hg8kX+fxJaLlO+xNlBOoHDl+xiF8n8EtV4xZYSkHrtGMCgYEAwEXctA5fJ7HgYX91+eQdURnjfVXw39ZYyKmTZJNIIvp8udkxJmWzDR80rRl8h735lY7WjzCO5hlOrMnabsTBguVqphB89Iumi3GwenWk7Eb6KCBbACPckOeufNzaPPwoML7Ukxc14wuoqtUwqy3lwjpvs4QndxdLf8su3oVcVTUCgYAIFvvAA+ksAWytnX2G+d522egMouA/SaocxEdwKXcGUBbReNEbVHzf4J8+yiDXuQOrFSBXje5pdDitVj1iVZh95RdaMy/xZd6fSF48ugdMUSyn/MpKH70Ei4rJlHe1QiG3mwADdBQKZZ2VLTk5SmB5lXo/W3ZLS5CPylsq7+IoEQ==",
		
		//异步通知地址
        'notify_url' => "http://www.wxxk.org/video/notify_url.php",

        //同步跳转
        'return_url' => "http://www.wxxk.org/video/return_url.php",

		//编码格式
		'charset' => "UTF-8",

		//签名方式
		'sign_type'=>"RSA2",

		//支付宝网关
		'gatewayUrl' => "https://openapi.alipaydev.com/gateway.do",

		//支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
		'alipay_public_key' => "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwX+0XgfdIJ9PlkSDtvMC3wrUOzWwdYeWPRY6JhmkMnRaVjo86nIxA434HAEB6lg9KkTsQeYK6QBjrITiDu5EX0EOrj92HXbP7Oc4OYvxHzWTf99avb0wFqTKtmyCKbMH6Qh1o2/Yw84DMfgN3iT2P+1lpND5NbKe6RsfQuchTeoOt79ufHFVggiHpMKPW7AM/Cu9aL119A0PjGmTXEa8C8gVt8JZksuN5KYPZ0//Gs8wbxXa2A2a5UooPtrqLknM9XvpSXeZ3BAyJq6ze/FRRGiq832pzkJzj9xFbl0A2dEctLCJn5v6rgKTIduGkNdLhuTaA2AbuL4XohZStG/7CQIDAQAB",
);