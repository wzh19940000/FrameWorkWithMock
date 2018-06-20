const fs = require('fs')
const path = require('path')
const ipFilePath = path.resolve(__dirname, 'devServerIP.js')
let ip = ''
if (fs.existsSync(ipFilePath) && fs.statSync(ipFilePath).isFile()) {
    ip = require(ipFilePath)
} else {
    fs.writeFileSync(ipFilePath, `module.exports = 'localhost:3000'`, 'utf8')
    throw new Error('确认 `devServerIP.js` 文件里 IP 地址正确')
}

module.exports = {
	devServer: {
		contentBase: './app',
		port: 8899,
		inline: true,
		open: true,
		openPage: '',
		hot: true,
		proxy: {
			"/api/*": {
				target: ip,
				secure: false,
				pathRewrite: {
					"/api": "/"
				}
			}
		},
		overlay: {
			warnings: true,
			errors: true
		}
	}
}