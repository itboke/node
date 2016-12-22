webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ReactDom, React) {'use strict';

	__webpack_require__(178);

	var _title = __webpack_require__(179);

	var _title2 = _interopRequireDefault(_title);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//测试
	/*
	 * 网站首页
	*/
	ReactDom.render(React.createElement(_title2.default, { title: '\u9664\u5374\u5DEB\u5C71\u4E0D\u662F\u4E91' }), document.getElementById('example'));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(177)))

/***/ },

/***/ 178:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	/*
	 title compontent
	*/

	var Title = React.createClass({
		displayName: 'Title',

		//默认状态
		getInitialState: function getInitialState() {
			return {
				webSiteName: '大话古今'
			};
		},

		//默认props
		getDefaultProps: function getDefaultProps() {
			return {
				title: '曾经沧海难为水'
			};
		},

		//渲染
		render: function render() {
			return React.createElement(
				'div',
				null,
				this.props.title
			);
		}
	});

	module.exports = Title;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(177)))

/***/ }

});