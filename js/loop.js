
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

