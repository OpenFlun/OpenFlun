import { copyFile } from './copy-files.js';

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
/**
 * Windows功能模块 主要功能：
 * ```js
 * installAll(); // 占位类
 * fun();            // 占位函数
 * ```
 * ---
 * >
 * ```js
 *  // 基础示例
 *  const { openFlun } from 'open-flun';
 *
 * ```
 * >查看定义:@see {@link installAll}、{@link listPackages}、{@link printStatus}
 */
declare module './index.js' {
    /**
     * 一键安装所有 @flun/* 官方包
     * @param {'save' | 'dev' | 'none'} depType - 安装类型：
     *   - 'save' （默认）: 安装到 dependencies（运行时依赖）
     *   - 'dev'           : 安装到 devDependencies（开发依赖）
     *   - 'none'          : 仅下载到 node_modules，不修改 package.json
     * @example
     * import { installAll } from 'open-flun';
     * installAll();           // 作为运行时依赖
     * installAll('dev');      // 作为开发依赖
     * installAll('none');     // 不记录到 package.json
     */
    export function installAll(depType?: 'save' | 'dev' | 'none'): void;

    /**
     * 列出所有官方包的安装状态及版本
     * @returns {Array<{name: string, installed: boolean, version?: string}>}
     * @example
     * import { listPackages } from 'open-flun';
     * console.log(listPackages());
     */
    export function listPackages(): Array<{
        name: string;
        installed: boolean;
        version?: string;
    }>;

    /**
     * 打印包状态到控制台
     */
    export function printStatus(): void;
}