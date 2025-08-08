//Message d'erreur si les champs du formulaire sont vides//
const form = document.querySelector("form");
form.addEventListener ('submit',ep);

function ep(e){
    e.preventDefault();
    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    let comment = document.getElementById("message").value.trim();
    const errorMessage = document.querySelector("#error-message h3").textContent;

    if (firstName === "" || lastName === "" || comment === ""){
        document.querySelector("#error-message").style.display = "block"
    } else {
        newComment(firstName, lastName, comment);
    }

    // Supprimer les éléments des champs après le click//
    form.reset(firstName, lastName, comment)
}