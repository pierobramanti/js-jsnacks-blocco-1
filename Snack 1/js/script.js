// CREO UN ARRAY CONTENTENTE GLI INVITATI ALLA FESTA//

let guest= ["Jay", "Daisy", "Tom", "Myrtle", "Nick", "Luigi", "Alessio", "Fabrizio"]

// INSERISCO PROMPT//

let nameGuest = prompt( "Gentile ospite, la preghiamo di fornire il suo nome").toLocaleLowerCase();

//IF//

if(guest.includes(nameGuest)){
    console.log(`Gentile/issima ${nameGuest}, siamo lietti di informarla che è invitato/a alla festa organizzata da Jay Gatsby`)
}

// ELSE //
else{
    console.log(`Gentile/issima ${nameGuest}, ci dispiace informarla che non è invitato/a alla festa organizzata da Jay Gatsby`)
}