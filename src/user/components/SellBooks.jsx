import React from 'react'

function SellBooks() {
  return (
    <div>
      <div className="p-10 my-20 mx-5 bg-gray-200">
        <h1 className="text-3xl text-center font-bold">Book Details</h1>
        <div className="md:grid grid-cols-2 mt-10 w-full">
            <div className="px-3">
                <div className="mb-3">
                    <input type="text" placeholder='Title' className="bg-white p-2 w-full rounded" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='Author' className="bg-white p-2 w-full rounded" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder='No. of Pages' className="bg-white p-2 w-full rounded" />
                </div>                
               <div className="mb-3">
                    <input type="text" placeholder='Image URL' className="bg-white p-2 w-full rounded" />
                </div>
                 <div className="mb-3">
                    <input type="text" placeholder='Price' className="bg-white p-2 w-full rounded" />
                </div>
                 <div className="mb-3">
                    <input type="text" placeholder='Discount Price' className="bg-white p-2 w-full rounded" />
                </div>
                 <div className="mb-3">
                    <textarea rows={4} type="text" placeholder='Abstract' className="bg-white p-2 w-full rounded" />
                </div>
            </div>
            <div className="px-3">
                 <div className="mb-3">
                    <input type="text" placeholder='Publisher' className="bg-white p-2 w-full rounded" />
                </div>
                 <div className="mb-3">
                    <input type="text" placeholder='Language' className="bg-white p-2 w-full rounded" />
                </div>
                 <div className="mb-3">
                    <input type="text" placeholder='ISBN' className="bg-white p-2 w-full rounded" />
                </div>
                 <div className="mb-3">
                    <input type="text" placeholder='Category' className="bg-white p-2 w-full rounded" />
                </div>
                <div className="mb-3 flex justify-center items-center mt-10">
                    <label htmlFor="uploadImg">
                        <input type="file" id='uploadImg' hidden/>
                        <img width={'200px'} src="https://www.pngall.com/wp-content/uploads/2/Upload-Transparent.png" alt="upload" />
                    </label>
                </div>
            </div>
        </div>

        <div className="flex justify-end mt-5">
           <button className='bg-gray-600 text-white p-2 rounded me-5 hover:bg-white hover:text-gray-400'>RESET</button>
           <button className='bg-blue-600 text-white p-2 rounded me-5 hover:bg-white hover:text-gray-400'>SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default SellBooks
