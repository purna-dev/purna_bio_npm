#!/usr/bin/env node
const welcome = require('cli-welcome')
const pkgJson = require('./package.json')

welcome({
    title: pkgJson.name,
    tagLine: pkgJson.description,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
    version: pkgJson.version
});
console.log(`
👋 Hello!
I am Purna Chandra...... || SDE ||

----------------------------------------------------
"Passionate full-stack JavaScript developer with 
expertise in both frontend and backend technologies. 
Proficient in Node.js, React, and MongoDB, with a 
knack for crafting scalable and efficient 
web applications. Committed to continuous learning 
and staying updated with the latest trends in technology."
-----------------------------------------------------

Github : https://github.com/purna-dev/
npm : https://www.npmjs.com/~purnachandra

`)