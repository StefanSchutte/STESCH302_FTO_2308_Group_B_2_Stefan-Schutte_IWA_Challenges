const currentYear = new Date().getFullYear()

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
        date: new Date(`25 December ${currentYear} 13:25`),
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

const christmas = 6
const futureId = 9

// Do not change code above this comment

if (holidays[futureId]) {
    console.log(holidays[futureId].name) }
else{console.log(`ID ${futureId} not created yet`)}


let copied = { ...holidays[christmas]}
//console.log(copied);
copied.name = 'X-mas Day'
//

//
const correctDate = new Date(copied.date)
correctDate.setUTCHours(0 , 0, 0, 0);
//console.log(correctDate);

let isEarlier = copied.date > correctDate
console.log('New date is earlier:', isEarlier)

if (isEarlier === true) {
    copied.date = correctDate}

{
    console.log('ID change:', holidays[christmas].id !== copied.id )
    console.log('Name change:', holidays[christmas].id !== copied.id || copied.name)
    console.log('Date change:', holidays[christmas].date.toDateString() !== copied.date.toDateString() || copied.date)
}

holidays[0].date = new Date(holidays[0].date)

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const firstHolidayDate = new Date(firstHolidayTimestamp);
const lastHolidayDate = new Date(lastHolidayTimestamp);
const firstDay = firstHolidayDate.getDate().toString().padStart(2, '0');
const firstMonth = (firstHolidayDate.getMonth()+1).toString().padStart(2, '0');
const lastDay = lastHolidayDate.getDate().toString().padStart(2, '0');
const lastMonth = (lastHolidayDate.getMonth()+1).toString().padStart(2, '0');

console.log(`${firstDay}/${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

const randomHoliday = holidays[Math.floor(Math.random() * Object.keys(holidays).length)]
//console.log(randomHoliday)
console.log(`${randomHoliday.date.getDate().toString().padStart(2, '0')}/${(randomHoliday.date.getMonth() + 1).toString().padStart(2, '0')}/${randomHoliday.date.getFullYear()}`)

