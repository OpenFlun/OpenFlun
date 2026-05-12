import { copyFile } from './copy-files.js';
import { installAll, listPackages, printStatus } from './open.js';

// =================================== copy-files.js ===================================
/**
 * ```js
 * // 文件导出内容
 * copyFile(); // 复制文件到项目根目录
 * ```
 * ---
 * >
 * >查看定义:@see {@link copyFile}
 */
declare module './copy-files.js' {
    export * from './copy-files.js';
}

// =================================== open.js ===================================
/**
 * open-flun - Flun 生态管家
 * ```js
 * // 文件导出内容
 * installAll()      // 一键安装所有 '@flun' 子包;
 * listPackages()    // 查询安装状态/版本;
 * printStatus()     // 打印状态表（CLI 用）;
 * ```
 * >查看定义:@see {@link installAll}、{@link listPackages}、{@link printStatus}
 */
declare module './open.js' {
    export * from './open.js';
}

// =================================== open.js ===================================
/**
 * open-flun - Flun 生态管家
 * ```js
 * // 功能：
 * copyFile();       // 复制示例文件到项目根目录
 * installAll()      // 一键安装所有 '@flun' 子包;
 * listPackages()    // 查询安装状态/版本;
 * printStatus()     // 打印状态表（CLI 用）;
 *
 * // 注意：本模块不封装子包的具体功能,请直接导入对应子包使用;
 * // 例如：import { createTransport } from '@flun/mailer';
 *
 * ```
 * >查看定义:@see {@link copyFile}、{@link installAll}、{@link listPackages}、{@link printStatus}
 */
declare module './index.js' {
    export * from './copy-files.js';
    export * from './open.js';
}