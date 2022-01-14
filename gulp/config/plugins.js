/*сюда подключать плагиы*/ 
import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber";//оброботка ошибок
import notify from "gulp-notify";//сообщения подсказки
import browsersync from "browser-sync";

export const plugins = {
    replace: replace,
    plumber: plumber,
    notifi: notify,
    browsersync: browsersync,
}