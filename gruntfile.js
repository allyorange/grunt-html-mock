module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      pug: {
        files: ['src/pug/**/*.pug'],
        tasks: ['pug']
      },
      sass: {
        files: ['src/stylesheets/**/*.sass', 'src/stylesheets/**/*.scss'],
        tasks: ['sass:compressed']
      }
    },
    pug: {
      default: {
        options: {
          pretty: true,
          spawn: false,
          data: {
            debug: true
          }
        },
        files: [{
          expand: true,
          cwd: 'src/pug/',
          src: ['**/*.pug', '!_*/**'],
          dest: 'public/',
          ext: '.html'
        }]
      }
    },
    sass: {
      options: {
        'no-source-map': true,
      },
      expanded: {
        options: {
          'style': 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'src/stylesheets/',
          src: ['**/*.sass', '**/*.scss'],
          dest: 'public/css/',
          ext: '.css'
        }]
      },
      compressed: {
        options: {
          'style': 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'src/stylesheets/',
          src: ['**/*.sass', '**/*.scss'],
          dest: 'public/css/',
          ext: '.css'
        }]
      }
    },
    browserSync: {
      default: {
        bsFiles: {
          src: [
            'public/css/*.css',
            'public/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './public'
        }
      }
    },
    clean: {
      default: {
        options: {
          force: true
        },
        src: ['public/**/*.html', 'public/css']
      }
    }
  });

  // load npm tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // define default task
  grunt.registerTask('default', [
    'clean:default',
    'pug:default',
    'sass:compressed',
    'browserSync:default',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:default',
    'pug:default',
    'sass:compressed',
  ]);

  grunt.registerTask('build:expanded', [
    'clean:default',
    'pug:default',
    'sass:expanded',
  ]);
};
