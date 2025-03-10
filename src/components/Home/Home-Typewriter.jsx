import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import '../../stylesheet/home.css'

const TypewriterComponent = () => {

  return (
    <div id='typetext' className='sm:w-[100%] '  >
      <h1 style={{ paddingTop: '3.5rem',fontSize:'60px' ,color:'white',fontFamily: 'Outfit'}} >
        <span className='sm:text-[35px]'>Let's{' '}</span>
        <span style={{ color: 'red', fontWeight: 'normal' }} className='sm:text-[35px] '>
          <Typewriter
            words={['Sing', 'Dance', 'Vibe', 'Repeat!']}
            loop="false"
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypewriterComponent;
