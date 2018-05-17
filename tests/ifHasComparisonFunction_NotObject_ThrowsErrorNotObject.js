//ifHasComparisonFunction_NotObject_ThrowsErrorNotObject.js: Testing logic.

define([
	"ifHasComparisonFunction"
], function(
	ifHasComparisonFunction
) {
	return {
		"Name":"ifHasComparisonFunction_NotObject_ThrowsErrorNotObject",
		"Input": "not_an_object",
		"Function": function( Input ) {
			var Result = { "message": "No Error." };
			try {
				ifHasComparisonFunction( Input );
			} catch( Error ) {
				Result = Error;
			} finally {
				return Result;
			}
		},
		"ExpectedOutput": { "message": "Error: Input type was not object." },
		"Comparator": {
			"Object": true
		}
	};
});
