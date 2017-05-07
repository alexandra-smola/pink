"use strict";

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({
              browsers: ["last 2 versions"]
            })
            // require("css-mqpacker")({
            //   sort: true
            // })
          ]
        },
        src: "css/*.css"
      }
    },

    // csso: {
    //   style: {
    //     options: {
    //       report: "gzip"
    //     },
    //     files: {
    //       "build/css/style.min.css": ["build/css/style.css"]
    //     }
    //   }
    // },

    // imagemin: {
    //   images: {
    //     options: {
    //       optimizationLevel: 3
    //     },
    //     files: [{
    //       expand: true,
    //       src: ["build/img/**/*.{png,jpg,gif}"]
    //     }]
    //   }
    // },

    // svgstore: {
    //   options: {
    //     svg: {
    //       style: "display: none"
    //     }
    //   },
    //   symbols: {
    //     files: {
    //       "build/img/symbols.svg": ["img/icons /*.svg"]
    //     }
    //   }
    // },

    // svgmin: {
    //   symbols: {
    //     files: [{
    //       expand: true,
    //       src: ["build/img/icons/*.svg"]
    //     }]
    //   }
    // },

    // copy: {
    //   build: {
    //     files: [{
    //       expand: true,
    //       src: [
    //         "fonts/**/*.{woff,woff2}",
    //         "img/**",
    //         "js/**",
    //         "*.html"
    //       ],
    //       dest: "build"
    //     }]
    //   },
    //   html: {
    //     files: [{
    //       expand: true,
    //       src: ["*.html"],
    //       dest: "build"
    //     }]
    //   },
    //   scripts: {
    //     files: [{
    //       expand: true,
    //       src: ["js/*.js"],
    //       dest: "build/js"
    //     }]
    //   }
    // },

    // clean: {
    //   build: ["build"]
    // },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      html: {
        files: ["*.html"]
        // tasks: ["copy:html"]
      },
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss"]
      },
      scripts: {
        files: ["js/*.js"],
        tasks: ["jshint"]
      }
    },
    jshint: {
      files: [
        "js/*.js"
      ]
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  // grunt.registerTask("symbols", ["svgmin", "svgstore"]);
  // grunt.registerTask("build", ["clean", "copy", "less", "postcss", "csso", "jshint", "symbols"]);
};