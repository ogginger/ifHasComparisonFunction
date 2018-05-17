//build.js: Configuration file for optimizing ifHasComparisonFunction.js. 
/*
	ifHasComparisonFunction depends on:
		1. underscorejs.
			-This module is intended for use on the server using nodejs, so underscorejs depends on the jquery node module.
		2. log. Personal implementation of a function that prints to console.
*/ 
({
    paths: {
	"underscore": "lib/underscore.min",
	"jquery": "empty:",
	"log": "lib/log.min"
    },
    exclude: [ "jquery", "underscore", "log" ],
    name: "ifHasComparisonFunction",
    out: "ifHasComparisonFunction.min.js"
})
