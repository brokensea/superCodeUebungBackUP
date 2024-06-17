function dOM1_2() {
    document.getElementById("info").innerHTML = "<h1>Hello World</h1>";
    document.getElementById("info").innerHTML += "<h2>How are you?</h2>";
    document.innerHTML += "<div id=`container`></div>";

    let container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);

    document.getElementById("container").innerHTML += "<p>start of the element</p>";
    let endParagraph = document.createElement("p");
    endParagraph.textContent = "end of the element";
    document.getElementById("container").appendChild(endParagraph);
}