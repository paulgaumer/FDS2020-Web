import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const CustomGatsbyImage = ({ image, alt, customClasses }) => {
  const hotspot =
    image.hotspot != null
      ? `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`
      : 'center';

  const style = { objectPosition: hotspot };

  return (
    <GatsbyImage
      image={image.asset.gatsbyImageData}
      alt={alt || image.alt}
      className={`object-cover ${customClasses}`}
      imgStyle={style}
    />
  );
};

export default CustomGatsbyImage;
