function toggleDone(button) {
    if (button.textContent === "Done") {
        button.textContent = "Undo";
        button.style.backgroundColor = "#ff0000";
    } else {
        button.textContent = "Done";
        button.style.backgroundColor = "#00a651";
    }
}

function filterItems() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const rows = document.querySelectorAll('table tr:not(:first-child)');

    rows.forEach(row => {
        const columns = row.querySelectorAll('td');
        let match = false;

        columns.forEach(column => {
            if (column.textContent.toLowerCase().includes(searchInput)) {
                match = true;
            }
        });

        if (match) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
