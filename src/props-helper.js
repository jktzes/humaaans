function propsHelper(){

const SITTING_HEIGHT = 400;
const STANDING_HEIGHT = 480;
const SHARED_WIDTH = 380;
const STANDING_HEIGHT_TO_WIDTH_RATIO = STANDING_HEIGHT/SHARED_WIDTH 
const SITTING_HEIGHT_TO_WIDTH_RATIO = SITTING_HEIGHT/SHARED_WIDTH

function setDirection(direction){
	// the deafult is face-right since it requires less code
	if (direction === "left"){
		return( "translate(190.000000, 200.500000) scale(-1, 1) \
						 translate(-190.000000, -200.500000) translate(40.000000, 24.000000)")
	} else {
		return ("translate(40.000000, 27.000000)");
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
}

module.exports = propsHelper
