import { configFTP } from '../config/ftp.js';
import vinyLFTP from 'vinyl-ftp';
import util from 'gulp-util';

export const ftp = () => {
configFTP.log = util.log;
const ftpConnect = vinylFTP.creeate(configFTP);
    return app.gulp.src(`${app.path.buildFolder} /**/*.*`,{})
        /*  .pipe(app.plugins.plumber(
                    app.plugins.notify.onError({
                        /*.onerror ,
                        title: "scss",
                        message: "Error: <%= error.message %>"
                    })))*/
.pipe(ftpConnect.dest(`${app.path.ftp}/${app.path.rootFolder}`));
}