var gulp = require("gulp");
gulp.task("copyHtml",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\psdd\\PHPTutorial\\WWW\\project\\html"));
});
gulp.task("css",function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest("D:\\psdd\\PHPTutorial\\WWW\\project\\css"));
});
gulp.task("js",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\psdd\\PHPTutorial\\WWW\\project\\js"));
});
gulp.task("img",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\psdd\\PHPTutorial\\WWW\\project\\img"));
});
gulp.task("php",function(){
	gulp.src("php/**/*")
	.pipe(gulp.dest("D:\\psdd\\PHPTutorial\\WWW\\project\\php"));
});

gulp.task("watch",function(){
	gulp.watch("*.html",["copyHtml"]);
	gulp.watch("css/**/*",["css"]);
	gulp.watch("js/**/*",["js"]);
	gulp.watch("img/**/*.{jpg,png}",["img"]);
	gulp.watch("php/**/*",["php"]);
});

