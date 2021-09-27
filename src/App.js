
import React, {Component} from 'react';

import classes from './App.module.css'
import ProductData from './Utils/ProductData';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/Topbar';


class App extends Component {

  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentFeatureBtnPos: 0,
    showHeartBeatSection: true
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos})
  }

  onFeatureItemClick = (pos) => {
    this.setState({currentFeatureBtnPos: pos})
    this.setState({showHeartBeatSection: !this.state.showHeartBeatSection})
  }

  render (){
    return (
      <div className="App">
      <Topbar />
    <div className={classes.MainContainer}>
      <div className={classes.ProductPreview}>
          <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} showHeartBeatSection={this.state.showHeartBeatSection}/>
        </div>
      <div className={classes.ProductDetail}>
        <ProductDetail data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} currentFeatureBtnPos={this.state.currentFeatureBtnPos} onFeatureItemClick={this.onFeatureItemClick}/>
        </div>
    </div>
  </div>
    )
  }

}

export default App;
