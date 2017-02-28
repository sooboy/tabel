var  webpack = require('webpack')

var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports ={
    entry:'./src/app.ts',
    output:{
        filename:'app.js',
        path:'./dist'
    },
    resolve:{
        extensions:['.webpack.js','.web.js','.ts','.js']
    },
    module:{
        loaders:[
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {test:/\.ts$/,loader:'ts-loader'}
        ]
    },
    // plugins:[
    //     new uglifyJsPlugin({
    //         compress:{
    //             warnings:false
    //         },
    //         sourceMap:true
    //     })
    // ]
}