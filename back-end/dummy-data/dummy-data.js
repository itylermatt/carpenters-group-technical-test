const randomDate = require('./helper-functions').randomDateGenerator;

let bookingId = [{id:0}];

let bookingsTempData = [
    {
        bookingId: 0,
        contactName: 'John Doe',
        contactNumber: '02735636251',
        numberOfDiners: Math.floor(Math.random() * (10 - 1) + 1), // Math.random() * (max - min) + min === random number within a range
        tableNumber: Math.floor(Math.random() * (30) + 1),
        bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        bookingId: 1,
        contactName: 'Allan Dom',
        contactNumber: '02735136451',
        numberOfDiners: Math.floor(Math.random() * (10 - 1) + 1),
        tableNumber: Math.floor(Math.random() * (30) + 1),
        bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        bookingId: 2,
        contactName: 'Mark Mat',
        contactNumber: '02755134211',
        numberOfDiners: Math.floor(Math.random() * (10 - 1) + 1),
        tableNumber: Math.floor(Math.random() * (30) + 1),
        bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        bookingId: 3,
        contactName: 'Lucille Dang',
        contactNumber: '02745656231',
        numberOfDiners: Math.floor(Math.random() * (10 - 1) + 1),
        tableNumber: Math.floor(Math.random() * (30) + 1),
        bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        bookingId: 4,
        contactName: 'Amy Hear',
        contactNumber: '01735636751',
        numberOfDiners: Math.floor(Math.random() * (10 - 1) + 1),
        tableNumber: Math.floor(Math.random() * (30) + 1),
        bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        bookingId: 5,
        contactName: 'Quan Wi',
        contactNumber: '04735739201',
        numberOfDiners: Math.floor(Math.random() * (10 - 1) + 1),
        tableNumber: Math.floor(Math.random() * (30) + 1),
        bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        bookingId: 6,
        contactName: 'Thando Lwethu',
        contactNumber: '02634631281',
        numberOfDiners: Math.floor(Math.random() * (10 - 1) + 1),
        tableNumber: Math.floor(Math.random() * (30) + 1),
        bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    }
];

module.exports = {bookingsTempData, bookingId};
