module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    }
	,
  
  
	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'style/style.css': 'sass/style.sass'
  			}
  		}
  	},
	
	watch: {
		scripts: {
			files: ['sass/*.sass'],
			tasks: ['sass'],
			options: {
				spawn: false,
			},
		} 
	}
	});
	
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass','jshint','watch']);

};