import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

const Grid = styled.div`
  .masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }
  .masonry-grid_column > .masonry-grid_item {
    margin-bottom: 30px;
  }
`;

const breakpointColumnsObj = {
  // max-width
  default: 2,
  1024: 1,
};

const MasonryGrid = ({ children }) => {
  return (
    <Grid>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {children}
      </Masonry>
    </Grid>
  );
};

export default MasonryGrid;
