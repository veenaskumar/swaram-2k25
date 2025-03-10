import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import { withGesture } from "react-with-gesture";
import '../../stylesheet/guest.css'; 

const SlideContainer = styled(animated.div)`
  position: absolute;
  height: 70%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
`;
const u = {
  position: 'relative',
  minWidth:'90vh',
  borderRadius:'30px',
  // width: '200vw',
  height: '100%',
  background: 'black',
  fontSize: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // transformOrigin: '50% 50%',
};

const SlideCard = styled(animated.div)`
  position: relative;
  min-width: 60%;
  width: 50vw;
  height: 100%;
  background:black;
  margin-left:50%;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
`;

function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down
}) {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));

  const offsetCardClick = i => {
    console.log(i);
  };

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  const springStyles = useSpring({
    transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
    top: `${
      offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
    }%`,
    opacity: distanceFactor * distanceFactor,
    config: animationConfig
  });

  return (
    <SlideContainer
      style={{
        ...springStyles,
        zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2)
      }}
    >
      <SlideCard onClick={() => moveSlide(offsetFromMiddle)} >
      {/* <img src={content} alt="img" style={u} />/ */}
      <div style={u}>
    <img src={content} alt="img" className='im'/>
  </div>
      </SlideCard>
    </SlideContainer>
  );
}

export default withGesture()(Slide)
