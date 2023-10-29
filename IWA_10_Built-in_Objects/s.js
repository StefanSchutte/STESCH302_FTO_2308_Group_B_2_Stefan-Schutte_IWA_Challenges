const currentYear = new Date().getFullYear();

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 00:00`), // Set to midnight
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6;
const futureId = 9;

// Check if futureId exists
if (holidays[futureId]) {
    console.log(holidays[futureId].name);
} else {
    console.log(`ID ${futureId} not created yet`);
}

// Create a copy of the Christmas object
const copied = { ...holidays[christmas] };
copied.name = 'X-mas Day';
copied.date.setHours(0, 0); // Set to midnight
const isEarlier = copied.date < holidays[christmas].date;
console.log('New date is earlier:', isEarlier);

// Log changes
console.log('ID change:', holidays[christmas].id !== copied.id || copied.id);
console.log('Name change:', holidays[christmas].name !== copied.name || copied.name);
console.log('Date change:', holidays[christmas].date.toString() !== copied.date.toString() || copied.date);


// Find the first and last holiday
const holidayDates = Object.values(holidays).map(holiday => holiday.date);


// Format and log the first and last holidays
const firstHoliday = Object.values(holidays).reduce((min, holiday) => {
    return holiday.date < min ? holiday.date : min;
}, new Date(`12/31/${currentYear}`));

const lastHoliday = Object.values(holidays).reduce((max, holiday) => {
    return holiday.date > max ? holiday.date : max;
}, new Date(`01/01/${currentYear}`));


console.log('The first holiday in the year as date:', format(firstHoliday));
console.log('The last holiday in the year as date:', format(lastHoliday));

// Generate a random holiday
const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomIndex];
console.log('A randomly selected holiday date:', format(randomHoliday.date));