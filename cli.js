#!/usr/bin/env node
import { installAll, printStatus } from './index.js';
import { copyFile } from './copy-files.js';

const helpText = `
open-flun <command>

命令：
  install-all [--save-dev|--no-save]   安装所有 @flun/* 官方包
  list                                 查看已安装的 @flun 包及版本
  init                                 生成 example.js 模板文件到项目根目录
  help                                 显示本帮助

示例：
  npx open-flun install-all
  npx open-flun install-all --save-dev
  npx open-flun list
`;

const [, , command, ...args] = process.argv;

switch (command) {
    case 'install-all':
        if (args.includes('--save-dev')) {
            installAll('dev');
        } else if (args.includes('--no-save')) {
            installAll('none');
        } else {
            installAll('save');
        }
        break;

    case 'list':
        printStatus();
        break;

    case 'init':
        copyFile();
        break;

    case 'help':
    case '--help':
    case '-h':
    default:
        console.log(helpText);
        break;
}