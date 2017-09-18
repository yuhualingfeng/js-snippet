# XMLHttpRequest
## 简介
`XMLHttpRequest`对象可以实现页面无刷新来实现与服务端进行数据交互.最先有微软公司设计，随后被Google,Mozilla等使用.现在已成为异步请求的标准，几乎所有的浏览器都支持此对象.它支持的异步请求协议包括`HTTP`，`file`，`ftp`.为便于介绍,后面我们将XMLHttpRequest的实例对象称作`xhr`.
 
## 属性
### UNSENT,OPEND,HEADERS_RECEIVED,LOADING,DONE
这五个属性的值代表xhr.readyState可能存在的值

+ `UNSENT`: 值为 `0`,表示xhr实例已经创建.但尚未执行`xhr.open()`方法.
+ `OPENED`: 值为 `1`,表示`xhr.open()`已经执行.
+ `HEADS_RECEIVED`: 值为 `2`,表示`xhr.send()`已经执行,服务端已经获取到请求头.
+ `LOADING`: 值为 `3`,表示正在接受`xhr.responseText`,通俗讲就是正在获取服务端返回的数据.
+ `DONE`: 值为 `4`,表示整个请求流程已经完成.

### onreadystatechange
从词面意思可以了解到此属性为事件处理程序,当xhr.readyState属性发生变化时，触发此事件.

```javascript
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === xhr.DONE){
			if(xhr.status === 200){
				console.log('请求成功!');
			}else{
				console.log('请求失败!');
			}

			
		}
	}
```
### readyState
只读属性,表示整个异步请求中的状态,其存在五个可能的值.

### response
只读属性,此属性返回服务端的响应内容,客户端可以通过`xhr.responseType`指定响应内容的类型.

### responseText
只读属性,此属性为`xhr.response`的一个特例,返回的响应内容为`text`类型.如果指定了`xhr.responseType`为非`text`类型,则读取此属性时会报错.

```javascript
var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&page=1&per_page=10";

xhr.open(method, url, true);
xhr.responseType = "json";
xhr.onreadystatechange = function () {

  if(xhr.readyState === xhr.DONE) {
  	if(xhr.status === 200){ // 请求成功
  		console.log(xhr.responseText); // 执行到这里会报错
			
  	}else{ // 请求失败
  		console.log(JSON.parse(xhr.response));
  	}
    
  }
};
xhr.send();

```
由于我们指定了`xhr.responseType`的值为`json`,获取响应内容用`xhr.response`就OK了.

### responseType
`responseType`定义响应内容(即`xhr.response`)的类型,其值为枚举类型,分别为:`arraybuffer`,`blob`,`document`,`json`,`text`.如果传入的值为空字符串,则默认为`text`.


### responseURL
返回序列化后的响应URL.

### responseXML
返回被转化为XML格式的响应内容,以下情况将返回null.

+ 请求不成功
+ 还未执行`xhr.send()`方法
+ 响应内容不能被转换为XML或者HTML 

### status
返回响应的状态码,请求成功返回的状态码为`200`,状态码存在的可能值列表请点击[状态码列表](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)查看.

### statusText
返回响应的状态码对应的文字描述,例如 `200` 对应 'OK'.

### timeout
设置请求的超时毫秒数，当请求的时长超出了响应的毫秒数,请求会自动中断.如果是在IE浏览器中,该属性的设置需要在`open()`方法之后和`send()`方法之前.

### ontimeout
此属性为请求超时的事件处理程序,请求超时，触发此方法.

### upload
只读属性,返回一个对象，对象包含了该xhr可以触发的事件.
```
console.log(xhr.uplaod);
<!-- {
	onabort:null,
	onerror:null,
	onload:null,
	onloadend:null,
	onloadstart:null,
	onprogress:null,
	ontimeout:null

} -->
```

### withCredentials
此属性为一个布尔值,表示是否将验证信息(例如cookie)传入到header中.此属性只针对跨站请求有效.


### onprogress,onabort,onerror,onload,onloadend,onloadstart
这些属性是`xhr`的事件处理程序.

+ `onprogress`:可能会在请求的过程中多次调用,在监测文件上传进度时可以使用此属性.
+ `onerror`:请求过程中发生错误时出发此事件处理程序.
+ `onabort`:请求中断会触发此事件处理处理程序.
+ `onload`:请求执行成功后会触发此事件处理程序.
+ `onloadstart`:请求开始时触发此事件处理程序.
+ `onloadend`:请求完成是触发此事件处理程序,`onload`是必须要成功才会调用.

## 方法

### abort()
中断当前请求,当执行`xhr.send()`后此方法才能生效.

### getAllResponseHeaders()
返回响应的header信息(String 类型)，以CRLF分割.如果没有接收到响应头,则返回null.

### getResponseHeader(name)
获取某个header属性的值,`name`参数为需要获取属性值的key.如果header对象不存在此属性或者获取header对象失败,则返回null.

### open(method,url,async)
初始化请求,要执行请求必选先执行此方法.

#### 参数说明
+ `method`:HTTP(s)请求方法,例如`GET`,`POST`,`PUT`,`DELETE` .
+ `url`:请求的路径.
+ `async`:是否为异步请求,一般情况我们这个参数会传`true`.

### ovverideMimeType(mimetype)
将服务端返回的信息强制转化为mimetype类型.

### send()
发送请求,如果请求类型为异步请求,`send()`方法的返回值会立即返回.

### setRequestHeader()
设置HTTP请求头.此方法需要在`open()`之后和`send()`之前执行.如果设置了不被支持的属性,请求可能会报错.
```javascript
	var xhr = new XMLHttpRequest();
	xhr.setRequestHeader('Content-Type','application/json');
```

## 实例
注释部分可以单个放开进行测试.
```javascript
var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&page=1&per_page=10";

xhr.open(method, url, true);
xhr.responseType = "json";

// xhr.timeout = 1000;
// xhr.overrideMimeType("text/xml");
xhr.onreadystatechange = function () {
  
  if(xhr.readyState === xhr.DONE) {
  	if(xhr.status === 200){ // 请求成功
  	  console.log(xhr.response);
      // console.log(JSON.parse(xhr.responseText));
      // console.log(xhr.upload);
      
  	  //console.log(xhr.responseXML);
      //console.log(xhr.responseURL);
      //console.log(xhr.status);
      //console.log(xhr.statusText);
      //console.log('Content-Type:',xhr.getResponseHeader('Content-Type'));
      //console.log(xhr.responseURL);
      //console.log(xhr.getAllResponseHeaders());	
  	}else{ // 请求失败
  		console.log(xhr.response);
  	}
    
  }
};
xhr.ontimeout = function(event){
  console.log('请求超时！');
}
xhr.setRequestHeader('Content-Type','application/json');
xhr.send();

// xhr.abort();  // 中断请求
```


## 兼容性
以上提到的属性和方法在IE7+,Chorme,Firefox等主流浏览器都兼容，其中onprogress,onabort,onerror,onload,onloadend,onloadstart等事件处理程序在IE下需IE10+才能正常运行.
