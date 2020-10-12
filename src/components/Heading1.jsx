import React from 'react';
import { useSpring, animated } from 'react-spring';

const Heading1 = () => {
	const props = useSpring({ opacity: 1, from: { opacity: 0 } });
	return (
		<animated.div className="heading1" style={props}>
			<h1>Headin1</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam commodi
				cumque itaque obcaecati illum nesciunt laboriosam quia incidunt dolorum.
				Laudantium dolor iure provident placeat nisi? Perspiciatis iure minus
				asperiores beatae.
			</p>
		</animated.div>
	);
};

export default Heading1;
