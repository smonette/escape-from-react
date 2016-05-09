module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch for changes; perform relevant task
    watch: {
      sass: {
        files: ['sass/**'],
        tasks: ['sass']
      }
    },

    // Compile Sass into CSS
    sass: {
      dist: {
        options: {
          style: 'compressed',
          noCache: true
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'public/styles',
          ext: '.css'
        }]
      }
    }
  });

  grunt.registerTask("compile", ['sass']);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
};