

var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://www.reddit.com/r/run.json";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
	//console.log(xhr.statusText);
	console.log(xhr.responseText);

  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
  	if(xhr.status === 200){ // 请求成功
  		console.log(JSON.parse(xhr.responseText));	
  	}else{ // 请求失败
  		console.log(JSON.parse(xhr.responseText));
  	}
    
  }
};
xhr.send();