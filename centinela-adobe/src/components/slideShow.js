import React, { useState } from 'react';
import Button from '../components/button.js';
import images from '../data/images.js';
function SlideShow ()
{
  const [currentImageIndex, setImage] = useState(0);
  return (
    <article className="w3-container w3-pale-yellow w3-section w3-border-hover-yellow w3-round-jumbo w3-card-24 w3-animate-opacity">
      <div className="w3-content">
	      <div className="w3-display-container w3-center w3-margin">
          {images[currentImageIndex].tag}
          <Button
            onClick={() =>
            {
              setImage(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
            }}
            buttonFace="<" />
          <Button
            onClick={() =>
            {
              setImage(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
            }}
            buttonFace=">" />
          <div
            className="w3-display-bottomright w3-large w3-container w3-padding-16 w3-black w3-animate-opacity">
            {images[currentImageIndex].header}
          </div>
        </div>
      </div>
    </article>
  );
}
export default SlideShow;
