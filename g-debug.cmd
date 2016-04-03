@ECHO OFF
node-debug --web-port=9999 node_modules\gulp\bin\gulp.js --gulpfile server\gulpfile.babel.js --cwd .\ %*