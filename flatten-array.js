
var Flattener = function(){

	this.flatten = function flatten(list){
		return list.reduce(
			function(beginning, next){
				return beginning.concat(Array.isArray(next) ? flatten(next) : next);
			},[]).filter(function(element){return element !== null; });
	};

};

module.exports = Flattener;
