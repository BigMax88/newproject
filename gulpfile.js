var gulp = require("gulp");
gulp.task("copy-index",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\project"));
});
gulp.task("copy-second",function(){
	gulp.src("second.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\project"));
});
gulp.task("copy-third",function(){
	gulp.src("third.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\project"));
});

gulp.task("copy-fifth",function(){
	gulp.src("fifth.html")
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
	gulp.watch(["index.html"],["copy-index"]);
	gulp.watch("second.html",["copy-second"]);
	gulp.watch("third.html",["copy-third"]);
	gulp.watch("fifth.html",["copy-fifth"]);
	gulp.watch("css/**/*",["css"]);
	gulp.watch("js/**/*",["js"]);
	gulp.watch("img/**/*.{jpg,png}",["img"]);
});

