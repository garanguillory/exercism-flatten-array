
var Flattener = function(){
	function compress(list){
		return list.reduce(
			function(beginning, next){
				return beginning.concat(Array.isArray(next) ? compress(next) : next);
			},[]).filter(function(element){return element !== null; });
	}

	this.flatten = function(array){
		return compress(array);
	};
};

module.exports = Flattener;
