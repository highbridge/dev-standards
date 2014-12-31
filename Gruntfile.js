module.exports = function(grunt) {

  'use strict';
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options : {
          loadPath: require('node-bourbon').includePaths
        },
        files: {
          'styles/css/main.css' : 'styles/sass/main.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },
    requirejs: {
      compile: {
        options: {
          name: "config",
          baseUrl: "scripts/",
          mainConfigFile: "scripts/config.js",
          out: "scripts/main.min.js",
          findNestedDependencies: true,
          preserveLicenseComments: false,
          include: ['vendor/require.js']
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8080
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect','watch']);
  grunt.registerTask('prod', ['sass','requirejs']);

}