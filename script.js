//your JS code here. If required.
document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent page reload
    addBook();
});
function addBook() 
{
		const title=document.getElementById("title").value.trim();
		const author=document.getElementById("author").value.trim();
		const isbn=document.getElementById("isbn").value.trim();

		const table=document.getElementById("book-list");

		 const row = table.insertRow(0);

    row.insertCell(0).textContent = title;
    row.insertCell(1).textContent = author;
    row.insertCell(2).textContent = isbn;

	const deleteCell = row.insertCell(3);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "delete";

	deleteCell.appendChild(deleteButton);

	document.getElementById("title").value="";
	document.getElementById("author").value="";
	document.getElementById("isbn").value="";
}
document.getElementById("book-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) 
	{
        const row = e.target.parentElement.parentElement;
        row.remove(); // Remove the corresponding row
    }
});


/********************************************/
