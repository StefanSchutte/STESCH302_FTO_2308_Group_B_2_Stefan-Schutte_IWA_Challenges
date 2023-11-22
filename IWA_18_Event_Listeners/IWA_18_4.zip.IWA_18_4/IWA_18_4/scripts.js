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
    //console.log(state.dragging);
    updateDraggingHtml({ over: null });
    updateDragging({ over: null });
    event.preventDefault();
    const id = event.target.dataset.id;
    const over = state.dragging;
    console.log(over);

    moveToColumn(id, over)


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

/**
 * If the help overlay is currently open, close it else if the help overlay is closed, open it.
 * logic to handle the backdrop visibility
 * @param event
 */
const handleHelpToggle = (event) => {
    const helpOverlay = html.help.overlay;

    if (helpOverlay.hasAttribute('open')) {
        helpOverlay.removeAttribute('open');
        html.other.add.focus();
    } else {
        helpOverlay.setAttribute('open', '');
    }
    const backdrop = document.querySelector('.backdrop');
    if (helpOverlay.hasAttribute('open')) {
        backdrop.style.display = 'block';
    } else {
        backdrop.style.display = 'none';
    }
}
/**
 * Retrieve values from the add form.Create a new Order and update the state with the new order.
 * Append the new order to the "ordered" column in the DOM
 * @param event
 */
const handleAddSubmit = (event) => {
    event.preventDefault();

    const title = html.add.title.value;
    const table = html.add.table.value;
    const column = 'ordered';

    const newOrder = createOrderData({ title, table, column });

    state.orders[newOrder.id] = newOrder;

    html.columns.ordered.appendChild(createOrderHtml(newOrder));

    handleAddToggle();
};

/**
 * If the Add Order overlay is currently open, close it else if its closed open it.
 * @param event
 */
const handleAddToggle = (event) => {
    const addOverlay = html.add.overlay;

    if (addOverlay.hasAttribute('open')) {
        addOverlay.removeAttribute('open');
        html.other.add.focus();

    } else {
        addOverlay.setAttribute('open', '');
    }

    const backdrop = document.querySelector('.backdrop');
    if (addOverlay.hasAttribute('open')) {
        backdrop.style.display = 'block';
    } else {
        backdrop.style.display = 'none';
    }
}

/**
 * If the Edit Order overlay is currently open, close it, else if closed open it.
 * Obtain order ID from clicked element and set the order ID in the data-edit-id attribute
 * @param event
 */
const handleEditToggle = (event) => {
    const editOverlay = html.edit.overlay;
    const backdrop = document.querySelector('.backdrop');

    if (editOverlay.hasAttribute('open')) {
        editOverlay.removeAttribute('open');
        html.other.add.focus();
        backdrop.style.display = 'none';
    } else {
        const clickedOrderElement = event.target.closest('[data-id]');
        if (clickedOrderElement) {
            const orderId = clickedOrderElement.dataset.id;

            html.edit.id.value = orderId;

            editOverlay.setAttribute('open', '');
            backdrop.style.display = 'block';
        }
    }
};

/**
 * Retrieve values from the edit form.
 * Check if the order with the given ID exists in the state and then update the order with new values.
 * Update the corresponding order in the DOM.
 * Check if the column has changed and move the order to the new column
 * @param event
 */
const handleEditSubmit = (event) => {
    event.preventDefault();

    const id = html.edit.id.value;
    const title = html.edit.title.value;
    const table = html.edit.table.value;
    const column = html.edit.column.value;

    if (state.orders[id]) {

        state.orders[id].title = title;
        state.orders[id].table = table;
        const oldColumn = state.orders[id].column;

        const orderElement = document.querySelector(`[data-id="${id}"]`);
        orderElement.querySelector('[data-order-title]').textContent = title;
        orderElement.querySelector('[data-order-table]').textContent = table;

        if (oldColumn !== column) {
            moveToColumn(id, column);
        }
    }
    handleEditToggle();
}

/**
 * Retrieve the order ID from the HTML attribute
 * Removing the orders from state and DOM {htmlOrderToDelete}
 * @param event
 */
const handleDelete = (event) => {
    const orderIdToDelete = html.edit.id.value;

    delete state.orders[orderIdToDelete];

    const htmlOrderToDelete = document.querySelector(`[data-id="${orderIdToDelete}"]`);
    if (htmlOrderToDelete) {
        htmlOrderToDelete.remove();
    }
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

