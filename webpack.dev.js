const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:'./src/index.tsx',
    devServer:{
        contentBase:'./build',
    },
    plugins: [new MiniCssExtractPlugin()],
    module:{
        rules:[
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
        {
            test: /\.css$/i,
            use: 
                [MiniCssExtractPlugin.loader,
                'style-loader', 
                'css-loader',
                "postcss-loader"],
            loader:'postcss-loader',
            options:{
                postcssPlugin:{
                    plugins:[
                        [   
                            "postcss-preset-env",
                            {
                              
                            },
                        ]
                    ]

                }
            }//minifiers , sourcemap, chunks, bundle analysis
        },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Developement'
        })
    ],
    output:{
        path:path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    }
}