/*сюда подключать плагиы*/ 
import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber";//оброботка ошибок
import notify from "gulp-notify";//сообщения подсказки
import browsersync from "browser-sync";//локальный сервер
import newer from "gulp-newer";// проверка обновления
import ifPlugin from "gulp-if"//условие ветвление

//экспортируем объект
export const plugins = {
    replace: replace,
    plumber: plumber,
    notifi: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}