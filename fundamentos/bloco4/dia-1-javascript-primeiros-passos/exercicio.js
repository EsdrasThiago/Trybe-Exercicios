//1

let a = 2
let b = 5
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//2

const c = 5
const d = 2

if (d > c) {
    console.log(d)
} else if (c > d) {
    console.log(c)
}

//3

const e = 8

if (d > c && d > e) {
    console.log(d)
} else if (c > d && c > e) {
    console.log(c)
} else if (e > c && e > d) {
    console.log(e)
}

//4

const f = -1

if (f == 1) {
    console.log("positive")
} else if (f == -1) {
    console.log("negative")
} else {
    console.log("zero")
}

//5

const t1 = 120
const t2 = 20
const t3 = 50

if (t1 + t2 + t3 == 180) {
    console.log(true)
} else if (t1 + t2 + t3 != 180) {
    console.log(false)
} //else if (t1 + t2 +t3 <= -1) {
   //console.log("erro")
//}

//6

let peca = "BISPO";
let result = peca.toLocaleLowerCase();

if (result == "bispo") {
    console.log("diagonals")
} else {
    console.log("erro")
}

//7

let porcentagem = 40

if (porcentagem >= 90) {
    console.log("A")
} else if (porcentagem >= 80 && porcentagem < 90) {
    console.log("B")
} else if (porcentagem >= 70 && porcentagem <80) {
    console.log("C")
} else if (porcentagem >= 60 && porcentagem <70) {
    console.log("D")
} else if (porcentagem >= 50 && porcentagem <60) {
    console.log("E")
} else if (porcentagem < 50) {
    console.log("F")
}

//8

const par1 = 2
const par2 = 4
const impar3 = 3

if (par1 % 2 == 0 || par2 % 2 == 0 || impar3 % 2 == 0) {
    console.log("true")
} else {
    console.log("false")
}

//9

if (par1 % 2 != 0 || par2 % 2 != 0 || impar3 % 2 !=0) {
    console.log("true")
} else {
    console.log("false")
}

//10

//11

let salario = 3500.11

//INSS
if (salario > 5189.82) {
    console.log(salario - 570.88)
} else if (salario >= 2594.93 && salario <= 5189.82) {
    console.log(salario - 330.00)
} else if (salario >= 1556.95 && salario <= 2594.92) {
    console.log(salario - 180.00)
} else if (salario <= 1556.94) {
    console.log(salario - 124.56)
}

