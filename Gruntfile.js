module.exports = function(grunt) {
  grunt.initConfig({
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('default', ['compass']);
};
