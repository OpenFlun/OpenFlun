import { installAll, listPackages, printStatus } from 'open-flun';

// 安装所有官方包（可选参数：'save' | 'dev' | 'none'）
installAll();           // 默认 'save'
// nstallAll('dev');      // 安装到 devDependencies
// nstallAll('none');     // 不修改 package.json

// 获取安装状态列表
const packages = listPackages();
console.log(packages);
// [{ name: '@flun/env', installed: true, version: '1.2.3' }, ...]

// 在控制台美化打印状态
printStatus();