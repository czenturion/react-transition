import React from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap-trial';

const TransitionComponent = ({ children }) => {
  const location = useLocation();
  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={500}
        onEnter={(node) => {
          gsap
            .from(node, { y: 50 , opacity: 0 })
            .play();
        }}
        onExit={(node) => {
          gsap
            .to(node, { y: -50 , opacity: 0 })
            .play();
        }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
