function callbackExample(name, callback){
    console.log(callback(name));
}

var callback = function(name){
    return "Hello"+ " " + name; 
}
callbackExample("Isaac Ndubuisi", callback);