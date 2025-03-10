import React from 'react';
import { Fade } from 'react-reveal';
import { G2k17 } from '../../json/para';
import { G2k18 } from '../../json/para';
import { G2k19 } from '../../json/para';
import { G2k20 } from '../../json/para';
import { G2k21 } from '../../json/para';
import '../../stylesheet/para.css';

const Paragraphs = ({ selectedYear }) => {
  let a = G2k17;
  if(selectedYear =='G2k18'){
    a=G2k18;
  }
  if(selectedYear =='G2k19'){
    a=G2k19;
  }
  if(selectedYear =='G2k20'){
    a=G2k20;
  }
  if(selectedYear =='G2k21'){
    a=G2k21;
  }
  return (
    <div>
      <div className='flex text-5xl  text-[white] justify-center font-bold mt-[50px] mb-[30px] sm:text-[20px]'> What Guest's say About <span className='text-[red] pl-[10px]'>Swaram</span></div>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 pl-100  justify-evenly sm:grid-cols-1 '>
      {a.map((item) => (
        <Fade key={item.id} duration={3500} transition="ease-in-out">
          <figure className="snip1192 sm:flex sm:flex-col-reverse">
            <blockquote className='sm:text-center'>{item.quoute}</blockquote>
            <div className="author">
              <img src={item.imageSrc} alt={item.altText} />
              <h5>{selectedYear}</h5>
            </div>
          </figure>
        </Fade>
      ))}
    </div>
    </div>
  );
};

export default Paragraphs;


