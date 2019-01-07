import React from "react";
import Loadable from 'react-loadable';
import Loading from './Loading';

const SITTING_HEIGHT = 400;
const STANDING_HEIGHT = 480;
const SHARED_WIDTH = 380;
const STANDING_HEIGHT_TO_WIDTH_RATIO = STANDING_HEIGHT/SHARED_WIDTH 
const SITTING_HEIGHT_TO_WIDTH_RATIO = SITTING_HEIGHT/SHARED_WIDTH

function setDirectionFromDirectionAndPosture(direction, posture){
	// the deafult is face-right since it requires less code
  var heightAdjuster = posture === "sitting" ? 24 : 37

	if (direction === "left"){
		return( "translate(190.000000, 200.500000) scale(-1, 1) \
						 translate(-190.000000, -200.500000) translate(40.000000, 24.000000)")
	} else {
		return (`translate(40.000000, ${heightAdjuster})`);
	} }

function setHeightFromSizeAndPosture(size, posture){
  size = size || SHARED_WIDTH;

  if (posture === "sitting"){
    return( `${size * SITTING_HEIGHT_TO_WIDTH_RATIO}px` );
  } else {
    return (`${size * STANDING_HEIGHT_TO_WIDTH_RATIO}px` );
  }
}

function setViewBox(posture){
	if (posture === "sitting") { 
		return( `0 0 ${SHARED_WIDTH} ${SITTING_HEIGHT}` );
  } else {
		return( `0 0 ${SHARED_WIDTH} ${STANDING_HEIGHT}` );
	}
}

function setDirectory(posture){
	if (posture === 'sitting') {
		return (`sitting`);
	} else {
		return (`standing`);
	}
}

function setRotation(degrees){
	return (`rotate(${parseFloat(degrees)})`)
}

class SittingHuman extends React.Component { 
	render() {
		const Head = Loadable({
			loader: () => import(`./icons/head/${this.props.head}`),
			loading: Loading,
		});

		const Torso = Loadable({
			loader: () => import(`./icons/torso/${this.props.torso}`),
			loading: Loading,
		});

		let directory = setDirectory(this.props.posture);

		const Bottom = Loadable({
			loader: () => import(`./icons/${directory}/${this.props.bottom}`),
			loading: Loading,
		});

		let directionModifier = setDirectionFromDirectionAndPosture(this.props.direction, this.props.posture);
		let height = setHeightFromSizeAndPosture(this.props.size, this.props.posture);
		let viewBox = setViewBox(this.props.posture);
		let rotation = setRotation(this.props.clockwiseRotate) || 0; 

		return(
			<svg height={height} 
				width={this.props.size || SHARED_WIDTH} 
				version="1.1" 
				viewBox={viewBox} 
				transform={rotation} 
				xmlns="http://www.w3.org/2000/svg">
				<g id="humaaans" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
					<g id={`a-${this.props.posture}-human`} 
						transform={directionModifier}>
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
