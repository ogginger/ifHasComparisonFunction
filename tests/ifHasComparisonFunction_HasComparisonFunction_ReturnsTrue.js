//ifHasComparisonFunction_HasComparisonFunction_ReturnsTrue.js: Testing logic.

define([
	"ifHasComparisonFunction"
], function(
	ifHasComparisonFunction
) {
	return {
		"Name":"ifHasComparisonFunction_HasComparisonFunction_ReturnsTrue",
		"Input": { "ComparisonFunction": undefined },
		"Function": ifHasComparisonFunction,
		"ExpectedOutput": true,
		"Comparator": {
			"Debug": false
		}
	};
});
