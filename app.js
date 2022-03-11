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

    // Adding class to h3
    noteTitle.classList.add('noteNumber')

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


    // Show modal when 'view details' is clicked
    noteButton.addEventListener('click', function() {
        
        // Show modal on click
        document.querySelector('.modal-bg').classList.add('bg-active')

        // Create modal variable to store content
        const modal = document.querySelector('.modal')

        // If modal has no content
        if (modal.children.length <= 1) {
            let modalContent = noteContent.cloneNode(true);

            // Append information to modal
            modal.appendChild(modalContent);
        }

    });

    // Declare variable on 'x' icon
    const hideModal = document.querySelector('.fa-times');

    // Hide modal again when 'x' icon clicked
    hideModal.addEventListener('click', function() {

        // Toggle classlist to hide modal
        document.querySelector('.modal-bg').classList.remove('bg-active')
    })



    // Track note number to display in an array
    let numberOfNotes = document.querySelector('.note-container').getElementsByClassName('noteNumber')
    numberOfNotes = Array.from(numberOfNotes)

    // For loop to append respective positional number to h3
    for(let i = 0; i < numberOfNotes.length; i++) {
        numberOfNotes[i].innerText = `Note${i+1}`
    }
})

