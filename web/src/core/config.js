/**
 * 网站配置文件
 */
import chalk from "chalk";

const config = {
  appName: 'EagleDevOps',
  appLogo: 'logo.png',
  showViteLogo: true,
  logs: [],
}

export const viteLogo = (env) => {
  if (config.showViteLogo) {
    const chalk = require('chalk')
    console.log(
      chalk.green(
        `> 欢迎使用EagleDevOps，开源地址：https://github.com/cnmill/eagle`
      )
    )
    console.log(
      chalk.green(
        `> 当前版本:v2.7.0`
      )
    )
    console.log(
      chalk.green(
        `> 默认自动化文档地址:http://127.0.0.1:${env.VITE_SERVER_PORT}/swagger/index.html`
      )
    )
    console.log(
      chalk.green(
        `> 默认前端文件运行地址:http://127.0.0.1:${env.VITE_CLI_PORT}`
      )
    )
    console.log('\n')
  }
}

export default config
