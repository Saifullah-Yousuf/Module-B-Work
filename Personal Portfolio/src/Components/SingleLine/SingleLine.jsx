import React from 'react';
import Styles from './SingleLine.module.css'

const SingleLine = ({lineWord}) => {
  return (
    <div class={Styles.aboutSection}>
        <span class={Styles.aboutText}>{lineWord}</span>
        <div class={Styles.aboutLine}></div>
    </div>

  )
}

export default SingleLine
