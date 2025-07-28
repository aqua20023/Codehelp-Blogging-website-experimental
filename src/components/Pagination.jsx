import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext';
const Pagination = () => {
  const {totalPages, page, handlePageChange} = useContext(AppContext);
  return (
    <div>
      <div className='flex '>
        {
          page > 1 && (
            <button 
            className='border rounded-md py-1 px-4'
            onClick={()=> handlePageChange(page-1)}>Previous</button>
          )
        }
        <br />
        {
          page < totalPages && (
            <button
            className='border rounded-md py-2 px-4'
            onClick={()=> handlePageChange(page+1)}>Next</button>
          )
        }
        <p className='font-bold text-gray-700 mt-3 text-sm'>
          Page {page} of {totalPages}
        </p>
      </div>

    </div>
  )
}

export default Pagination
