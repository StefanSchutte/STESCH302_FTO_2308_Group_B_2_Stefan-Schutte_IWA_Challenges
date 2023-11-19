import {createOrderHtml, html, moveToColumn, updateDraggingHtml} from "./view.js";
import {createOrderData, updateDragging} from "./data.js";
import { TABLES, COLUMNS, state} from "./data.js";

document.addEventListener('DOMContentLoaded', function () {

    const addOrderButton = document.getElementById('addOrderButton');

    if (addOrderButton) {
        addOrderButton.focus();
    }
});

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })

}
/**
 * Function that handels dragging.
 * @param event
 */
const handleDragStart = (event) => {
    const orderId = event.target.dataset.id;
    event.dataTransfer.setData('text/plain', orderId);
    updateDraggingHtml({ over: event.target.dataset.column });
    updateDragging({ source: orderId });
};
/**
 * Attach the handleDragStart function to relevant drag events
 */
for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart);
}

/**
 * Resets dragging in UI and app
 * @param event
 */
const handleDragEnd = (event) => {
    event.preventDefault();
    updateDraggingHtml({ over: null });
    updateDragging({ over: null });
};

const handleDrop = (event) => {
    event.preventDefault();
    const orderId = event.dataTransfer.getData('text/plain');
    const newColumn = event.target.dataset.area;
    moveToColumn(orderId, newColumn);
}
/**
 * Attach the handleDragEnd function to relevant drag events
 */
for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('drop', handleDrop);
}

const handleHelpToggle = (event) => {
    const helpOverlay = html.help.overlay;

    if (helpOverlay.hasAttribute('open')) {
        // If the help overlay is currently open, close it
        helpOverlay.removeAttribute('open');
        html.other.add.focus();
    } else {
        // If the help overlay is closed, open it
        helpOverlay.setAttribute('open', '');
    }

    //logic to handle the backdrop visibility
    const backdrop = document.querySelector('.backdrop');
    if (helpOverlay.hasAttribute('open')) {
        backdrop.style.display = 'block';
    } else {
        backdrop.style.display = 'none';
    }
}
//

const handleAddSubmit = (event) => {
    event.preventDefault();

    // Retrieve values from the add form
    const title = html.add.title.value;
    const table = html.add.table.value;
    const column = 'ordered'; // Default column for a new order

    // Create a new order
    const newOrder = createOrderData({ title, table, column });

    // Update the state with the new order
    state.orders[newOrder.id] = newOrder;

    // Append the new order to the "ordered" column in the DOM
    html.columns.ordered.appendChild(createOrderHtml(newOrder));

    // Close the add overlay
    handleAddToggle();
};

//
const handleAddToggle = (event) => {
    const addOverlay = html.add.overlay;

    if (addOverlay.hasAttribute('open')) {
        // If the Add Order overlay is currently open, close it
        addOverlay.removeAttribute('open');
        html.other.add.focus();

    } else {
        // If the Add Order overlay is closed, open it
        addOverlay.setAttribute('open', '');
    }

    // You might also want to add logic to handle the backdrop visibility
    const backdrop = document.querySelector('.backdrop');
    if (addOverlay.hasAttribute('open')) {
        backdrop.style.display = 'block';
    } else {
        backdrop.style.display = 'none';
    }
}
//

const handleEditToggle = (event) => {
    const editOverlay = html.edit.overlay;
    const backdrop = document.querySelector('.backdrop');

    if (editOverlay.hasAttribute('open')) {
        // If the Edit Order overlay is currently open, close it
        editOverlay.removeAttribute('open');
        html.other.add.focus();
        backdrop.style.display = 'none';
    } else {
        // If the Edit Order overlay is closed, open it

        // Obtain the order ID from the clicked element
        const clickedOrderElement = event.target.closest('[data-id]');
        if (clickedOrderElement) {
            const orderId = clickedOrderElement.dataset.id;

            // Set the order ID in the data-edit-id attribute
            html.edit.id.value = orderId;

            editOverlay.setAttribute('open', '');
            backdrop.style.display = 'block';

        }
    }
};

const handleEditSubmit = (event) => {
    event.preventDefault();

    // Retrieve values from the edit form
    const id = html.edit.id.value;
    const title = html.edit.title.value;
    const table = html.edit.table.value;
    const column = html.edit.column.value;

    // Check if the order with the given ID exists in the state
    if (state.orders[id]) {
        // Update the order with the new values
        state.orders[id].title = title;
        state.orders[id].table = table;
        const oldColumn = state.orders[id].column;

        // Update the corresponding order in the DOM
        const orderElement = document.querySelector(`[data-id="${id}"]`);
        orderElement.querySelector('[data-order-title]').textContent = title;
        orderElement.querySelector('[data-order-table]').textContent = table;

        // Check if the column has changed
        if (oldColumn !== column) {
            // Move the order to the new column
            moveToColumn(id, column);
        }
    }
    handleEditToggle();
}


const handleDelete = (event) => {
    const orderIdToDelete = html.edit.id.value; // Retrieve the order ID from the HTML attribute

    // Remove the order from the state
    delete state.orders[orderIdToDelete];

    // Remove the order from the DOM
    const htmlOrderToDelete = document.querySelector(`[data-id="${orderIdToDelete}"]`);
    if (htmlOrderToDelete) {
        htmlOrderToDelete.remove();
    }

    // Close the edit overlay
    handleEditToggle();
}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}

