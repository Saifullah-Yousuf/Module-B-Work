import React from 'react';
import Styles from './Sec02Cards.module.css';

const Sec02Cards = ({Image01 , Image02 , Image03 , Image04 , Image05 , Image06 , web , language , languageR , todoApp , forms}) => {

  const AllLinks = (url) => {
    window.open(url, '_blank');
  };


  return (
    <div className={Styles.main} style={{height: 'auto', width: '100%', marginTop: '20px', marginBottom: '20px'}}>
    <div style={{border: 'none',textAlign: 'center'}}>
      <img onClick={() => AllLinks('https://thefoodmunch.surge.sh/')} style={{width: '100%', height: '300px', borderRadius: '2px'}} src={Image01} alt="" />
      <div style={{marginTop: '15px', marginBottom: '10px', color: 'whitesmoke'}}>
      <h3>{web}</h3>
      <h2>{language}</h2>
      </div>
    </div>
    <div style={{border: 'none',textAlign: 'center'}}>
      <img onClick={() => AllLinks('https://e-website-00.web.app/')} style={{width: '100%', height: '300px', borderRadius: '2px'}} src={Image02} alt="" />
      <div style={{marginTop: '15px', marginBottom: '10px', color: 'whitesmoke'}}>
      <h3>{web}</h3>
      <h2>{languageR}</h2>
      </div>
    </div>
    <div style={{border: 'none',textAlign: 'center'}}>
      <img onClick={() => AllLinks('https://jawanpak00.web.app/')} style={{width: '100%', height: '300px', borderRadius: '2px'}} src={Image03} alt="" />
      <div style={{marginTop: '15px', marginBottom: '10px', color: 'whitesmoke'}}>
      <h3>{web}</h3>
      <h2>{languageR}</h2>
      </div>
    </div>
    <div style={{border: 'none',textAlign: 'center'}}>
      <img onClick={() => AllLinks('https://reg-from-all.web.app/dashboard')} style={{width: '100%', height: '300px', borderRadius: '2px'}} src={Image04} alt="" />
      <div style={{marginTop: '15px', marginBottom: '10px', color: 'whitesmoke'}}>
      <h3>{web}</h3>
      <h2>{languageR}</h2>
      </div>
    </div>
    <div style={{border: 'none',textAlign: 'center'}}>
      <img onClick={() => AllLinks('https://todoapp-saif.web.app/')} style={{width: '100%', height: '300px', borderRadius: '2px'}} src={Image05} alt="" />
      <div style={{marginTop: '15px', marginBottom: '10px', color: 'whitesmoke'}}>
      <h3>{todoApp}</h3>
      <h2>{languageR}</h2>
      </div>
    </div>
    <div style={{border: 'none',textAlign: 'center'}}>
      <img onClick={() => AllLinks('https://reg-from-all.web.app/')} style={{width: '100%', height: '300px', borderRadius: '2px'}} src={Image06} alt="" />
      <div style={{marginTop: '15px', marginBottom: '10px', color: 'whitesmoke'}}>
      <h3>{forms}</h3>
      <h2>{languageR}</h2>
      </div>
    </div>
  </div>
  )
}

export default Sec02Cards
