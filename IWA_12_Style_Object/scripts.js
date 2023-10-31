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

// Get all the book containers and process them
const bookContainers = document.querySelectorAll('[id^="book"]');
bookContainers.forEach((bookContainer, index) => {
    const statusElement = bookContainer.querySelector('.status');
    const reserveButton = bookContainer.querySelector('.reserve');
    const checkoutButton = bookContainer.querySelector('.checkout');
    const checkinButton = bookContainer.querySelector('.checkin');

    // Get the status text and map it to the STATUS_MAP
    const statusText = statusElement.textContent.trim();
    const statusProperties = STATUS_MAP[statusText];

    // Set the text color
    statusElement.style.color = statusProperties.color;

    // Enable or disable buttons
    reserveButton.disabled = !statusProperties.canReserve;
    checkoutButton.disabled = !statusProperties.canCheckout;
    checkinButton.disabled = !statusProperties.canCheckIn;
});