import React from "react";
import Loadable from 'react-loadable';
import Loading from './Loading';

const DEFAULT_WIDTH_IN_PX = 380; 
const DEFAULT_SITTING_HEIGHT_IN_PX = 400;
const DEFAULT_STANDING_HEIGHT_IN_PX = 480;
const POSTURE_OPTION_SITTING = 'sitting'
const DIRECTION_OPTION_LEFT = 'left'
const SITTING_HEIGHT_ADJUSTMENT_IN_PX = 24;
const STANDING_HEIGHT_ADJUSTMENT_IN_PX = 31;
const ASSET_ROOT_DIRECTORY = './icons/'
const HEAD_DIRECTORY_SUFFIX = 'head/'
const TORSO_DIRECTORY_SUFFIX = 'torso/'
const SITTING_DIRECTORY_SUFFIX = 'sitting/'
const STANDING_DIRECTORY_SUFFIX = 'standing/'
const STANDING_HEIGHT_TO_WIDTH_RATIO = DEFAULT_STANDING_HEIGHT_IN_PX/DEFAULT_WIDTH_IN_PX;
const SITTING_HEIGHT_TO_WIDTH_RATIO = DEFAULT_SITTING_HEIGHT_IN_PX/DEFAULT_WIDTH_IN_PX;

function setLayoutFromDirectionAndPosture(direction, posture){
	// the deafult is face-right since it requires less code
  var heightAdjustment = posture === POSTURE_OPTION_SITTING ? SITTING_HEIGHT_ADJUSTMENT_IN_PX : STANDING_HEIGHT_ADJUSTMENT_IN_PX 
  var horizontalFlip = "translate(190.000000, 200.500000) scale(-1, 1) translate(-190.000000, -200.500000)"

	if (direction === DIRECTION_OPTION_LEFT){
		return( `${horizontalFlip} translate(40.000000, ${heightAdjustment})`)
	} else {
		return (`translate(40.000000, ${heightAdjustment})`);
	} }

function setHeightFromSizeAndPosture(size, posture){
  let width = size || DEFAULT_WIDTH_IN_PX;

  if (posture === POSTURE_OPTION_SITTING){
    return( width * SITTING_HEIGHT_TO_WIDTH_RATIO );
  } else {
    return ( width * STANDING_HEIGHT_TO_WIDTH_RATIO );
  }
}

function setViewBox(posture){
	if (posture === POSTURE_OPTION_SITTING) { 
		return( `0 0 ${DEFAULT_WIDTH_IN_PX} ${DEFAULT_SITTING_HEIGHT_IN_PX}` );
  } else {
		return( `0 0 ${DEFAULT_WIDTH_IN_PX} ${DEFAULT_STANDING_HEIGHT_IN_PX}` );
	}
}

function setBottomDirectory(posture){
	let bottomSuffix = posture === POSTURE_OPTION_SITTING ? SITTING_DIRECTORY_SUFFIX : STANDING_DIRECTORY_SUFFIX
  return(ASSET_ROOT_DIRECTORY + bottomSuffix)
}

function setRotation(degrees){
	return (`rotate(${parseFloat(degrees)})`)
}

class Human extends React.Component { 
	render() {
		const Head = Loadable({
			loader: () => import(`${ASSET_ROOT_DIRECTORY}${HEAD_DIRECTORY_SUFFIX}${this.props.head}`),
			loading: Loading
		});

		const Torso = Loadable({
			loader: () => import(`${ASSET_ROOT_DIRECTORY}${TORSO_DIRECTORY_SUFFIX}${this.props.torso}`),
			loading: Loading
		});

		const Bottom = Loadable({
			loader: () => import(`${setBottomDirectory(this.props.posture)}${this.props.bottom}`),
			loading: Loading
		});

		let layoutModifier = setLayoutFromDirectionAndPosture(this.props.direction, this.props.posture);
		let height = setHeightFromSizeAndPosture(this.props.size, this.props.posture);
		let viewBox = setViewBox(this.props.posture);
		let rotation = setRotation(this.props.clockwiseRotate) || 0; 

		return(
			<svg height={height} 
				width={this.props.size || DEFAULT_WIDTH_IN_PX} 
				version="1.1" 
				viewBox={viewBox} 
				transform={rotation} 
				xmlns="http://www.w3.org/2000/svg">
				<g id="humaaans" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
					<g id={`a-${this.props.posture}-human`} 
						transform={layoutModifier}>
            <g id="HEAD" transform="translate(82.000000, 0.000000)">
              <Head />
            </g>
            <g id="BOTTOM" transform="translate(0.000000, 187.000000)">
              <Bottom />
            </g>
            <g id="TORSO" transform="translate(22.000000, 82.000000)">
              <Torso />
            </g>
					</g>
				</g>
			</svg>
		)
	}
}

export default Human;
