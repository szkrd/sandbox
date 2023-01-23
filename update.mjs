// renders README.ejs to README.md using package.json from the project subdirectories
import ejs from 'ejs';
import shell from 'shelljs';
import { writeFileSync } from 'fs';
const blacklist = ['node_modules'];
const templateData = { projects: [] };
templateData.projects = shell.ls('-d', '*/')
  .map(dirName => dirName.replace(/[\/\\]*$/, ''))
  .filter(dirName => !blacklist.includes(dirName))
  .map(dirName => JSON.parse(shell.cat(`${dirName}/package.json`) + ''));
const rendered = ejs.render(shell.cat('README.ejs') + '', templateData);
writeFileSync('README.md', rendered, 'utf-8');
