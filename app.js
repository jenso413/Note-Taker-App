// Goals
// Display a modal when clicked
// Take up 100% width until 2nd note is added, then 50%

let noteInput = document.getElementById('note');

document.getElementById('add-note').addEventListener('click', function() {
    // Create new div
    let newNote = document.createElement('div');

    // Append div to note container
    document.querySelector('.note-container').appendChild(newNote);

    // Add class of 'note' to our new div
    newNote.classList.add('note');

    // Creating note content
    const noteTitle = document.createElement('h3');
    const noteContent = document.createElement('p');
    const noteButton = document.createElement('button');

    // Adding style to button
    noteButton.classList.add('details');

    // Adding values to notes
    noteContent.innerText = noteInput.value;
    noteButton.innerText = 'View Details'
    noteTitle.innerText = 'Note1'

    // Append note content
    newNote.appendChild(noteTitle);
    newNote.appendChild(noteContent);
    newNote.appendChild(noteButton);

    // Clear input value
    noteInput.value = '';
})