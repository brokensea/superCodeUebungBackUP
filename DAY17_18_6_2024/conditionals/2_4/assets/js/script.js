function coditionals2_4(numer1, numer2) {
    if (numer1 != numer2) {
        console.log(numer1 + numer2);
        return numer1 + numer2
    } else {
        console.log("Gleiche Zahlen");
        window.alert("Gleiche Zahlen");
    }

}
function run() {
    coditionals2_4(3, 4);
    // coditionals2_4(5, 5);
}