import { execSync } from 'child_process';
import { createRequire } from 'module';

// ==================== 包列表 ====================
const FLUN_PACKAGES = [
    '@flun/desktop-builder',
    '@flun/dns-auto-ssl',
    '@flun/env',
    '@flun/html-template',
    '@flun/mailer',
    "@flun/nodejs-mobile-gyp",
    "@flun/nodejs-mobile-react-native",
    "@flun/node-mobile-app",
    "passport-desktop-win32-ia32-msvc",
    "passport-desktop-win32-x64-msvc",
    '@flun/windows',
    '@flun/webauthn-browser',
    '@flun/webauthn-server',
];

// ==================== 公共 API ====================

/**
 * 一键安装所有 '@flun' 子包;
 * >查看定义:@see {@link installAll}
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
const installAll = (depType = 'save') => {
    let flag = '';
    if (depType === 'dev') flag = '--save-dev';
    else if (depType === 'none') flag = '--no-save';

    const packages = FLUN_PACKAGES.join(' ');
    const cmd = `npm install ${packages} ${flag}`.trim();

    console.log(`📦 执行: ${cmd}`);
    try {
        execSync(cmd, { stdio: 'inherit' });
        console.log('✅ 所有 @flun/* 官方包安装完成');
    } catch (err) {
        console.error('❌ 安装失败，请检查网络或 npm 配置。');
        process.exit(1);
    }
}

/**
 * 列出所有官方包的安装状态及版本
 * >查看定义:@see {@link listPackages}
 * @returns {Array<{name: string, installed: boolean, version?: string}>}
 * @example
 * import { listPackages } from 'open-flun';
 * console.log(listPackages());
 */
const listPackages = () => {
    const require = createRequire(import.meta.url);
    return FLUN_PACKAGES.map(name => {
        try {
            const pkg = require(`${name}/package.json`);
            return { name, installed: true, version: pkg.version };
        } catch {
            return { name, installed: false };
        }
    });
}

/**
 * 控制台美化输出包状态
 * >查看定义:@see {@link printStatus}
 */
const printStatus = () => {
    const rows = listPackages();
    console.log('\n📋 Flun 官方包状态：');
    rows.forEach(({ name, installed, version }) => {
        const status = installed ? `✅ ${version}` : '❌ 未安装';
        console.log(`  ${name.padEnd(25)} ${status}`);
    });
    console.log('');
}

export { installAll, listPackages, printStatus };