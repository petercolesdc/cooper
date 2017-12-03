var gulp            = require("gulp")
    sass            = require("gulp-sass")
    autoprefixer    = require("gulp-autoprefixer")
    sassGlob        = require('gulp-sass-glob')
    del             = require("del")
    nunjucksRender  = require("gulp-nunjucks-render")
    fs              = require("fs")
    runSequence     = require("run-sequence")
    exec            = require("child_process").exec;
    browserSync     = require("browser-sync").create();
    plumber         = require("gulp-plumber");

    // Concat and copy CSS
    gulp.task("scss", function () {
      gulp.src("scss/**/*.scss")
        .pipe(plumber())
        .pipe(sassGlob())
        .pipe(sass({outputStyle : "expanded"}))
        .pipe(autoprefixer({browsers : ["last 6 versions"]}))
        .pipe(gulp.dest("public/css/"))
    })

    // Copy javascript
    gulp.task("js", function () {
      gulp.src("js/**/*.js")
        .pipe(plumber())
        .pipe(gulp.dest("public/js/"))
    })

    // Assets copy
    gulp.task("assets", function () {
      gulp.src("assets/**/*")
        .pipe(plumber())
        .pipe(gulp.dest("public/assets/"))
    })

    // Watch asset folders for changes
    gulp.task("watch", ["scss", "js", "assets"], function () {
      gulp.watch("js/**/*", ["js"])
      gulp.watch("scss/**/*", ["scss"])
      gulp.watch("assets/**/*", ["assets"])
    })

    // --------------------------------------
    // Test templates
    // --------------------------------------

    // Render templates
    gulp.task("render", function () {
      gulp.src("templates/*.html")
        .pipe(plumber())
        .pipe(nunjucksRender({
          path: ["templates"]
        }))
        .pipe(gulp.dest("public"))
    })

    // Watch more things
    gulp.task("watch-all", ["scss", "js", "assets", "render"], function () {
      gulp.watch("js/**/*", ["js"])
      gulp.watch("scss/**/*", ["scss"])
      gulp.watch("assets/**/*", ["assets"])
      gulp.watch("templates/**/*", ["render"])
    })

    // Spin up server
    gulp.task('browser-sync', function() {
        browserSync.init({
            server: {
                baseDir: "public",
            },
            notify: false
        });
        gulp.watch("public/**/*").on('change', browserSync.reload);
    });

    // --------------------------
    // Task runners syntax
    // --------------------------

    gulp.task("default", ["watch"])

    // Spins up a sever to render test templates
    gulp.task("serve", ["watch-all", "browser-sync"])
