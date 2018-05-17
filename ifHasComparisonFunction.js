//ifHasComparisonFunction.js: Functional Logic.

define([ "underscore" ], function( _ ) {
  return function( Input ) {
	var bResult = false;
	if ( _.isObject( Input ) === false ) {
 		throw { "message": "Error: Input type was not object." };
	} else if (_.has( Input, "ComparisonFunction" )) {
		bResult = true;
	} 
	return bResult;
  };
});
