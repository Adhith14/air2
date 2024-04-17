// import React from 'react';

// const BookingList = ({ bookings, onDelete }) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <div className="grid grid-cols-6 text-sm font-semibold mb-2">
//         <div>DESTINATION FROM</div>
//         <div>DESTINATION TO</div>
//         <div>JOURNEY DATE</div>
//         <div>GUESTS</div>
//         <div>CLASSNAME</div>
//         <div></div>
//       </div>
//       {bookings.map((booking, index) => (
//         <div key={index} className="grid grid-cols-6 text-sm mb-2 items-center">
//           <div>{booking.destinationFrom}</div>
//           <div>{booking.destinationTo}</div>
//           <div>{booking.journeyDate}</div>
//           <div>{booking.guests}</div>
//           <div>{booking.className}</div>
//           <button
//             onClick={() => onDelete(index)}
//             className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookingList;

import React from 'react';

const BookingList = ({ bookings, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl w-full">
      <div className="grid grid-cols-6 text-sm font-semibold mb-2">
        <div>DESTINATION FROM</div>
        <div>DESTINATION TO</div>
        <div>JOURNEY DATE</div>
        <div>GUESTS</div>
        <div>CLASSNAME</div>
        <div></div>
      </div>
      {bookings.map((booking, index) => (
        <div key={index} className="grid grid-cols-6 text-sm mb-2 items-center">
          <div>{booking.destinationFrom}</div>
          <div>{booking.destinationTo}</div>
          <div>{booking.journeyDate}</div>
          <div>{booking.guests}</div>
          <div>{booking.className}</div>
          <button
            onClick={() => onDelete(index)}
            className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookingList;