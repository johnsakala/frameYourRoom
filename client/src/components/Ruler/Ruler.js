import React from 'react';

import './Ruler.css';

const ruler = (props) =>{
	return (

            <div id="ruler">
              <img src="/images/ruler_x.jpg" alt='ruler x-axis' />
              <img className="ruler_y" src="/images/ruler_y.jpg" alt='ruler y-axis' />
              <div id="arrange-room">
              	{props.children}
              </div>
            </div>
	)
}

export default ruler;

