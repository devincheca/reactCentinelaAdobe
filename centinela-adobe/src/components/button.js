import React from 'react';
function Button (props)
{
  return (
    <button
      className="w3-btn-floating w3-hover-dark-grey w3-ripple"
      style={Object.assign({}, {
          position: 'absolute',
          top: '45%'
        },
        props.buttonFace === '<' ? { left: 0 } : { right: 0 })
      }
      onClick={() => {props.onClick();}}>
      {props.buttonFace}
    </button>
  );
}
export default Button;
