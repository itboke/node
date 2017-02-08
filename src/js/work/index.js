/*
 * 网站首页
*/
import '../../html/index.html'; //引入模板
import '../../html/activity/index.html'; //引入模板
import '../../html/activity/sign/index.html'; //引入模板
import './home/index.less'; //引入模板样式表
import Title from './home/title.jsx';//测试
ReactDom.render(
	<Title title='除却巫山不是云'/>,
	document.getElementById('example')
);