//taulukko viestejä varten
let notes = [];


document.getElementById("addNote").addEventListener('click', addNotes);

let form = document.querySelector("form");

/**
 * 
 * @param {Event} e 
 */
function addNotes(e){
    // estetään sivun päivitys, kun nappia painetaan
    e.preventDefault();

    let formData = new FormData(form);
    let userName = formData.get("userName");
    let note = formData.get("note");


    //tehdään taulukko, joka tallentaa uudet notet taulukkoon
    let newNote = {
        name: userName,
        message: note
    }
    
    notes.push(newNote)

   
    printNote();
}

function printNote(){
    // haetaan päivämäärä
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
     //luodaan form elementille uusi p elementti   
        let p = document.createElement("p");
        p.className = "newElem";
        form.appendChild(p)
        //käydään lista läpi
        for (newNote of notes) {
            p.textContent = today + " " + (newNote.name);
            
        }
}