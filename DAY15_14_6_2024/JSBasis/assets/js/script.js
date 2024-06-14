function console1_1() {
    let a = 12;
    let b = a * 3;
    console.log(b);

    let c = "Hello World"
    let firstName = "Anton";
    let age = 28;
    let job = "Trainer"
    let married = true;
    console.log(c, firstName, age, job, "married: " + married)
    return c + firstName + age + job + "married: " + married;
}

function getEinkommen() {
    let salary = document.getElementById('salaryInput').value;
    console.log(salary);
    window.alert(console1_1() + "salary is " + salary)
    return salary;
}

function infor1_3() {
    let i = 1;
    let lastName = "Johnson";
    let j = "2";
    let status = true;
    let hello = "hello"
    console.log(typeof i, typeof lastName, typeof j, typeof status, typeof hello);
    window.alert("typeof i, typeof lastName, typeof j, typeof status, typeof hello" + " " + typeof i + " " + typeof lastName + " " + typeof j + " " + typeof status + " " + typeof hello);
}

function Output1_4_1() {
    window.alert("Hallo Welt");
}
function Output1_4_2() {
    let nameOrginal = window.prompt("Bitte geben Sie Ihren Namen ein.")
    let name = "Sie heißen " + nameOrginal;

    console.log(name);
    window.alert(name);

}

function Output1_4_3() {
    window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
}
function Output1_4_4() {
    window.confirm("Stimmen Sie meiner Meinung zu?");
    let result = window.confirm("Stimmen Sie meiner Meinung zu?");
}
function Output1_4_5() {
    let alterOriginal = window.prompt("Gib mir bitte dein Alter:")
    let alter = "Sie sind " + alterOriginal;
    console.log(alter);
    window.alert(alter);

}
function Output1_4_6() {
    let buloomValue = window.confirm("let b = 5; let a = b - 5 - 3;");
    let b = 5;
    let a = b - 5 - 3;

    if (buloomValue) {
        window.alert(a);
    }
}

function Output1_4_7() {
    let mann = "Robert Wadlow ist der größte Mann der Welt : "; let grosse = "2,72m";
    window.confirm(mann + grosse);
}

function intro_Level_1_12() {
    let score = 5 + 5 * 10;
    console.log('Ergebnis: ' + score);

    let score2 = (5 + 5) * 10;
    console.log('Ergebnis: ' + score2);

    let score3 = 0;
    score3 = score3 + 10;
    console.log('Ergebnis: ' + score3);

    score3 += 10;
    console.log('Ergebnis: ' + score3);

    let zahl = 1;
    zahl = zahl + 1;
    zahl += 1;
    zahl++;
    console.log('increment: ' + zahl);
    zahl--;
    console.log('dekrement: ' + zahl);

    window.alert("result check console")
}