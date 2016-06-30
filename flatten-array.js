
var Flattener = function(){
	function compress(list){
		return list.reduce(
			function(beginning, next){
				return beginning.concat(Array.isArray(next) ? compress(next) : next);
			},[]);
	}

	this.flatten = function(array){
		var result = compress(array);
			return result.filter(function(element){
				return element !== null;
			});
	};
};

module.exports = Flattener;

// if(array.some(function(element){return Array.isArray(element)}))

// function compress(list){
// 	list.reduce(
// 				function(accum, curr){
// 					return accum.concat(curr);
// 				},[]);
// }