
const serverProxy = {
    '/action': {
        target: 'http://127.0.0.1:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            '^/action': ''  //通过pathRewrite重写地址
        }
    }
};
module.exports = {
    //baseUrl: BASE_URL,
    publicPath: './', // 默认'/'，部署应用包时的基本 URL
    //assetsDir: '',  // 相对于outputDir的静态资源(js、css、img、fonts)目录
    outputDir: 'dist', // 打包的目录
    lintOnSave: false, // 在保存时校验格式
    productionSourceMap: false, // 生产环境是否生成 SourceMap

    devServer: {
        open: false, // 启动服务后是否打开浏览器
        host: '0.0.0.0',
        //port: 8082, // 服务端口
        https: false,
        hotOnly: false,
        proxy: serverProxy, // 设置代理
    },
};