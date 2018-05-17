//test_ifHasComparisonFunction.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "ifHasComparisonFunction",
  "tests/ifHasComparisonFunction_HasComparisonFunction_ReturnsTrue",
  "tests/ifHasComparisonFunction_DoesNotHaveComparisonFunction_ReturnsFalse",
  "tests/ifHasComparisonFunction_NotObject_ThrowsErrorNotObject"
], function(
  TestSuite,
  log,
  ifHasComparisonFunction,
  ifHasComparisonFunction_HasComparisonFunction_ReturnsTrue,
  ifHasComparisonFunction_DoesNotHaveComparisonFunction_ReturnsFalse,
  ifHasComparisonFunction_NotObject_ThrowsErrorNotObject
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_ifHasComparisonFunction initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "ifHasComparisonFunction" );
     

	//Funcational Tests
	xTestSuite.add( ifHasComparisonFunction_HasComparisonFunction_ReturnsTrue );
	xTestSuite.add( ifHasComparisonFunction_DoesNotHaveComparisonFunction_ReturnsFalse );

	//Validation Tests
	xTestSuite.add( ifHasComparisonFunction_NotObject_ThrowsErrorNotObject );

	
        xTestSuite.test();
    }
  });
});
