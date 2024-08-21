import React from 'react';
import Sec02Cards from '../Sec02Cards/Sec02Cards';
import Img01 from '../../assets/sec02card01.png';
import Img001 from '../../assets/sec02card02.png';
import Img02 from '../../assets/sec02card03.png';
import Img002 from '../../assets/sec02card04.png';
import Img03 from '../../assets/sec02card05.png';
import Img003 from '../../assets/sec02card06.png'

const Sec02Work = () => {
  return (
    <>
      <div id="work" style={{textAlign: 'center'}}>
        <p style={{fontSize: '20px', marginBottom: '10px', marginTop: '10px',color: 'whitesmoke'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum excepturi unde voluptates natus magni rem cum, amet nisi? Obcaecati aut quo ducimus quasi nulla, alias accusamus vel optio incidunt.</p>
      </div>
      <Sec02Cards Image01={Img01} Image02={Img001} Image03={Img02} Image04={Img002} Image05={Img03} Image06={Img003} web='DESIGN WEBSITE' todoApp='TODO APP' forms='FORM' language='HTML CSS JAVASCRIPT'  languageR='HTML CSS JAVASCRIPT REACT'/>
    </>
  )
}

export default Sec02Work
