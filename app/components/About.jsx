var React = require('react');

//var About = React.createClass({
//	render: function () {
//		return (
//			<h3>About Component</h3>
//		)
//	}
//});

// turn into a stateless functional component (only for render functions in this case)

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This is a weather application built on React.</p>
			<p>Here are some of the tools I used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map tp search for weather data
					by city name.
				</li>
			</ul>
		</div>
	)
};

// or simpler by removing return etc and not needing "props" due to not using anything from props

//var About = () => <h3>About Component</h3>;

module.exports = About;