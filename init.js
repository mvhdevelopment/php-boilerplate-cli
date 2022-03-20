#! /usr/bin/env node
const shell = require("shelljs");

// shell.exec("git clone https://github.com/mvhdevelopment/php-boilerplate.git");
// console.log(process.argv);

var pjson = require('./package.json');
console.log(pjson.version);

switch (process.argv[2]) {
  case "init":
    if(process.argv[3]) {
    shell.exec(
      "git clone https://github.com/mvhdevelopment/php-boilerplate.git " + process.argv[3]
    );
    }else{
      shell.exec(
        "git clone https://github.com/mvhdevelopment/php-boilerplate.git"
      );
    }
    break;
  case "info":
    console.log('***************************************************');
    console.log('*     __  __       _         __      ___    _     *');
    console.log('*    |  \\/  |     | |        \\ \\    / / |  | |    *');
    console.log('*    | \\  / | __ _| |_ ___  __\\ \\  / /| |__| |    *');
    console.log('*    | |\\/| |/ _` | __/ __|/ _ \\ \\/ / |  __  |    *');
    console.log('*    | |  | | (_| | |_\\__ \\  __/\\  /  | |  | |    *');
    console.log('*    |_|  |_|\\__,_|\\__|___/\\___| \\/   |_|  |_|    *');
    console.log('*                                                 *');
    console.log('***************************************************');
    console.log();
    console.log('  This is a boilerplate for PHP projects.');
    console.log();
    console.log('  Usage:');
    // console.log();
    console.log('    php-boilerplate init [project-name]');
    console.log();
    console.log('  Example:');
    // console.log();
    console.log('    php-boilerplate init my-project');
    console.log();
    console.log('  This will create a new project in the current directory.');
    console.log();
    break;
  case "help":
    console.log('***************************************************');
    console.log('*     __  __       _         __      ___    _     *');
    console.log('*    |  \\/  |     | |        \\ \\    / / |  | |    *');
    console.log('*    | \\  / | __ _| |_ ___  __\\ \\  / /| |__| |    *');
    console.log('*    | |\\/| |/ _` | __/ __|/ _ \\ \\/ / |  __  |    *');
    console.log('*    | |  | | (_| | |_\\__ \\  __/\\  /  | |  | |    *');
    console.log('*    |_|  |_|\\__,_|\\__|___/\\___| \\/   |_|  |_|    *');
    console.log('*                                                 *');
    console.log('***************************************************');
    console.log();
    console.log('  This is a boilerplate for PHP projects.');
    console.log();
    console.log('  Usage:');
    // console.log();
    console.log('    php-boilerplate init [project-name]');
    console.log();
    console.log('  Example:');
    // console.log();
    console.log('    php-boilerplate init my-project');
    console.log();
    console.log('  This will create a new project in the current directory.');
    console.log();
    break;
  default:
    console.log('***************************************************');
    console.log('*     __  __       _         __      ___    _     *');
    console.log('*    |  \\/  |     | |        \\ \\    / / |  | |    *');
    console.log('*    | \\  / | __ _| |_ ___  __\\ \\  / /| |__| |    *');
    console.log('*    | |\\/| |/ _` | __/ __|/ _ \\ \\/ / |  __  |    *');
    console.log('*    | |  | | (_| | |_\\__ \\  __/\\  /  | |  | |    *');
    console.log('*    |_|  |_|\\__,_|\\__|___/\\___| \\/   |_|  |_|    *');
    console.log('*                                                 *');
    console.log('***************************************************');
    console.log();
    console.log('  This is a boilerplate for PHP projects.');
    console.log();
    console.log('  Usage:');
    // console.log();
    console.log('    php-boilerplate init [project-name]');
    console.log();
    console.log('  Example:');
    // console.log();
    console.log('    php-boilerplate init my-project');
    console.log();
    console.log('  This will create a new project in the current directory.');
    console.log();
    break;
}
