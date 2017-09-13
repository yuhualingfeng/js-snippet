/**
  Promise
  
  定义:Promise对象用于一个一步操作的最终完成(或失败)及其结果值得表示
  
  引用:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise

  语法:
  	new Promise(
  	  // [executor description]
  	  // @param  {[Function]} resolve [resolve函数被调用时,promise的状态被改为fulfilled(完成)]
  	  // @param  {[Function]} reject [reject函数被调用时,promise的状态被改为rejected(失败)]
	  function(resolve,reject){...}
  	)
  
  	
 */

var myFirstPromise = new Promise(function(resolve,reject){

	setTimeout(function(){
		resolve("成功");
	},Math.random()*2000+1000);

	setTimeout(function(){
		reject("失败");
	},Math.random()*2000+1000);

});

myFirstPromise
.then(function(response){
	console.log(response);
})
.catch(function(error){
	console.log(error);
});


