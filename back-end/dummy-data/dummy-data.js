const randomDate = require('./helper-functions');


let bookingsTempData = [
    {
        contactName: 'John Doe',
        contactNumber: '02735636251',
        NumberOfDiners: Math.random() * (10 - 1) + 1, // Math.random() * (max - min) + min === random number within a range
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Allan Dom',
        contactNumber: '02735136451',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Mark Mat',
        contactNumber: '02755134211',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Lucille Dang',
        contactNumber: '02745656231',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Amy Hear',
        contactNumber: '01735636751',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Quan Wi',
        contactNumber: '04735739201',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Thando Lwethu',
        contactNumber: '02634631281',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Francis Meng',
        contactNumber: '02575616251',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Tanya Ache',
        contactNumber: '02735633561',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Alick Mach',
        contactNumber: '07635632211',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Tammy Li',
        contactNumber: '02723563321',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Jai Jack',
        contactNumber: '02335436251',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Natalie Kake',
        contactNumber: '08736634251',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Keke Sim',
        contactNumber: '02731645251',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Antoine Talk',
        contactNumber: '02735656231',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Yu Mi',
        contactNumber: '02735346211',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Alex Made',
        contactNumber: '02335636329',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Angie Power',
        contactNumber: '05734636151',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Power Sars',
        contactNumber: '07775636551',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    {
        contactName: 'Jacob Doers',
        contactNumber: '03735646221',
        NumberOfDiners: Math.random() * (10 - 1) + 1,
        TableNumber: Math.random() * (30) + 1,
        BookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },

];

module.exports = bookingsTempData;
