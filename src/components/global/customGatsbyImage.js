import React from 'react';
import Img from 'gatsby-image';

const CustomGatsbyImage = ({ image }) => {
  const hotspot =
    image.hotspot != null
      ? `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`
      : 'center';

  const style = { objectPosition: hotspot };

  return (
    <Img
      fluid={image.asset.fluid}
      alt={image.alt}
      className="object-cover h-full"
      imgStyle={style}
    />
  );
};

export default CustomGatsbyImage;
