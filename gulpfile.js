var gulp = require("gulp"),
	sass = require("gulp-ruby-sass"),
	plumber = require ("gulp-plumber"),
	uglify = require ("gulp-uglify");


gulp.task("style",function(){
	
	
		return sass("style.scss", {style: "compressed"}).on("error", sass.logError).pipe(gulp.dest("build/"))
	
	
	});


gulp.task("script",function(){
	
		gulp.src("main.js").pipe(plumber()).pipe(uglify()).pipe(gulp.dest("build/"))
	
	});
	
gulp.task("watch", function(){
	
		gulp.watch("style.scss",["style"])
		gulp.watch("main.js",["script"])
	
	});
	
gulp.task("default", ["watch"]);
