function getDataType(data){
	return Object.prototype.toString.call(data).match(/\s([a-zA-Z]+)/)[1];
}
