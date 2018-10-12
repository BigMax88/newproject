var gulp = require("gulp");
gulp.task("copy-html",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\project"));
});

gulp.task("css",function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\project\\css"));
});
gulp.task("js",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\project\\js"));
});
gulp.task("img",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\project\\img"));
});

gulp.task("watch",function(){
	gulp.watch("index.html",["copy-html"]);
	gulp.watch("css/**/*.{jpg,png}",["css"]);
	gulp.watch("js/**/*",["js"]);
	gulp.watch("img/**/*",["img"]);
});

