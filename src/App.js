
import React from 'react';

import classes from './App.module.css'
import ProductData from './ProductDetail'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img alt="amazonLogo" src="https://www.beautyhunter.co.th/wp-content/uploads/2017/01/Amazon-logo-copy.png"/>
        </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/xSIK4M8.png" alt="" />  
          {/* <div className={classes.TimeSection}>
            <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
            </div>     */}

            <div className={classes.HearthBeatSection}>
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
            </div>    
          </div>

          <div className={classes.ProductDetail}>
            <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
            <p className={classes.ProductDesc}>{ProductData.description}</p>
          
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>

              <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src={ProductData.colorOptions[0].imageUrl} alt="ProductData.colorOptions[0].styleName"/>
              <img className={classes.ProductImage} src={ProductData.colorOptions[1].imageUrl} alt="ProductData.colorOptions[1].styleName"/>
              <img className={classes.ProductImage} src={ProductData.colorOptions[2].imageUrl} alt="ProductData.colorOptions[2].styleName"/>
              <img className={classes.ProductImage} src={ProductData.colorOptions[3].imageUrl} alt="ProductData.colorOptions[3].styleName"/>
            </div>

            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
              <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
              <button className={classes.FeatureItem}>Hearth Rate</button>
            </div>
            <button className={classes.PrimaryButton}>Purchase</button>
          </div>
      </div>
    </div>
  );
}

export default App;
