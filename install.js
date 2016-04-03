var child_process = require('child_process');
var path = require('path');
var directory = process.argv[2];

var package = require(path.join(directory, 'package.json'));

var dependencies = [];
var index = 0;

for (var key in package.dependencies) {
    var dependency = {
        key: key,
        value: package.dependencies[key]
    };

    if (dependency.value.indexOf('file://') === 0) {
        dependencies.push(dependency);
    }
}

function install(dependency) {
    if (!dependency) {
        return;
    }

    console.log('Installing local dependency ' + dependency.key + ' from ' + dependency.value);

    var child = child_process.exec('npm install ' + dependency.key, { cwd: directory }, function() {
        install(dependencies[++index]);
    });

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
}

if (dependencies.length > 0) {
    install(dependencies[index]);
}
