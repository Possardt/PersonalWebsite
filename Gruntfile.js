module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint : {
			files : [ 'scripts/*.js']
		},
		csslint : {
			srict : {
				options : {
					import: 2,
					"box-sizing": false,
					"universal-selector":false
				},
				src: ['css/*']
			},
			lax : {
				options: {
					import: false,
					"box-sizing" : false,
					"universal-selector": false
				},
				src: ['css/*']
			}
		},
		clean : {
			contents : ['site_build/css/*', 'site_build/scripts/*', 'site_build/images/*',
						'site_build/resume-min.html', 'site_build/index-min.html']
		},
		htmlmin: {
			site_build: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
		 		'site_build/index.html' : 'index.html',
				'site_build/resume.html' : 'resume.html'
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: '*.css',
					dest: 'site_build/css',
					ext: '.css'
				}]
			}
		},
		uglify: {
			site_buid: {
				files: {
					'site_build/scripts/resume.js' : 'scripts/resume.js',
					'site_build/scripts/main.js' : 'scripts/main.js'
				}
			}
		},
		imagemin:{
			dynamic: {
				files : [{
					expand: true,
					cwd: 'images/',
					src: ['*.{png,jpg}'],
					dest: 'site_build/images/'
				}]
			}
		}
	});

	//Load the Grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	//grunt.loadNpmTasks('grunt-replace');

	//Register the default tasks
	grunt.registerTask('default',['jshint', 'csslint',
								  'clean', 'htmlmin',
								  'cssmin','uglify','imagemin']);
};
