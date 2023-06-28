// function sum (op1, op2=0)
// {
//     let resultado = op1 + op2
//     return resultado;
// }

function subs (op1, op2=0)
{
    let resultado = op1 - op2
    return resultado;
}

function mult (op1, op2=0)
{
    let resultado = op1 * op2
    return resultado;
}

function div (op1, op2=0)
{
    let resultado = op1 / op2
    return resultado;
}

function cuadrado (n)
{
    let resultado = Math.sqrt(n);
    return resultado
}

module.exports= {sum, subs, mult, div, cuadrado}