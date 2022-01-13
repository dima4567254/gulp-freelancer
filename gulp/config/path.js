import * as nodePath from 'path'; //импорт модулей
const rootFolder = nodePath.basename(nodePath.resolve());
//путь к папке с результатом!!!
const buildFolder = `./dist`;
//путь с исходниками!!!
const srcFolder = `./src`;

export const path = {
    /*пути*/
    build: {
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/` /*,*/ /*куда мы хотим перенести!!!*/
    },
    src: {
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        /*путь к папке которую мы копируем!!!*/
        /*

        ** мы проверяем файлы в любых вложеных папках внутри папки файлс
        *.* все файлы нас интересуют
        */
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}