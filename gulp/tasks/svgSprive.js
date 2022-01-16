import svgSprite from "gulp-svg-sprite"

export const svgSprive = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
        /*  .pipe(app.plugins.plumber(
                    app.plugins.notify.onError({
                        /*.onerror ,
                        title: "scss",
                        message: "Error: <%= error.message %>"
                    })))*/

                    .pipe(svgSprite({
                        mode: {
                            stack: {
                                sprite: `../icons/icons.svg`,
                                //создавать страницу с перечнем иконок
                                example:true
                            }
                        },
                    }
                    ))
        .pipe(app.gulp.dest(`${app.path.build.images}`));
}

/*export const svgSprive = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
        /*  .pipe(app.plugins.plumber(
                    app.plugins.notify.onError({
                        /*.onerror ,
                        title: "scss",
                        message: "Error: <%= error.message %>"
                    })))
.pipe(app.gulp.dest(`${app.path.build.images}`));
}
/*шаблон*/ 
