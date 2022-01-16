import del from "del";
import zipPlugin from "gulp-zip";

export const zip = () => {
    del(`./${app.path.rootFolder}.zip`);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
       /* .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                .onerror,
                title: "scss",
                message: "Error: <%= error.message %>"
            })))*/

        .pipe(zipPlugin(`${app.path.rootFolder}.zip`))/*название архива*/ 
        .pipe(app.gulp.dest('./'));
}