module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint : {
			files : [ 'scripts/*.js']
		},
		csslint : {
			srict : {
				options : {
					import: 2
				},
				src: ['css/*']
			},
			lax : {
				options: {
					import: false
				},
				src: ['css/*']
			}
		}
	});

	//Load the Grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');

	//Register the default tasks
	grunt.registerTask('default',['jshint', 'csslint']);
};