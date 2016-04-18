'use strict'

const shell = require('shelljs');

//new node project
shell.echo("Starting New Node Project");
shell.sleep(1);
//packages=( "$@" )
var packages = process.argv.slice(1);

//make the directory
shell.echo("Making Directory");
shell.mkdir("~/Desktop/" + packages[0]);
shell.sleep(1);

//create project files
shell.echo("Creating HTML, CSS, and Javascript Files");
shell.cd(~/Desktop/packages[0]);
shell.touch("index.html");
shell.touch("styles.css");
shell.touch("server.js");
shell.sleep(1);

//slice name of project
var newpack = packages.slice(1);

//install Node Packages
shell.echo("Installing Node Packages");
exe("npm init").code;
shell.sleep(1);

newpack.forEach(function(i) {
  //statements
  shell.echo("Installing " + i);
  exe("npm install --save " + i).code
  shell.sleep(1);
)}

shell.echo("done");
