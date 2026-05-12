# open-flun

Flun 生态统一入口：一键安装所有官方包、查看安装状态、初始化项目模板;

覆盖以下官方包：
- `@flun/env`
- `@flun/mailer`
- `@flun/windows`
- `@flun/webauthn-server`
- `@flun/webauthn-browser`
- `@flun/html-template`

## 安装

```sh
# 本地安装（推荐）
npm install open-flun

# 全局安装（可在任意目录直接使用 open-flun 命令）
npm install -g open-flun
```

也可直接通过 `npx` 使用，无需安装：

```sh
npx open-flun <command>
```

## 快速开始

### CLI 命令

```sh
# 安装所有 @flun/* 官方包（默认保存到 dependencies）
npx open-flun install-all

# 安装为开发依赖
npx open-flun install-all --save-dev

# 仅下载到 node_modules，不修改 package.json
npx open-flun install-all --no-save

# 查看已安装包的状态及版本
npx open-flun list

# 生成 example.js 模板文件到项目根目录
npx open-flun init

# 显示帮助
npx open-flun help
```

### API 使用

```js
import { installAll, listPackages, printStatus } from 'open-flun';

// 安装所有官方包（可选参数：'save' | 'dev' | 'none'）
installAll();           // 默认 'save'
installAll('dev');      // 安装到 devDependencies
installAll('none');     // 不修改 package.json

// 获取安装状态列表
const packages = listPackages();
console.log(packages);
// [{ name: '@flun/env', installed: true, version: '1.2.3' }, ...]

// 在控制台美化打印状态
printStatus();
```

## 命令参考

### `install-all [--save-dev|--no-save]`

一键安装 `@flun/*` 系列全部官方包;

| 选项         | 说明                                           |
| ------------ | ---------------------------------------------- |
| 无选项       | 安装为运行时依赖（dependencies）               |
| `--save-dev` | 安装为开发依赖（devDependencies）              |
| `--no-save`  | 仅安装到 `node_modules`，不写入 `package.json` |

### `list`

列出所有官方包及其安装状态与版本号;

输出示例：
```
📋 Flun 官方包状态：
  @flun/env                  ✅ 1.0.0
  @flun/mailer               ❌ 未安装
  ...
```

### `init`

在项目根目录生成 `example.js` 示例文件;如果文件已存在则跳过，不会覆盖;

### `help`

打印帮助信息;

## 模板文件 `example.js`

通过 `init` 命令或调用 `copyFile()` 可以生成的示例文件，供你快速上手 Flun 生态各子包的基本使用;文件会直接出现在项目根目录，方便直接编辑运行;

## 包含的官方包

| 包名                     | 功能              |
| ------------------------ | ----------------- |
| `@flun/env`              | 环境变量管理      |
| `@flun/mailer`           | 邮件发送          |
| `@flun/windows`          | Windows 服务相关  |
| `@flun/webauthn-server`  | WebAuthn 服务端   |
| `@flun/webauthn-browser` | WebAuthn 浏览器端 |
| `@flun/html-template`    | HTML 模板处理     |

> 这些包的具体 API 请参考各自文档，`open-flun` 本身只负责安装管理和项目初始化，不重新导出子包功能;

## 环境要求

- Node.js >= 22.12.0
- npm >= 10.0.0

## 仓库

- 主页：[npm 包页面](https://www.npmjs.com/package/open-flun#readme)
- 源码：[GitHub](https://github.com/OpenFlun/OpenFlun)
- 问题反馈：[Issues](https://github.com/OpenFlun/OpenFlun/issues)

## 许可

ISC