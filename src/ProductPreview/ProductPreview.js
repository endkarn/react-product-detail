import React from "react";

import classes from "./ProductPreview.module.css";

const ProductPreview = (props) => {
  return (
    <div className={classes.ProductPreview}>
      <img src={props.currentPreviewImage} alt="Current Preview" />

      {
        props.showHeartBeatSection ? 
        <div className={classes.HearthBeatSection}>
        <i class="fas fa-heartbeat"></i>
        <p>78</p>
        </div>
        : 
        <div className={classes.TimeSection}>
        <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
        </div>
      }
    </div>
  );
};

export default ProductPreview;
