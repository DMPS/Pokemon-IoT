//Extend the String object with toBase64() and fromBase64() functions
String.prototype.toBase64 = function() {
    return new Buffer(this.valueOf()).toString('base64')
}
String.prototype.fromBase64 = function() {
    return new Buffer(this.valueOf(),'base64').toString('ascii')
}
// Converts a URL Query String into an object map
function convertQueryToMap(query) {
  function setObjValue(object, path, value) {
    var pathArray = path.split('.');
    for(var i = 0; i < pathArray.length; i++) {
        if(i == pathArray.length-1) {
            object[pathArray[i]] = value;
        } else {
            if(!(pathArray[i] in object)) object[pathArray[i]] = {};
            object = object[pathArray[i]];
        }
    }
    return;
}
  var result = {}
  if (query){
    query = query.split('&');
    for (x in query){
      var x = query[x].split('=');
      setObjValue(result,x[0],decodeURIComponent(x[1]));
    }
  }
  return result;
}
