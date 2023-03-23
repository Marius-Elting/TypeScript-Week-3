"use strict";
// ÜBUNG 1
const daysUntil = (param) => {
    const today = new Date();
    const nextBday = new Date(new Date().getFullYear() + '-' + (param[1].getMonth() + 1) + '-' + param[1].getDate());
    const msec = (nextBday.getTime() - today.getTime());
    const days = (msec / 1000 / 60 / 60 / 24);
    return days;
};
daysUntil(["lars", new Date(1994, 11, 16)]);
// ÜBUNG 2
const birthdayList = (param) => {
    const output = param.map(person => [person[0], daysUntil(person)]);
    console.log(typeof output[0][1]);
    return output.sort((a, b) => { a[1] - b[1]; });
};
birthdayList([['emily', new Date('1990-12-11')], ['andrew', new Date('1995-07-21')]]);
