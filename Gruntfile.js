module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            less: {
                files: ['less/**/*.less'],
                tasks: ['less:process', 'cssmin:dist']
            },
            html: {
                files: ['source.html'],
                tasks: ['htmlmin:dist']
            }
        },
        less: {
            process: {
                files: {
                    'css/style.css': 'less/style.less'
                }
            }
        },
        cssmin: {
            dist: {
                src: ['css/style.css'],
                dest: 'css/style.min.css'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': 'source.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', 'watch');
}