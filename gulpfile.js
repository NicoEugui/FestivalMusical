const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done) {
    src('src/scss/app.scss') // Identificar el archivo .scss a compilar
        .pipe(sass()) // Compilarlo
        .pipe(dest('build/css')) // Almacenarla en el Disco Duro
    done();
}

function dev(done) {
    watch('src/scss/app.scss', css);
    done();
}

exports.css = css;
exports.dev = dev;