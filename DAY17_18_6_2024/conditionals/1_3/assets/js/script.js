
function adult() {
    document.getElementById("ageForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const age = Number(document.querySelector(".alterInput").value);
        console.log({ age });

        if (age >= 18) {
            window.alert("Ja, Du kannst Shisha rauchen");
            document.querySelector(".outPut").innerText = "Ja, Du kannst Shisha rauchen";
        } else {
            window.alert("Du darfst noch nicht Shisha rauchen");
            document.querySelector(".outPut").innerText = "Du darfst noch nicht Shisha rauchen";
        }
    });

}