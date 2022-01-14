
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {
            sourcemaps: true
        })
        .pipe(app.gulp.dest(app.path.bulid.css))
        .pipe(app.plugins.browsersync.stream());
}