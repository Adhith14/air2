// import React, { useState } from 'react';
// import BookingList from './BookingList';

// const BookingForm = () => {
//   const [bookings, setBookings] = useState([]);
//   const [formData, setFormData] = useState({
//     destinationFrom: 'New York',
//     destinationTo: 'Paris',
//     journeyDate: '2024-03-09',
//     guests: '2 Persons',
//     className: 'Economy',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setBookings([...bookings, formData]);
//     setFormData({
//       destinationFrom: 'New York',
//       destinationTo: 'Paris',
//       journeyDate: '2024-03-09',
//       guests: '2 Persons',
//       className: 'Economy',
//     });
//   };

//   const handleDelete = (index) => {
//     const updatedBookings = [...bookings];
//     updatedBookings.splice(index, 1);
//     setBookings(updatedBookings);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-lg shadow-md mb-4 flex justify-between items-center"
//       >
//         <div className="flex items-center">
//           <select
//             name="destinationFrom"
//             value={formData.destinationFrom}
//             onChange={handleChange}
//             className="mr-2 px-2 py-1 rounded-md border border-gray-300"
//           >
//             <option value="New York">New York</option>
//             <option value="Paris">Paris</option>
//             <option value="London">London</option>
//           </select>
//           <select
//             name="destinationTo"
//             value={formData.destinationTo}
//             onChange={handleChange}
//             className="mr-2 px-2 py-1 rounded-md border border-gray-300"
//           >
//             <option value="Paris">Paris</option>
//             <option value="Rome">Rome</option>
//             <option value="New York">New York</option>
//           </select>
//           <input
//             type="date"
//             name="journeyDate"
//             value={formData.journeyDate}
//             onChange={handleChange}
//             className="mr-2 px-2 py-1 rounded-md border border-gray-300"
//           />
//           <select
//             name="guests"
//             value={formData.guests}
//             onChange={handleChange}
//             className="mr-2 px-2 py-1 rounded-md border border-gray-300"
//           >
//             <option value="1 Person">1 Person</option>
//             <option value="2 Persons">2 Persons</option>
//             <option value="4 Persons">4 Persons</option>
//           </select>
//           <select
//             name="className"
//             value={formData.className}
//             onChange={handleChange}
//             className="mr-2 px-2 py-1 rounded-md border border-gray-300"
//           >
//             <option value="Economy">Economy</option>
//             <option value="Business">Business</option>
//           </select>
//         </div>
//         <button
//           type="submit"
//           className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
//         >
//           + Book
//         </button>
//       </form>
//       <BookingList bookings={bookings} onDelete={handleDelete} />
//     </div>
//   );
// };

// export default BookingForm;

import React, { useState } from 'react';
import BookingList from './BookingList';

const BookingForm = () => {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    destinationFrom: 'New York',
    destinationTo: 'Paris',
    journeyDate: '2024-03-09',
    guests: '2 Persons',
    className: 'Economy',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookings([...bookings, formData]);
    setFormData({
      destinationFrom: 'New York',
      destinationTo: 'Paris',
      journeyDate: '2024-03-09',
      guests: '2 Persons',
      className: 'Economy',
    });
  };

  const handleDelete = (index) => {
    const updatedBookings = [...bookings];
    updatedBookings.splice(index, 1);
    setBookings(updatedBookings);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-4 flex justify-between items-center max-w-3xl w-full"
      >
        <div className="flex items-center">
          <select
            name="destinationFrom"
            value={formData.destinationFrom}
            onChange={handleChange}
            className="mr-2 px-2 py-1 rounded-md border border-gray-300"
          >
            <option value="New York">New York</option>
            <option value="Paris">Paris</option>
            <option value="London">London</option>
          </select>
          <select
            name="destinationTo"
            value={formData.destinationTo}
            onChange={handleChange}
            className="mr-2 px-2 py-1 rounded-md border border-gray-300"
          >
            <option value="Paris">Paris</option>
            <option value="Rome">Rome</option>
            <option value="New York">New York</option>
          </select>
          <input
            type="date"
            name="journeyDate"
            value={formData.journeyDate}
            onChange={handleChange}
            className="mr-2 px-2 py-1 rounded-md border border-gray-300"
          />
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="mr-2 px-2 py-1 rounded-md border border-gray-300"
          >
            <option value="1 Person">1 Person</option>
            <option value="2 Persons">2 Persons</option>
            <option value="4 Persons">4 Persons</option>
          </select>
          <select
            name="className"
            value={formData.className}
            onChange={handleChange}
            className="mr-2 px-2 py-1 rounded-md border border-gray-300"
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          + Book
        </button>
      </form>
      <BookingList bookings={bookings} onDelete={handleDelete} />
    </div>
  );
};

export default BookingForm;