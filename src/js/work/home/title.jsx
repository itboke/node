/*
 title compontent
*/

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
		return <div>{this.props.title}</div>;
	}

});

module.exports = Title;