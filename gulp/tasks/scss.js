import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; //сжатие css файла
import webpcss from 'gulp-webpcss'; // вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; // добавление вендорных префиксов autoPrefixer*/
import groupCssMediaQueries from 'gulp-group-css-media-queries'; //групировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {
            sourcemaps: true
        })

        /*  .pipe(app.plugins.plumber(
              app.plugins.notify.onError({
                  /*.onerror ,
                  title: "scss",
                  message: "Error: <%= error.message %>"
              })))*/


        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))

        .pipe(groupCssMediaQueries())
        .pipe(webpcss({
            webpClass: ".webp",
            noWebpClass: ".no-webp"
        }))

        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        }))


        //раскоментировать если нужен не сжатый дубль файла стилей
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css)) /*bulid*/
        .pipe(app.plugins.browsersync.stream());
}