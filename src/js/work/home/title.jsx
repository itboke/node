/*
 title compontent
*/
import big from '../../../img/520.jpg';//小图片
import small from '../../../img/common/unhappy.png';//小图片
const Title = React.createClass({
	//默认状态
	getInitialState(){
		return {
			webSiteName: '大话古今'
		}
	},
	//默认props
	getDefaultProps(){
		return {
			title: '曾经沧海难为水'
		}
	},
	//渲染
	render(){
		return  <div>
					<h1>{this.props.title}</h1>
					<div><img src={big} /></div>
					<div><img src={small} /></div>
					<div className="bg-img"><span></span></div>
				</div>;
	}

});

module.exports = Title;