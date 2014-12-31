module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                options: {
                    loadPath: require('node-bourbon').includePaths
                },
                files: {
                    'styles/css/main.css': 'styles/sass/main.scss'
                }
            },
            prod: {
                options: {
                    loadPath: require('node-bourbon').includePaths,
                    style: 'compressed'
                },
                files: {
                    'styles/css/main-<%= pkg.version %>.css': 'styles/sass/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass:dev']
            }
        },
        requirejs: {
            compile: {
                options: {
                    name: 'config',
                    baseUrl: 'scripts/',
                    mainConfigFile: 'scripts/config.js',
                    out: 'scripts/main-<%= pkg.version %>.js',
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

    // default grunt task
    grunt.registerTask('default', ['connect', 'watch']);

    // prod release
    grunt.registerTask('prod', ['sass:prod', 'requirejs']);
}