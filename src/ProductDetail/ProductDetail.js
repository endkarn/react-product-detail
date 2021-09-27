import React from "react";

import classes from './ProductDetail.module.css'


const ProductDetail = (props) => {

    const colorOptions = props.data.colorOptions.map((item, pos) => {
      const classArr = [classes.ProductImage]
      if(pos === props.currentPreviewImagePos){
        classArr.push(classes.SelectedProductImage)
      }

      return (
        <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)} />
      )
    })

    const featureItems = props.data.featureList.map((item, pos) => {
      const classArr = [classes.FeatureItem]
      if (pos === props.currentFeatureBtnPos){
        console.log(pos)
        classArr.push(classes.SelectedFeatureItem)
      }
      return (
        <button className={classArr.join(' ')} onClick={() => {props.onFeatureItemClick(pos)}} key={pos}>{item}</button>
      )
    })

    return (
        <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDesc}>{props.data.description}</p>
          
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
              {colorOptions}
            </div>

            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
              {featureItems}
            </div>
            <button className={classes.PrimaryButton}>Purchase</button>
          </div>
    )
}

export default ProductDetail