const randomDateGenerator = (start, end, startHr, endHr) => {
    let date = new Date(+start + Math.random() * (end - start));
    const hour = startHr + Math.random() * (endHr - startHr) | 0;
    date.setHours(hour);
    return date;
};

const dateSort = (a, b) => new Date(a.bookingTime).getTime() > new Date(b.bookingTime).getTime() ? 1 : -1;

module.exports = {randomDateGenerator, dateSort};
