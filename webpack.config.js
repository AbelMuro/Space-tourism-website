const path = require('path');              
const HtmlWebpackPlugin = require("html-webpack-plugin");   



module.exports = {

    entry: './src/index.js',                  
    output: {                                      
        path: path.join(__dirname, '/dist'),  
        filename: 'bundle.js'                
    },
    plugins: [                      
        new HtmlWebpackPlugin({               
            filename: 'index.html',           
            template: './src/index.html'     
        })
    ],
    devServer: {                              
        port: 3000,                          
        historyApiFallback: true,            
    },
    
    module: {
        rules: [                               
            {                                   
                test: /\.js$/, 
                use: {
                    loader: 'babel-loader',  
                    options: {presets: ['@babel/preset-env', '@babel/preset-react']} //preset-env is a group of babel plugins that will transpile all the new features of javascript 
                    }                                                                 //preset-react is also a group of babel plugins, but it will transpile jsx with other new features of javascript
            },
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}]             //using style loader and css loader to load css onto application
            },
            {
                test: /\.(png|jpg|webp|mp4|wav|svg)$/,
                type: 'asset/resource'                                              //asset/resource loads files such as images, audio and videos
            },                                                                     
        ]
    },
}