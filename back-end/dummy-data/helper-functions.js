const randomDateGenerator = (start, end, startHr, endHr) => {
    let date = new Date(+start + Math.random() * (end - start));
    const hour = startHr + Math.random() * (endHr - startHr) | 0;
    date.setHours(hour);
    return date;
};

module.exports = randomDateGenerator;
