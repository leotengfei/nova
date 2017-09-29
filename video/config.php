<?php
$config = array (	
		//应用ID,您的APPID。
		'app_id' => "2016080800194258",

		//商户私钥
		'merchant_private_key' => "MIIEowIBAAKCAQEAovtMUQhh+VgGCJlxCm8HOEVvzzv5FqJVJYFbOU5PZQ4LVSLhhqRDcCcJ7dkHYJYsn6aKvlYqJUZY1mtfFtdH+wgLMwgZ8I8RzWIp4Ij1IOC6K1QL0XrvlwyILbjaV0dei6LabgB+BYjS9FYIdA/M4xWLiZZqkkxaM+ZNeqzk/FbVno9ZX/dIa5EyX3PlUP6E1vInCtF9CM8K549BieQFO21NhdYg0Alzsjj6g6IjpmU5uxBpSi1ZQIgHikvf6bTcppa0cjhJ5x/DQPK68vKAEUMSrD1to3izi8MKMZyOLlI57Iku5QwZUAwCQNY8SKFJR3VRN3iF7TknbjkojlFBhwIDAQABAoIBAQCGIvEymAWao/mDRlYk0jBM/ckB9EgTetM9JPOhfHQXpbFqBmU63SKrwVWIreBGfBKJ6xWxhVT2jKk8/+2o7NHPJ1WgUICY3gc21B3HMLEeuBZA5tE7PUTHOocxqjv5LUIBBq1jb4BIqc2FTvFyJDbqhqbrPCLF+ZUbteX6myVzD+xMK/SKWIjJ/lyE7TVI62z1ZTsPknOE/D4PU+3/W1Jd47GGT/TagRNWcSPH1QOCOmVazk8T0eHgFxRiobpfoSaMhPlQ2KIIdY/Qcx3TSIpa0t1stiGlR6DPrO+7xLoc68o9gTmpNM8/ALZhIaeswKcF+hZOzuCIxd7iB3PlBQUhAoGBAM60A4HMCx3MJr5Om5bpp9TuOjDlOEPP7zPvfI7DpdCUfGjNRyPmy8XT5AvpNs6TU83qAA0uKkafmcwLr8F4Bb+Z6GHuy2GqMXnDBsT4F+HcJxNlTAvsZPotq2ESVHryHQ35bmBB0+s/O8JXIotO/zdj2pgEVoIUslaJiLHKAtl5AoGBAMnZ7ITDznWemBJCe12IrpZQTtwWI0QaZT2ct+qaOuTmoAVppDA5hx9aKFhkI1hhpXw7lsgt949ZYcpWV7ZJiJVDOfcrR4gQxjChm9C9SN+rgIUyl+U01eZYgxkjb+CTdk2Jed4qQX1k9q/u51EIoSZyU5h+hnT/I8O/MVx/yTL/AoGAZQz+FetRl+yhGDJHwBxUbzVTf2nf+s7hqusuYoDlRDYDKB0K5VNEVV9EQkpt/8lok+cMxWTHSCVoQ6eG8bciYEv2nkHmbcWNUHB2k76RtloxRDsmVUHpD6FaAie64ywP5jAFtMsZtg0Awv5kJeSlwkdvqxebzxYdJU8xY3FVuUkCgYBOz1tdauYNXmKZnoN0PY2M+sYPgEU8reGhcLMOUjF0dec8tcZ5Xby4LQdbm52BQH7QRqPUfL4PpiJcUeHlNkixnpHfQ3KmWYZILpEbqwvs6JVBbEOKJlrtmNl20zM3R9wE4gxHBdCUGPuILYr7RJdG35RsEdqFi6h3IQswxmPUGQKBgG5kc7rkdjD7jU8DD4fmS99pEufdziCbqNb79OsExE/9UDmCUK2+UnV5HAyT7XgpQraRwwdeu1HIr40FrvEt37g40pQ/AoPBgaundPjs5QYF75vVL6eKRtuKTa/d85zSZxdDPczdZagAfOwHvo8ebP/75qgAzv1v5CP3WYGSGlgi",
		
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
		'alipay_public_key' => "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwoYZgSTHWFr3XDaVrXj4eCu8lOiu/nf0iNSpfyxYV/JW/jBkJM9iEWocZ59aVyZyDKO8oKxDFCjfz04UGChlQCGk1iD0UsXofSGPK0I7M+ZP9J/Mf6uGm0DdYXKAFRNzyzmzPiV45t8s7beH+rsI4YlYl7/KR3QW5FyCPhAsh4X4QDRnkdgc2QmLBOWa/4pDNBfFNAkkfyulLq07dKeL9/R5LMISGZiJc8MlB9Adfe/55uUfECX/1WCWJ5eG3v9YOtDgvmieK8PgaSx7ywqPGlJZ0YIdigciChpLu+Vn8zaFTt4idsh6W3UZ9gnr9U7KMthHZq7DT3+nAwZ5lASi+wIDAQAB",
);