module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint : {
			files : [ 'scripts/*.js']
		}
	});

	//Load the Grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-jshint');

	//Register the default tasks
	grunt.registerTask('default',['jshint']);
};