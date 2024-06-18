function coditionals2_1() {
    const name1 = "John";
    const name2 = "Meike";

    const alter1 = 22;
    const alter2 = 34;

    const groesse1 = 170;
    const groesse2 = 168;

    if ((alter1 * 5 + groesse1) >= (alter2 * 5 + groesse2)) {
        console.log(name1 + " gewinne mit " + ((alter1 * 5 + groesse1) - (alter2 * 5 + groesse2)));
    }
    else {
        console.log(name2 + " gewinne mit " + ((alter2 * 5 + groesse2) - (alter1 * 5 + groesse1)));
    }
}