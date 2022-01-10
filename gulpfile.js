//Основной модуль
import gulp from "gulp";

//Импорт путей
import {path} from "./_gulp/config/path.js";
//Импорт общих плагинов
import {plugins} from "./_gulp/config/plugins.js";

// передаем значения в глобальную переменную
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins
}

// Импорт задач
import {reset} from "./_gulp/task/reset.js";
import {copy} from "./_gulp/task/copy.js";
import {html} from "./_gulp/task/html.js";
import {image} from "./_gulp/task/image.js"
import {server} from "./_gulp/task/server.js";
import {scss} from "./_gulp/task/scss.js";
import {script} from "./_gulp/task/script.js";


// Наблюдатель за изменениями файлов
function watcher (){
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.scss, script);
	gulp.watch(path.watch.img, image);
}
//Параллельное выполнение задач
const mainTasks = gulp.parallel(copy, html, scss, script, image);

//Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// выполнение сценариев по умолчанию
gulp.task('default', dev);