var React = require('react');
var Nav = require('Nav');

//var Main = React.createClass({
//	render: function () {
//		return (
//			<div>
//				<Nav/>
//				<h2>Main Component</h2>
//				{this.props.children}
//			</div>
//		);
//	}
//});

// Take off "this." due to props being passed in.

var Main = (props) => {
	return (
		<div>
			<Nav/>

			<h2>Main Component</h2>
			{props.children}
		</div>
	)
};

module.exports = Main;