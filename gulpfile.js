//основной модуль
import gulp from "gulp";
//Импорт путей

import {
    path
} from "./gulp/config/path.js";

//передаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp
}

//импорт задач

import {
    copy
} from "./gulp/tasks/copy.js";

import {
    reset
} from "./gulp/tasks/reset.js";

import {
    html
} from "./gulp/tasks/html.js";

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}

//основные задачи

const mainTasks = gulp.parallel(copy, html);

const dev = gulp.series(reset, mainTasks, watcher);
//series -метод выполняет задачи последовательно

//выполнение сценария по умолчанию
gulp.task('default', dev);