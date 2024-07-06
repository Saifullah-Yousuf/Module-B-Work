import React from 'react'
import Styles from './Card.module.css'

const CardSection01 = () => {
  let learnMore = "Learn more ->"

  return (
    <div>
      <div class="container text-center">
    <h2 className={Styles.para}>Academics</h2>
    </div>

    <div class="container" className={Styles.cards_main}>
      <div class="row">
      <div class="col-12 col-lg-3 col-sm-12 col-md-12" className={Styles.img_card01}>
        <div className={Styles.card_para}>
        <h5>imageLet’s Talk Science</h5>
        <a href="" className={Styles.anker}>{learnMore}</a>
        </div>
      </div>
      <div class="col-12 col-lg-3 col-sm-12 col-md-12" className={Styles.img_card02}>
        <div className={Styles.card_para}>
        <h5>image Innovative Courses</h5>
        <a href="" className={Styles.anker}>{learnMore}</a>
        </div>
      </div>
      <div class="col-12 col-lg-3 col-sm-12 col-md-12" className={Styles.img_card03}>
        <div className={Styles.card_para}>
        <h5>image Cloud Storage</h5>
        <a href="" className={Styles.anker}>{learnMore}</a>
        </div>
      </div>
      <div class="col-12 col-lg-3 col-sm-12 col-md-12" className={Styles.img_card04}>
        <div className={Styles.card_para}>
        <h5>imageOnline Education</h5>
        <a href="" className={Styles.anker}>{learnMore}</a>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default CardSection01