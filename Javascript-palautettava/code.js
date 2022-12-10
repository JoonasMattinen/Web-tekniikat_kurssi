//taulukko viestejä varten
let notes = [];



let form = document.querySelector("form");
let checkbox = document.getElementById("checkbox");

document.getElementById("addNote").addEventListener('click', addNotes);


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

        today = dd + '/' + mm + '/' + yyyy;

     //luodaan form elementille uusi p elementti
        let newDiv = document.createElement("div")   
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        form.appendChild(newDiv);
        newDiv.append(h2, p);
        
        //kutsutaan changeStyle funktiota
        changeStyle();  

        // Luodaan funktio joka muuttaa äsken luodun uuden divin tyyliä jos checkbox on tsekataan. tehdään funktio toisen sisään jotta muuttuja newDiv on voimassa
            checkbox.addEventListener('click', changeStyle)
            function changeStyle(){
            
                    if(checkbox.checked){
                        newDiv.classList.add('changedStyle');
                    }
                        
                };

        //käydään lista läpi
        
            for (newNote of notes) {
                h2.textContent = today + " " + "(" + (newNote.name) + ")"
                p.textContent = (newNote.message);
                
            }
        
          
}
