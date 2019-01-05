import React from "react";
import Loadable from 'react-loadable';
import Loading from './Loading';


class SittingHuman extends React.Component { 
	constructor(props) {
		super(props);
	}

	render() {
		const Head = Loadable({
			loader: () => import(`./icons/head/${this.props.head}`),
			loading: Loading,
		});

		const Torso = Loadable({
			loader: () => import(`./icons/torso/${this.props.torso}`),
			loading: Loading,
		});

		const Bottom = Loadable({
			loader: () => import(`./icons/sitting/${this.props.bottom}`),
			loading: Loading,
		});

		return(
			<svg height="400px" width="380px" version="1.1" viewBox="0 0 380 400" xmlns="http://www.w3.org/2000/svg">
				<title>humaaans/sitting-1</title>
				<g id="humaaans/sitting-1" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
					<g id="A-Human/Sitting" 
						transform="translate(190.000000, 200.500000) 
						scale(-1, 1) 
						translate(-190.000000, -200.500000) 
						translate(40.000000, 24.000000)">
						<g id="HEAD" transform="translate(82.000000, 0.000000)"><Head /></g>
						<g id="BOTTOM" transform="translate(0.000000, 187.000000)"><Bottom /></g>
						<g id="TORSO" transform="translate(22.000000, 82.000000)"><Torso /></g>
					</g>
				</g>
			</svg>
		)
	}
}

export default SittingHuman;
