function rechnenKal() {
    // input
    const koerpergroesse = Number(document.getElementById('koerpergroesse').value);
    const alter = Number(document.getElementById('alter').value);
    const gewicht = Number(document.getElementById('gewicht').value);
    // PAL-Faktor (PAL=Physical Activity Level) 
    const tatigkeitPAL = Number(document.getElementById('tatigkeit').value);
    const geschlecht = document.querySelector('input[name="kalorGeschlecht"]:checked').value;
    // console.log('Körpergröße:', koerpergroesse);
    // console.log('Alter:', alter);
    // console.log('Gewicht:', gewicht);
    // console.log('Geschlecht:', geschlecht);
    // console.log('Tätigkeit:', tatigkeit);

    let kalorienGrundumsatz;
    // logike
    if (geschlecht == "w") {
        kalorienGrundumsatz = 655.1 + (9.6 * gewicht) + (1.8 * koerpergroesse) - (4.7 * alter);
        // console.log(typeof kalorienGrundumsatz);
    } else if (geschlecht == "m") {
        kalorienGrundumsatz = 66.47 + (13.7 * gewicht) + (5 * koerpergroesse) - (6.8 * alter);
    } else { window.alert("issue"); }

    // PAL-Faktor (PAL=Physical Activity Level) 
    const gesamtumsatz = kalorienGrundumsatz * tatigkeitPAL;

    // document.querySelector(".gesamtumsatz").innerText += " " + roundToTwoDecimalPlaces(gesamtumsatz);

    // let newDivGesamtumsatz = document.createElement('div');
    // newDivGesamtumsatz.style.width = '10px';
    // newDivGesamtumsatz.style.height = '10px';
    // newDivGesamtumsatz.textContent = roundToTwoDecimalPlaces(gesamtumsatz);
    // document.querySelector(".gesamtumsatz").appendChild(newDivGesamtumsatz);

    // document.querySelector(".grundumsatz").innerText += " " + roundToTwoDecimalPlaces(kalorienGrundumsatz);

    // let newDivKalorienGrundumsatz = document.createElement('div');
    // newDivKalorienGrundumsatz.style.width = '10px';
    // newDivKalorienGrundumsatz.style.height = '10px';
    // newDivKalorienGrundumsatz.textContent = roundToTwoDecimalPlaces(kalorienGrundumsatz);
    // document.querySelector(".grundumsatz").appendChild(newDivKalorienGrundumsatz);


    const kJGrundumsatz = roundToTwoDecimalPlaces(kalorienGrundumsatz) * 4.184;
    const kJGesamtumsatz = gesamtumsatz * 4.184;

    // console.log({ kJGrundumsatz });
    // console.log({ kJGesamtumsatz });


    // let newDiv = document.createElement('div');
    // newDiv.style.width = '10px';
    // newDiv.style.height = '10px';
    // newDiv.textContent = roundToTwoDecimalPlaces(kJGrundumsatz);
    // let targetElement = document.querySelector(".grundumsatz");
    // targetElement.appendChild(newDiv);

    // document.querySelector(".gesamtumsatz").innerHTML += " <div>'roundToTwoDecimalPlaces(kJGrundumsatz)'</div>";;

    // let newDiv2 = document.createElement('div');
    // newDiv2.style.width = '10px';
    // newDiv2.style.height = '10px';
    // newDiv2.textContent = roundToTwoDecimalPlaces(kJGesamtumsatz);
    // let targetElement2 = document.querySelector(".gesamtumsatz");
    // targetElement2.appendChild(newDiv2);


    // document.querySelector(".grundumsatz").innerText += " " + " " + roundToTwoDecimalPlaces(kJGesamtumsatz);

    document.getElementById("kcalGrundumsatz").innerText = roundToTwoDecimalPlaces(kalorienGrundumsatz);
    document.getElementById("kJGrundumsatz").innerText = roundToTwoDecimalPlaces(kJGrundumsatz);
    document.getElementById("kcalGesamtumsatz").innerText = roundToTwoDecimalPlaces(gesamtumsatz);
    document.getElementById("kJGesamtumsatz").innerText = roundToTwoDecimalPlaces(kJGesamtumsatz);

    document.querySelector("#koerpergroesse").value = "";
    document.querySelector("#alter").value = "";
    document.querySelector("#gewicht").value = "";
}

function clearAll() {
    document.getElementById("kcalGrundumsatz").innerText = "";
    document.getElementById("kJGrundumsatz").innerText = "";
    document.getElementById("kcalGesamtumsatz").innerText = "";
    document.getElementById("kJGesamtumsatz").innerText = "";
}

function roundToTwoDecimalPlaces(num) {
    return Math.round(num * 100) / 100;
}