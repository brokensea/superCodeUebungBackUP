function dom1_3() {
    const figureSection = document.querySelector("#gallery");
    for (let i = 1; i <= 3; i++) {
        figureSection.innerHTML +=
            `<figure> Fig${i}. <img style="max-width: 30%;" src="./assets/img/background/1.jpg" alt=""> </figure>`;
    }

}