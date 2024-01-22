// Array für Hobbies erstellen
var hobbies = [];

// Funktion zum Hinzufügen von Hobbies
function addHobby(newHobby) {
    // Überprüfen, ob mehr als 5 Elemente im Array sind
    if (hobbies.length >= 5) {
        // Wenn ja, das erste Element löschen
        hobbies.shift();
    }

    // Neues Hobby zum Array hinzufügen
    hobbies.push(newHobby);

    // Hobbies ausgeben
    console.log("Meine Hobbies:");
    for (var i = 0; i < hobbies.length; i++) {
        console.log("Mein " + (i + 1) + ". Hobby: " + hobbies[i]);
    }
}

// Beispielhobbies hinzufügen
addHobby("Programmieren");
addHobby("Lesen");
addHobby("Sport");
addHobby("Musik hören");
addHobby("Reisen");

// Zusätzliche Hobbies hinzufügen und überprüfen, ob ältere Hobbies entfernt werden
addHobby("Kochen");
addHobby("Fotografie");
addHobby("Gärtnern");
addHobby("Malen");
addHobby("Tanzen");
addHobby("Schwimmen");
