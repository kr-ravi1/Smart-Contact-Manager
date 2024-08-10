import React from 'react';

const Pagination = ({ data, setPage, page }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="-space-x-px text-sm flex justify-center">
        <li className={`${data.first ? "hidden" : ""}`}>
          <div 
            onClick={() => setPage(page - 1)} 
            className={`flex cursor-pointer items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            Previous
          </div>
        </li>
        {Array.from({ length: data.totalPages }, (_, i) => i + 1).map(number => (
          <li key={number}>
            <div 
              onClick={() => setPage(number - 1)} 
              className={`flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${number == data.number + 1 ? "bg-blue-400 dark:bg-blue-200" : "bg-white dark:bg-gray-800"}`}
            >
              {number}
            </div>
          </li>
        ))}
        <li className={`${data.last ? "hidden" : ""}`}>
          <div 
            onClick={() => setPage(page + 1)} 
            className="flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;