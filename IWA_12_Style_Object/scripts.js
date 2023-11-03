const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line
const book1 = document.getElementById('book1');
const status1 = book1.querySelector('.status')
const reserve1 = book1.querySelector('.reserve')
const checkout1 = book1.querySelector('.checkout')
const checkin1 = book1.querySelector('.checkin')

const book2 = document.getElementById('book2');
const status2 = book2.querySelector('.status')
const reserve2 = book2.querySelector('.reserve')
const checkout2 = book2.querySelector('.checkout')
const checkin2 = book2.querySelector('.checkin')

const book3 = document.getElementById('book3');
const status3 = book3.querySelector('.status')
const reserve3 = book3.querySelector('.reserve')
const checkout3 = book3.querySelector('.checkout')
const checkin3 = book3.querySelector('.checkin')

status1.style.color = STATUS_MAP.overdue.color;
reserve1.disabled = !STATUS_MAP.overdue.canReserve;
checkout1.disabled = !STATUS_MAP.overdue.canCheckout;
checkin1.disabled = !STATUS_MAP.overdue.canCheckIn;

status2.style.color = STATUS_MAP.reserved.color;
reserve2.disabled = !STATUS_MAP.reserved.canReserve;
checkout2.disabled = !STATUS_MAP.reserved.canCheckout;
checkin2.disabled = !STATUS_MAP.reserved.canCheckIn;

status3.style.color = STATUS_MAP.shelf.color;
reserve3.disabled = !STATUS_MAP.shelf.canReserve;
checkout3.disabled = !STATUS_MAP.shelf.canCheckout;
checkin3.disabled = !STATUS_MAP.shelf.canCheckIn;