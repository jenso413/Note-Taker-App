// Goals
// Display a modal when clicked
// Take up 100% width until 2nd note is added, then 50%

let noteInput = document.getElementById('note');

// Create modal variable to store content
const modal = document.querySelector('.modal')

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
    const deleteButton = document.createElement('button');

    // Adding style to button
    noteButton.classList.add('details');
    deleteButton.classList.add('delete');

    // Adding class to h3
    noteTitle.classList.add('noteNumber')

    // Adding values to notes
    noteContent.innerText = noteInput.value;
    noteButton.innerText = 'View Details'
    noteTitle.innerText = 'Note1'
    deleteButton.innerHTML = '<i class="fas fa-times"></i>'

    // Append note content
    newNote.appendChild(noteTitle);
    newNote.appendChild(noteContent);
    newNote.appendChild(noteButton);
    newNote.appendChild(deleteButton);

    // Save note to local storage
    saveLocalNotes(noteInput);

    
    // Show modal when 'view details' is clicked
    noteButton.addEventListener('click', function() {
        
        // Show modal on click
        document.querySelector('.modal-bg').classList.add('bg-active')

        // Assigns variable modalContent to the paragraph element content that respective noteButton is associated with
        let modalContent = noteButton.previousElementSibling.textContent;
        
        const modalParagraph = document.getElementById('modalParagraph');

        modalParagraph.innerText = modalContent;

    });


    // Declare variable on 'x' icon
    const hideModal = document.querySelector('.remove-modal');

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

    // Adding functionality to delete Button
    deleteButton.addEventListener('click', function() {
        document.querySelector('.note-container').removeChild(deleteButton.parentNode);

        // To delete from local storage

        // Gets text from p element in the same div
        let noteText = this.closest('.note').querySelector('p').innerText;
        
        // Access local storage array
        let localArray = JSON.parse(localStorage.getItem('notes'));

        // Find index position of noteText in localArray and remove it
        let localIndex = localArray.indexOf(noteText);

        // Remove index position
        localArray.splice(localIndex, 1);

        // Set local Array as 'notes' in localStorage
        localStorage.setItem('notes', JSON.stringify(localArray));
    });

    // Clear input value
    noteInput.value = '';

})

document.addEventListener('DOMContentLoaded', getLocalNote);

function saveLocalNotes(note) {
    
    // Check: Is something in local storage?
    let notes;
    if (localStorage.getItem('notes') === null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem('notes'));
    }

    let storedNote = note.value;
    notes.push(storedNote);
    localStorage.setItem('notes', JSON.stringify(notes))

}

function getLocalNote() {

    // Check if already in local storage
    let notes;
    if (localStorage.getItem('notes') === null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem('notes'))
    }

    notes.forEach(note => {
        
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
        const deleteButton = document.createElement('button');

        // Adding style to button
        noteButton.classList.add('details');
        deleteButton.classList.add('delete');

        // Adding class to h3
        noteTitle.classList.add('noteNumber')

        // Adding values to notes
        noteContent.innerText = note;
        noteButton.innerText = 'View Details'
        noteTitle.innerText = 'Note1'
        deleteButton.innerHTML = '<i class="fas fa-times"></i>'

        // Append note content
        newNote.appendChild(noteTitle);
        newNote.appendChild(noteContent);
        newNote.appendChild(noteButton);
        newNote.appendChild(deleteButton);

        // Adding functionality to delete Button
        deleteButton.addEventListener('click', function() {
            
            document.querySelector('.note-container').removeChild(deleteButton.parentNode);

            // To delete from local storage

            // Gets text from p element in the same div
            let noteText = this.closest('.note').querySelector('p').innerText;
            
            // Access local storage array
            let localArray = JSON.parse(localStorage.getItem('notes'));

            // Find index position of noteText in localArray and remove it
            let localIndex = localArray.indexOf(noteText);

            // Remove index position
            localArray.splice(localIndex, 1);

            // Set local Array as 'notes' in localStorage
            localStorage.setItem('notes', JSON.stringify(localArray));
        });


        // Show modal when 'view details' is clicked
        noteButton.addEventListener('click', function() {
        
            // Show modal on click
            document.querySelector('.modal-bg').classList.add('bg-active')

            // Assigns variable modalContent to the paragraph element content that respective noteButton is associated with
            let modalContent = noteButton.previousElementSibling.textContent;
            
            const modalParagraph = document.getElementById('modalParagraph');

            modalParagraph.innerText = modalContent;

        });

        // Declare variable on 'x' icon
        const hideModal = document.querySelector('.remove-modal');

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
        });


}

    