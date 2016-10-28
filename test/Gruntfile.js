var px2rem = require('px2rem');
module.exports = function(grunt) {
  grunt.initConfig({
    postcss: {
      options: {
        processors: [
          px2rem({remUnit: 75})
        ]
      },
      dist: {
        src: 'src/*.css',
        dest: 'build'
      }
    }
  });
  grunt.loadNpmTasks('grunt-postcss');
  grunt.registerTask('default', ['postcss']);
}
