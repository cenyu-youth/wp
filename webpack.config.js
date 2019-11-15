
//导入路径处理核心模块，不需要安装
let path = require('path');

let miniCssExtractPlugin = require('mini-css-extract-plugin');

let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
	//development生产模式，production开发模式
	mode:'development',
	
	//配置入口
	entry:{
		//键名：'路径'
		tests:'./ceshi/test.js',
	},
	
	//出口
	output:{
		
		//打包文件出口
		path:path.resolve(__dirname + '/build'),
		
		//打包输出文件重命名
		filename:'[name].min.js'
		
	},
	
	//css处理,需要安装 loader cssloader lessloader
	module:{
		
		//定义规则，里面有正则判断文件类型.css
		rules:[
			
			//处理css
			{
				test:/\.css$/,
				use:[
					//内联就用style
					// {loader:'style-loader'},
					
					{loader:miniCssExtractPlugin.loader},
					{loader:'css-loader'}
				]
			},
			
			//处理less
			{
				test:/\.less$/,
				use:[
					{loader:miniCssExtractPlugin.loader},
					{loader:'css-loader'},
					{loader:'less-loader'},
				]
			},
			
			//处理图片
			{
				test:/\.(png|jpg|gif|jpeg)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:2000
						}
					}
				]
			},
			
			{
				test:/\.html?$/,
				use:[
					{loader:'html-withimg-loader'}
				]
			}
			
		]
	},
	
	plugins:[
		//实例化 css分离
		new miniCssExtractPlugin({
			//css输出名字
			filename:'[name].css'
		}),
		
		//实例化HTML
		new htmlWebpackPlugin({
			//路径
			template:'./index.html',
			//js是否插入，插入在哪，默认true插入到body结束标签前，false不插入，head插入到header结束标签前，body插入到body结束标签前，body与true等同
			inject:'body',
			
			//最小化设置
			minify:{
				//删除注释
				removeComments:false,
				//删除标签属性双引号
				removeAttributeQuotes:true,
				//是否移除HTML的空白符
				collapseWhitespace:true
				
			},
			//html文件输出名
			filename:'test.min.html'
			
		})
	]
	
}