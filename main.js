document.addEventListener("DOMContentLoaded", function () {
    const insertForm = document.getElementById("insertForm");

    insertForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const tableName = document.getElementById("tableName").value;
        const queryValues = document.getElementById("queryValues").value;

            // index ou commence Values
            const valuesStartIndex = tableName.indexOf("VALUES");

            // envoie la partie de cette chaîne à partir de l'indice de départ jusqu'à l'indice de fin exclu
            const valuesPart = tableName.substring(0, valuesStartIndex);


            //console.log(valuesPart);

        const query = `${valuesPart} VALUES ${queryValues}`;
        console.log(query); 

        const resultOutput = document.getElementById("resultOutput");
        resultOutput.textContent = query; // pour afficher le result
        copyButton.disabled = false; // Activer le bouton copier une fois que la requête est affichée
        copyButton.textContent = "Copier"; // Réinitialiser le texte du bouton copier

    });

    copyButton.addEventListener("click", function () {
        const resultOutput = document.getElementById("resultOutput");
        const range = document.createRange();
        range.selectNode(resultOutput);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        copyButton.textContent = "Copié !"; // Modifier le texte du bouton après la copie
    });
});