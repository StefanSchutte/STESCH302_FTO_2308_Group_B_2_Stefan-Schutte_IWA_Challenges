const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below

const createData = () => {
    const current = new Date()
    current.setDate(1)

    const startDay = current.getDay()
    const daysInMonth = getDaysInMonth(current)

    const weeks = Math.ceil((startDay + daysInMonth) / 7)
    const days = 7
    const result = []

    for (let weekIndex = 0; weekIndex < weeks; weekIndex++) {
    result.push({
        week: weekIndex + 1,
        days: []
    })

    for (let dayIndex = 0; dayIndex < days; dayIndex++) {
        const day = weekIndex * days + dayIndex - startDay + 1;
        const isValid = day > 0 && day <= daysInMonth

        result[weekIndex].days.push({
            dayOfWeek: dayIndex + 1,
            value: isValid ? day : '',
        })
    }
}
return result;
};

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        ${existing}

        <td class="${classString}">
            ${value}
        </td>
    `
    return result
}

const createHtml = (data) => {
    let result = '';

    for (const { week, days } of data ) {
        let inner = "";
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`);

    for (const { dayOfWeek, value } of days) {
            const isToday = new Date().getDate() === value
            const isWeekend = dayOfWeek === 1 || dayOfWeek === 7;
            const isAlternate = week % 2 === 0;

            let classString = 'table__cell'

            if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString = `${classString} table__cell_weekend`
            if (isAlternate) classString = `${classString} table__cell_alternate`
            inner = addCell(inner, classString, value)
        }

        result = `
            ${result}
            <tr>${inner}</tr>
        `
    }
    return result
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)