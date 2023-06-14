import React from 'react';

interface PaginationProps {
  currentPage: number;
  usersPerPage: number;
  totalUsers: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = Math.ceil(totalUsers / usersPerPage);

  return (
    <div className='flex justify-between items-center mt-4 px-6'>
      <div>
        <span className='mr-2 text-sm font-semibold'>
          Showing {Math.min(currentPage * usersPerPage, totalUsers)} of {totalUsers} Users.
        </span>
      </div>
      <div>
        <button
          className='bg-primary hover:bg-hover text-xs text-white font-bold py-2 px-4 rounded mr-2'
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: pageNumbers }, (_, index) => index).map((pageNumber) => (
          <button
            key={pageNumber + 1}
            className={`bg-[#1CE124] hover:bg-[#BCFFBF] text-white font-bold py-2 px-4 mr-2 rounded ${
              pageNumber + 1 === currentPage ? 'bg-[#1CE124]' : ''
            }`}
            onClick={() => paginate(pageNumber + 1)}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button
          className='bg-primary hover:bg-hover text-xs text-white font-bold py-2 px-4 rounded ml-2'
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pageNumbers}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
