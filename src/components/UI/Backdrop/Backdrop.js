import React from  'react';
import classes from './Backdrop.css';

const backdrop = (props) => {
    console.log(props);
  return  (

props.show ? <div style={{border:"1px solid black"}} className={classes.Backdrop} onClick={props.clicked}></div> : null

)
  }
export default backdrop;