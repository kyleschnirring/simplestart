'use strict'

const shell = require('shelljs');
const prompt = require('prompt');

//new node project
shell.echo("Starting New Node Project");

prompt.start();

prompt.get(['projectname', 'gitYorN'], function (err, result) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('  Project Name: ' + result.projectname);
  console.log('  GIT: ' + result.gitYorN);

  //make the directory
  shell.echo("Making Directory");
  shell.mkdir("~/Desktop/" + result.projectname);

  //create project files
  shell.echo("Creating HTML, CSS, and Javascript Files");
  shell.cd("~/Desktop/" + result.projectname);
  shell.touch("index.html");
  shell.touch("styles.css");
  shell.touch("server.js");

  //install git
  if (result.gitYorN === 'y' || result.gitYorN === 'Y' || result.gitYorN === 'yes' || result.gitYorN === 'Yes') {
    shell.echo("Initiating GIT");
    shell.exec("git init").code;
    shell.echo("Creating a README");
    shell.exec("touch README.md").code;
    shell.echo("Creating a gitignore");
    shell.exec("touch .gitignore").code;
    shell.exec("git add .").code;
    shell.echo("Creating first commit");
    shell.exec("git commit -m 'first commit'").code;

    prompt.get(["addGitRemoteOrigin"], function (err, result) {
      if (err) { return onErr(err); }
      console.log('Command-line input received:');
      console.log('  addGitRemote: ' + result.addGitRemoteOrigin);

      shell.exec("git remote add origin " + result.addGitRemoteOrigin).code;
      shell.echo("Pushing to Master");
      shell.exec("git push -u origin master").code;
    });

    function onErr(err) {
      console.log(err);
      return 1;
    }
  } else {
    shell.echo("done");
  }

});

function onErr(err) {
  console.log(err);
  return 1;
}
