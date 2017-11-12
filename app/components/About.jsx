var React = require('react');

//var About = React.createClass({
//	render: function () {
//		return (
//			<h3>About Component</h3>
//		)
//	}
//});

// turn into a stateless functional component (only for render functions in this case)

//var About = (props) => {
//	return (
//		<h3>About Component</h3>
//	)
//};

// or simpler by removing return etc and not needing "props" due to not using anything from props

var About = () => <h3>About Component</h3>;

module.exports = About;