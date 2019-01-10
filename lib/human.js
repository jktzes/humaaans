import React from "react";
import Loadable from 'react-loadable';
import Loading from './Loading';
import PropTypes from 'prop-types';
const DEFAULT_WIDTH_IN_PX = 380;
const DEFAULT_SITTING_HEIGHT_IN_PX = 400;
const DEFAULT_STANDING_HEIGHT_IN_PX = 480;
const POSTURE_OPTION_SITTING = 'sitting';
const DIRECTION_OPTION_LEFT = 'left';
const SITTING_HEIGHT_ADJUSTMENT_IN_PX = 24;
const STANDING_HEIGHT_ADJUSTMENT_IN_PX = 31;
const ASSET_ROOT_DIRECTORY = './body-parts/';
const HEAD_DIRECTORY_SUFFIX = 'head/';
const TORSO_DIRECTORY_SUFFIX = 'torso/';
const SITTING_DIRECTORY_SUFFIX = 'sitting/';
const STANDING_DIRECTORY_SUFFIX = 'standing/';
const STANDING_HEIGHT_TO_WIDTH_RATIO = DEFAULT_STANDING_HEIGHT_IN_PX / DEFAULT_WIDTH_IN_PX;
const SITTING_HEIGHT_TO_WIDTH_RATIO = DEFAULT_SITTING_HEIGHT_IN_PX / DEFAULT_WIDTH_IN_PX;

function setHeightFromSizeAndPosture(size, posture) {
  let width = size || DEFAULT_WIDTH_IN_PX;
  let heightToWidthRatio = setHeigthToWidthRatioFromPosture(posture);
  return width * heightToWidthRatio;
}

function setHeightAdjustmentFromPosture(posture) {
  let heightAdjustment = posture === POSTURE_OPTION_SITTING ? SITTING_HEIGHT_ADJUSTMENT_IN_PX : STANDING_HEIGHT_ADJUSTMENT_IN_PX;
  return `translate(40.000000, ${heightAdjustment})`;
}

function setHeigthToWidthRatioFromPosture(posture) {
  return posture === POSTURE_OPTION_SITTING ? SITTING_HEIGHT_TO_WIDTH_RATIO : STANDING_HEIGHT_TO_WIDTH_RATIO;
}

function setHorizontalDirection(direction) {
  if (direction === DIRECTION_OPTION_LEFT) {
    return "translate(190.000000, 200.500000) scale(-1, 1) translate(-190.000000, -200.500000)";
  } else {
    return "";
  }
}

function setViewBox(posture) {
  var height = posture === POSTURE_OPTION_SITTING ? DEFAULT_SITTING_HEIGHT_IN_PX : DEFAULT_STANDING_HEIGHT_IN_PX;
  return `0 0 ${DEFAULT_WIDTH_IN_PX} ${height}`;
}

function setBottomDirectory(posture) {
  let bottomSuffix = posture === POSTURE_OPTION_SITTING ? SITTING_DIRECTORY_SUFFIX : STANDING_DIRECTORY_SUFFIX;
  return ASSET_ROOT_DIRECTORY + bottomSuffix;
}

class Human extends React.Component {
  render() {
    let size = this.props.size;
    let head = this.props.head;
    let torso = this.props.torso;
    let bottom = this.props.bottom;
    let posture = this.props.posture;
    let direction = this.props.direction;
    let height = setHeightFromSizeAndPosture(size, posture);
    let heightAdjustFromPosture = setHeightAdjustmentFromPosture(posture);
    let horizontalDirectionModifier = setHorizontalDirection(direction);
    let viewBox = setViewBox(posture);
    const Head = Loadable({
      loader: () => import(`${ASSET_ROOT_DIRECTORY}${HEAD_DIRECTORY_SUFFIX}${head}`),
      loading: Loading
    });
    const Torso = Loadable({
      loader: () => import(`${ASSET_ROOT_DIRECTORY}${TORSO_DIRECTORY_SUFFIX}${torso}`),
      loading: Loading
    });
    const Bottom = Loadable({
      loader: () => import(`${setBottomDirectory(posture)}${bottom}`),
      loading: Loading
    });
    return React.createElement("svg", {
      height: height,
      width: size || DEFAULT_WIDTH_IN_PX,
      version: "1.1",
      viewBox: viewBox,
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("g", {
      id: "humaaans",
      fillRule: "evenodd",
      strokeWidth: "1"
    }, React.createElement("g", {
      id: `a-${posture}-human`,
      transform: `${horizontalDirectionModifier} ${heightAdjustFromPosture}`
    }, React.createElement("g", {
      id: "HEAD",
      transform: "translate(82.000000, 0.000000)"
    }, React.createElement(Head, null)), React.createElement("g", {
      id: "BOTTOM",
      transform: "translate(0.000000, 187.000000)"
    }, React.createElement(Bottom, null)), React.createElement("g", {
      id: "TORSO",
      transform: "translate(22.000000, 82.000000)"
    }, React.createElement(Torso, null)))));
  }

}

Human.propTypes = {
  size: PropTypes.number,
  head: PropTypes.string,
  torso: PropTypes.string,
  bottom: PropTypes.string,
  posture: PropTypes.string,
  direction: PropTypes.string
};
export default Human;