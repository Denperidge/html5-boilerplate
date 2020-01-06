const { src, dest } = require('gulp');

function fetchNormalize() {
   return src('node_modules/normalize.css/normalize.css')
    .pipe(dest('src/css/vendor/'));
}

exports.default = fetchNormalize;