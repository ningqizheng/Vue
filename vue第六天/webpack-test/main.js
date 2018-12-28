import $ from 'jquery'
import './src/css/index.css'
import './src/css/a.less'
// 如果通过路径引入node_modules里面的文件,可以省略node_modules,而直接引入里面的文件夹
import 'bootstrap/dist/css/bootstrap.css'
$(function(){
    $('li:odd').css('backgroundColor','pink')
    // $('li:even').css('backgroundColor','skyblue')

})