// 这是一个占位模块，用于保留 npm 包名 'open-flun'。
// 目前不提供任何实际功能，但暴露了基本的元信息。

import packageJson from './package.json' with { type: 'json' };

/**
 * 占位类,可访问静态属性获取基本信息;
 * >查看定义:@see {@link openFlun}
 * @example
 * import { openFlun } from 'open-flun';
 * console.log(openFlun.message); // 'This is a placeholder package for open-flun.'
 * console.log(openFlun.version); // 实际版本号
 */
export class openFlun {
    static message = 'This is a placeholder package for open-flun.';
    static version = packageJson.version;
}

/**
 * 占位函数,返回一个提示字符串;
 * >查看定义:@see {@link fun}
 * @returns {string}
 * @example
 * import { fun } from 'open-flun';
 * console.log(fun()); // 'This is a placeholder function.'
 */
export function fun() {
    return 'This is a placeholder function.';
}