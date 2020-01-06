const { src, dest } = require('gulp');

function fetchNormalize() {
   return src('node_modules/normalize.css')
    .pipe(dest('src/css/normalize.css'));
}

exports.default = fetchNormalize;