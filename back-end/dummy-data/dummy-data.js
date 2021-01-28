const randomDate = require('./helper-functions').randomDateGenerator;


let bookingsTempData = [
    {
        contactName: 'John Doe',
        contactNumber: '02735636251',
        numberOfDiners: Math.random() * (10 - 1) + 1, // Math.random() * (max - min) + min === random number within a range
        tableNumber: Math.random() * (30) + 1,
        bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    },
    // {
    //     contactName: 'Allan Dom',
    //     contactNumber: '02735136451',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Mark Mat',
    //     contactNumber: '02755134211',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Lucille Dang',
    //     contactNumber: '02745656231',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Amy Hear',
    //     contactNumber: '01735636751',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Quan Wi',
    //     contactNumber: '04735739201',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Thando Lwethu',
    //     contactNumber: '02634631281',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Francis Meng',
    //     contactNumber: '02575616251',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Tanya Ache',
    //     contactNumber: '02735633561',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Alick Mach',
    //     contactNumber: '07635632211',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Tammy Li',
    //     contactNumber: '02723563321',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Jai Jack',
    //     contactNumber: '02335436251',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Natalie Kake',
    //     contactNumber: '08736634251',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Keke Sim',
    //     contactNumber: '02731645251',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Antoine Talk',
    //     contactNumber: '02735656231',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Yu Mi',
    //     contactNumber: '02735346211',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Alex Made',
    //     contactNumber: '02335636329',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Angie Power',
    //     contactNumber: '05734636151',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Power Sars',
    //     contactNumber: '07775636551',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },
    // {
    //     contactName: 'Jacob Doers',
    //     contactNumber: '03735646221',
    //     numberOfDiners: Math.random() * (10 - 1) + 1,
    //     tableNumber: Math.random() * (30) + 1,
    //     bookingTime: randomDate(new Date(2018, 0, 1), new Date(), 0, 24),
    // },

];

module.exports = bookingsTempData;
