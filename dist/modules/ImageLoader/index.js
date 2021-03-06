Object.defineProperty(exports,"__esModule",{value:true});var id=0;
var requests={};

var ImageLoader={
abort:function abort(requestId){
var image=requests[""+requestId];
if(image){
image.onerror=image.onload=image=null;
delete requests[""+requestId];
}
},
getSize:function getSize(uri,success,failure){
var complete=false;
var interval=setInterval(callback,16);
var requestId=ImageLoader.load(uri,callback,callback);

function callback(){
var image=requests[""+requestId];
if(image){var
naturalHeight=image.naturalHeight;var naturalWidth=image.naturalWidth;
if(naturalHeight&&naturalWidth){
success(naturalWidth,naturalHeight);
complete=true;
}
}
if(complete){
ImageLoader.abort(requestId);
clearInterval(interval);
}
}
},
load:function load(uri,onLoad,onError){
id+=1;
var image=new window.Image();
image.onerror=onError;
image.onload=onLoad;
image.src=uri;
requests[""+id]=image;
return id;
},
prefetch:function prefetch(uri){
return new Promise(function(resolve,reject){
ImageLoader.load(uri,resolve,reject);
});
}};exports.default=


ImageLoader;