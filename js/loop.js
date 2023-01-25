
// for (let i = 0; i < 10; i++) {
//      console.log('labas' + i);
// }

// let i = 0;
// while (i < 3) {
//     console.log("while " + i);
//     i++;
// }

// Pirma užduotis

for (let i = 0; i < 10; i++) {
    console.log("labas");
}

// Antra užduotis

let num = 0;
while (num < 10) {
    console.log(num);
    num++;
}

// Šešta užduotis

// for (let num6 = 0; num6 < 51; num6++) {
//     if ((num6 % 2)= 0) {
//         console.log(num6);
//     } else {
//         num6
//     }
// }

// let num6 = 0;
// while ((num6 < 51) && (num6 % 2 < 1)) {
//     console.log(num6)
//     num6++;
// }

for (let num6 = 10; num6 < 51; num6++) {
    // console.log(num6);
    if ((num6 % 2) == 0) {
        console.log(num6);
    } else {
        // nespausdinama 
    }
}

// Septinta užduotis

for (let num7 = 10; num7 < 51; num7++) {
    if (((num7 % 10) == 0)) {
        continue;
    } else if ((num7 % 2) == 0) {
         console.log(num7);
    } else {
        // nespausdinama
    }
}

for (let i = 10; i < 50; i++) {
    if (i % 2 == 0) {
        if (i % 10 == 0) {
            continue;
        }
        console.log(i);
    }
}

// for (let a = 1; a <= 15; a++) {
//     let row = "";
//     for (let i = 1; i <= 15; i++) {
//         row += a * i + " ";   
//     }
//     console.log(row);   
// }    

// 3 uzduotis

let augalai = ['Liepa', 'Egle', 'Pusis', 'Berzas', 'Uosis', 'Azuolas', 'Kedras', 'Lazdynas', 'Obelis', 'Kriause'];
console.log(augalai);

// 4 uzduotis

for (let i = 0; i < augalai.length; ) {
    console.log(augalai[i]);
    i++;
}

// 5 uzduotis

for (let i = augalai.length - 1; i >= 0; ) {
    console.log(augalai[i]);
    i--;
}

// 8 uzduotis

let a = 0;
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) { 
        // console.log('Porinis');
        a++;
        // console.log(a);
    } else {
        // console.log('Neporinis');
    }
}
console.log(a);

// 9 uzduotis

let n = 0;
let m = 0;
for (let i = 0; i < augalai.length; i++) {
    if (augalai[i].length > 7) {
        n++;
        // continue; čia gali būt - jis paspartins procesą (naudinga, jei yra didelis duomenų kiekis)
        // console.log('Ilgesnis nei 7 = ', );
    } else if (augalai[i].length < 5) {
        m++;
        // console.log('Trumpesnis nei 5 = ', );
    } else {
        continue;
    }
}
console.log('Ilgesnis nei 7 = ', n++);
console.log('Trumpesnis nei 5 = ', m++);

// Sunkesni
// 1 uzduotis

let row = "";
let m150 = 0;
for (let i = 0; i < 300; i++) {
    if (i <= 275) {
        row += i + ' ';
    } else if (i > 275) {
        row += '[' + i + ']';
    }
    if (i > 150) {
        m150++;
    }
}
console.log(row);   
console.log(m150);

// 2 uzduotis

let row1 = "";
for (let i = 0; i < 3000; i++) {
    if (i % 77 == 0) {
        row1 += i + ', ';
    }
}
let replace = row1.slice (0, -2) + '.';
console.log(replace);

//  3 uzduotis

for (let a = 0; a < 10; a++) {
    let row = "";
    for (let i = 0; i < 10; i++) {
        row += "*";   
    }
    console.log(row);   
} 

// for (let i = 0; i <=10; i++) {
//     let row = "*";
//     console.log(row);
// }

// 8 užduotis is JS2

let n8 = 0;
let origin = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
const orig = origin.split(' ');
console.log(orig);
for (let i = 0; i < orig.length; i++) {
    if (orig[i].length <= 5) {
        n8++;
    }
}

console.log("Trumpesni arba lygus 5 = " + n8);

// 4 uzduotis

for (let a = 0; a < 10; a++) {
    let row = "";
    for (let i = 0; i < 10; i++) {
        if (a == i || a == 9-i) {
            row += "X";
        } else {
        row += "*";
        }
    }
    console.log(row);
}

// 5 uzduotis

// let s = 0;
// let h = 0;
// let i = 0;
// do {
//     i = Math.round(Math.random());
//     if (i = 0) {
//         break
//     }
// }
// while (true);

// console.log("Skaicius iskrito " + s + " karta(u).");
// console.log("Herbas iskrito " + h + " karta(u).");


// while(true){
//     let rndNum = Math.round(Math.round(Math.random()));
//     console.log(rndNum);
//     if(!rndNum){
//         break;
//     }
// }

let sA = 0;
let hA = 0;
while(true) {
    let rndNum = Math.round(Math.round(Math.random()));
    if(rndNum == 1){
        sA++;
    } else {
        hA++;
        break;
    }
}
console.log("S = " + sA);
console.log( "H = " + hA);

let sB = 0;
let hB = 0;
while(true){
    let rndNum = Math.round(Math.round(Math.random()));
    // console.log(rndNum);
    if(rndNum == 1){
        sB++;
    } else {
        hB++;
    }
    if (hB == 3) {
        break;
    }
}
console.log("S = " + sB);
console.log( "H = " + hB);

let sC = 0;
let hC = 0;
while(true){
    let rndNum = Math.round(Math.round(Math.random()));
    // console.log(rndNum);
    if(rndNum == 0){
        hC++;
    } else {
        hC = 0;
    }
    if (hC == 3) {
        break;
    }
    if (rndNum == 1) {
        sC++;
    }
}
console.log("S = " + sC);
console.log( "H = " + hC);

// 6 uzduotis

let numK = 0;
let numP = 0;
let KazysPr = 0;
let PetrasPr = 0;
let KazysMin = 5;
let KazysMax = 25;
let PetrasMin = 10;
let PetrasMax = 20;
let row6 = "";
while (true) {
    let numK = KazysMin + Math.round((Math.random()) * (KazysMax - KazysMin));
    let numP = PetrasMin + Math.round((Math.random()) * (PetrasMax - PetrasMin));
    KazysPr+=numK;
    PetrasPr+=numP;
    row6 += "Kazio taskai: " + numK + "; Petro taskai: " + numP;
    if (numK > numP) {
            row6 += ". Partija laimejo Kazys. ";
        } else if (numP > numK) {
            row6 += ". Partija laimejo Petras. ";
        } else {
            row6 += ". Partijos rezultatas - lygiosios. ";
        };
    if ((KazysPr >= 222) || (PetrasPr >= 222)) {
        break;
    }
}
console.log(row6);
if (KazysPr > PetrasPr) {
    console.log("Zaidima laimejo: Kazys - " + KazysPr + " taskai(u)");
} else  if (KazysPr < PetrasPr) {
    console.log("Zaidima laimejo: Petras - " + PetrasPr + " taskai(u)");
} else {
    console.log("Zaidimo rezultatas - lygiosios. Abu zaidejai surinko " + KazysPr + " taskus");
}
console.log(KazysPr);
console.log(PetrasPr);

// 8 uzduotis

console.log("-----8a-----");
let viniesIlgis = 85;

for (let i = 0; i < 5; i++) {
    let smugis = 0;
    let ikalimas = 0;
    let skaicius = 0;
    let rKalimasmin = 5;
    let rKalimasmax = 20;
    while (ikalimas < viniesIlgis) {
        smugis = rKalimasmin + Math.round((Math.random()) * (rKalimasmax - rKalimasmin));
        ikalimas += smugis;
        skaicius ++;
    }
    console.log((i+1) + "-oji vinis ikalta per " + skaicius + " smugius. Ikalimo gylis: " + ikalimas);
}

console.log("-----8b-----");

for (let i = 0; i < 5; i++) {
    let smugis = 0;
    let ikalimas = 0;
    let skaicius = 0;
    let rKalimasmin = 20;
    let rKalimasmax = 30;
    while (ikalimas < viniesIlgis) {
        if (Math.round(Math.random())) {
            smugis = rKalimasmin + Math.round((Math.random()) * (rKalimasmax - rKalimasmin));
            ikalimas += smugis;
        }
        skaicius ++;
    }
    console.log((i+1) + "-oji vinis ikalta per " + skaicius + " smugius. Ikalimo gylis: " + ikalimas);
}
