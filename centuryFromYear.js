function centuryFromYear(year) {
    residuo = calcularResiduo(year);
    siglos = calcularSiglos(year);
    
    if(residuo > 0){
        resultado = siglos + 1;
        return resultado;
    }else{
        resultado = siglos;
        return resultado;
    }
}

function calcularResiduo(cantidad){
    //console.log(cantidad%100);
    return (cantidad%100);
}

function calcularSiglos(años){
    //console.log(Math.trunc(años/100));
    return Math.trunc(años/100);
}

//test1
console.log(centuryFromYear(1905));
//test2
console.log(centuryFromYear(1700));
//test3
console.log(centuryFromYear(1988));
//test4
console.log(centuryFromYear(2000));
//test5
console.log(centuryFromYear(2001));
//test6
console.log(centuryFromYear(200));
//test7
console.log(centuryFromYear(374));
//test8
console.log(centuryFromYear(45));
//test9
console.log(centuryFromYear(8));
