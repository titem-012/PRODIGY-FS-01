import React from 'react';

export default function UserComponent({ Data }) {
  console.log(Data);
  return (
    <>
      <h1>All Users are</h1>
      <div className='flex flex-wrap'>
        {Data.map((user, index) => (
          <div key={index} className='px-16 border-custom rounded-xl m-10'>
            <h1 className='mb-10 mx-20'>{user.Fullname}</h1>
            <span className='m-5'>{user.Dob}</span>
            <span className='m-5'>{user.Gender}</span>
          </div>
        ))}
      </div>
    </>
  );
}
// Rajesh@1974