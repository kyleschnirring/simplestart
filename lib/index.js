'use strict'

const shell = require('shelljs');
const prompt = require('prompt');

//new node project
shell.echo("Starting New Node Project");

prompt.start();

prompt.get(['projectname', 'packages'], function (err, result) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('  Project Name: ' + result.projectname);
  console.log('  Packages: ' + result.packages);

  //make the directory
  shell.echo("Making Directory");
  shell.mkdir("~/Desktop/" + result.projectname);

  //create project files
  shell.echo("Creating HTML, CSS, and Javascript Files");
  shell.cd("~/Desktop/" + result.projectname);
  shell.touch("index.html");
  shell.touch("styles.css");
  shell.touch("server.js");

  //slice name of project
  //var newpack = packages.slice(1);

  //install Node Packages
  shell.echo("Installing Node Packages");
  shell.exec("npm init", function*() {
    yield shell.echo("Installing " + result.packages);
    yield shell.exec("npm install --save " + result.packages).code;
  }).code;

  //newpack.forEach(function(i) {
    //statements
    shell.echo("Installing " + result.packages);
    shell.exec("npm install --save " + result.packages).code;
  //});

  shell.echo("done");
});

function onErr(err) {
  console.log(err);
  return 1;
}
