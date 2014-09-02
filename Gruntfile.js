module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
  
    concat: {
      dist: {
        src: ['dev_scripts/navigation.js', 'dev_scripts/skip-link-focus-fix.js', 'dev_scripts/jquery.cycle.all.min.js', 'dev_scripts/jquery.maximage.min.js', 'dev_scripts/ric.js'],
        dest: 'build_scripts/built.js',
      },
    },

    uglify: {
      build: {
        src: ['build_scripts/built.js'],
        dest: 'build_scripts/built.min.js'
      }
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');


  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};