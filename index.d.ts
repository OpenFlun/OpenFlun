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
 * class openFlun{}; // 占位类
 * fun();            // 占位函数
 * ```
 * ---
 * >
 * ```js
 *  // 基础示例
 *  const { openFlun } from 'open-flun';
 *
 * ```
 * >查看定义:@see {@link openFlun}、{@link fun}
 */
declare module './index.js' {
    /**
      * 占位类
      * @example
      * import { openFlun } from 'open-flun';
      * console.log(openFlun.message); // 占位提示
      * console.log(openFlun.version); // 版本号
      */
    export class openFlun {
        static message: string;
        static version: string;
    }

    /**
     * 占位函数
     * @returns 占位提示字符串
     * @example
     * import { fun } from 'open-flun';
     * console.log(fun()); // 'This is a placeholder function.'
     */
    export function fun(): string;
}