/// <binding BeforeBuild='copy:ReadMeFiles' />
const gulp = require("gulp");
const rename = require("gulp-rename");


gulp.task('copy:ReadMeFiles', async () => {
    gulp.src('../DocfxExample.RazorPages/Readme.md')
        .pipe(rename("ReadMeRazorPages.md"))
        .pipe(gulp.dest('./articles'));
    gulp.src('../DocfxExample.Common/Readme.md')
        .pipe(rename("ReadMeCommon.md"))
        .pipe(gulp.dest('./articles'));
    gulp.src('../DocfxExample.Application/Readme.md')
        .pipe(rename("ReadMeApplication.md"))
        .pipe(gulp.dest('./articles'));
    gulp.src('../DocfxExample.Domain/Readme.md')
        .pipe(rename("ReadMeDomain.md"))
        .pipe(gulp.dest('./articles'));
    gulp.src('../DocfxExample.Infrastructure/Readme.md')
        .pipe(rename("ReadMeInfrastructure.md"))
        .pipe(gulp.dest('./articles'));
    gulp.src('../DocfxExample.SqlServer/Readme.md')
        .pipe(rename("ReadMeSqlServer.md"))
        .pipe(gulp.dest('./articles'));
    gulp.src('../DocfxExample.ApplicationTests/Readme.md')
        .pipe(rename("ReadMeApplicationTests.md"))
        .pipe(gulp.dest('./articles'));
    gulp.src('../DocfxExample.InfrastructureTests/Readme.md')
        .pipe(rename("ReadMeInfrastructureTests.md"))
        .pipe(gulp.dest('./articles'));
});