import React from 'react';
const Image = ({ Url, load }) => {
    return (
      load ? 
      <center style={{ marginTop: "40px"}}><h3>Loading</h3></center> :
            <div className="image" style={{ marginTop: "40px"}}>
              <img src={Url} alt="" /></div>
    );
}

export default Image;