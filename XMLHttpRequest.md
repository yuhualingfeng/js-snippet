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

### responseText

### responseType

### responseURL

### responseXML

## 方法

## 实例

## 兼容性
