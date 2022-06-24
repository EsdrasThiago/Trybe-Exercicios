//5

let array = [2, 3, 2, 5, 8, 2, 3];
function mode(array)
{
    let mapeador = {};
    let numero = array[0], contador = 1;
    for(let i = 0; i < array.length; i++)
    {
        let num = array[i];
        if(mapeador[num] == null)
            mapeador[num] = 1;
        else
            mapeador[num]++;  
        if(mapeador[num] > contador)
        {
            numero = num;
            contador = mapeador[num];
        }
    }
    return numero;
}

console.log(mode(array))