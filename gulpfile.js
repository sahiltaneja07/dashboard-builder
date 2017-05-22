var gulp = require('gulp');
var connect = require('gulp-connect');
var runSequence = require('run-sequence');
var del = require('del');
var gp_uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var gp_concat = require('gulp-concat');

gulp.task('serve', function() {
    connect.server({
        root: '',
        port: 3001,
        host: 'localhost',
        fallback: 'index.html'
    });
});

gulp.task('deploy', ['minify'], function() {
    runSequence('deploy-styles', 'deploy-html', 'deploy-misc', 'clean-temp');
});

gulp.task('clean-deploy', function() {
  return del(['deploy/']);
});

gulp.task('uglify', ['clean-deploy'], function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/d3/d3.min.js',
        'node_modules/nvd3/build/nv.d3.min.js',
        'node_modules/angular-nvd3/dist/angular-nvd3.min.js',
        'node_modules/sortablejs/Sortable.js',
        'app/dashboard/*.js',
        'app/available-components/*.js',
        './app.js'
    ])
    .pipe(ngAnnotate())
    .pipe(gp_uglify().on('error', function(e) {
        console.log(e);
    }))
    .pipe(gulp.dest('build/js'));
});

gulp.task('concat', ['uglify'], function() {
    return gulp.src(
            [   
                'build/js/jquery.js',
                'build/js/angular.js',
                'build/js/angular-ui-router.js',
                'build/js/d3.min.js',
                'build/js/nv.d3.min.js',
                'build/js/angular-nvd3.min.js',
                'build/js/Sortable.js',
                'build/js/app.js',
                'build/js/dashboard.module.js',
                'build/js/dashboard.config.js',
                'build/js/dashboard.component.js',
                'build/js/chart.module.js',
                'build/js/chart.component.js'
            ]
        )
        .pipe(gp_concat('all.js'))
        .pipe(gulp.dest("build/"));
});

gulp.task('minify', ['concat']);

gulp.task('deploy-styles', function() {
    return gulp.src([
            "app/stylesheets/*"
        ])
        .pipe(gulp.dest("deploy/app/stylesheets"));
});

gulp.task('deploy-html', function() {
    return gulp.src([
            "app/**/*.html"
        ])
        .pipe(gulp.dest("deploy/app"));
});

gulp.task('deploy-misc', function() {
    return gulp.src([
            "build/all.js",
            "index.html"
        ])
        .pipe(gulp.dest("deploy"));
});

gulp.task('clean-temp', function() {
    return del(['build/']);
});