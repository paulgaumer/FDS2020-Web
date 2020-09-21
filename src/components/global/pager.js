import React from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import tw from 'twin.macro';

const PaginationContainer = styled.div`
  .pagination {
    ${tw`flex justify-center px-4 border-t border-gray-200`}
  }
  li {
    ${tw`text-gray-600 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-400`}
  }
  li {
    ${tw`px-3 pt-4 sm:px-4`}
  }
  .active,
  .activeLink {
    ${tw`text-secondary focus:text-secondary focus:border-secondary`}
  }
  .active {
    ${tw`border-t-2 border-secondary hover:border-secondary hover:text-secondary`}
    padding-top: calc(1rem - 2px)
  }
  .disabled a {
    ${tw`invisible`}
  }
`;

const Pager = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  onChange,
}) => {
  return (
    <PaginationContainer data-name="pagination-container">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={5}
        onChange={onChange}
        activeLinkClass={'activeLink'}
      />
    </PaginationContainer>
  );
};

export default Pager;
