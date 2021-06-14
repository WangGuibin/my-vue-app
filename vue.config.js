module.exports = {
    devServer: {
        open: true,
        port: 8080,
        proxy: 'http://news.topurl.cn'
    },
    publicPath: ''

};