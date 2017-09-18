

var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&page=1&per_page=10";

xhr.open(method, url, true);
xhr.responseType = "json";
// xhr.timeout = 1;
// xhr.overrideMimeType("text/xml");
xhr.onreadystatechange = function () {
	//console.log(xhr.statusText);
	//console.log(xhr.responseText);
  
  if(xhr.readyState === xhr.DONE) {
  	if(xhr.status === 200){ // 请求成功
      // console.log(JSON.parse(xhr.responseText));
      // console.log(xhr.upload);
      console.log(xhr.response);
  		//console.log(xhr.responseXML);
      //console.log(xhr.responseURL);
      //console.log(xhr.status);
      //console.log(xhr.statusText);
      //console.log('Content-Type:',xhr.getResponseHeader('Content-Type'));
      //console.log(xhr.responseURL);
      //console.log(xhr.getAllResponseHeaders());	
      //console.log(xhr.getResponseHeader('Cache-Control'));
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