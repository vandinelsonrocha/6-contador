let num = (document.getElementById('num'))
let pas = (document.getElementById('pas'))

let OK = document.getElementById('ok')
OK.addEventListener('click', ver)

function ver()  {
    let numero = Number(num.value)
    let passo = Number(pas.value)
    document.getElementById('res').innerHTML = `Decidiu contar de ${passo} em ${passo} a partir de ${numero}:`
    document.getElementById('result').innerHTML = `${numero}`
    document.getElementById('result').style.background = 'rgb(203, 231, 229)'
    document.getElementById('result').style.color = 'rgb(192, 86, 86)'
    document.getElementById('result').style.width = '100%'
    document.getElementById('result').style.height = '40px'
    document.getElementById('result').style.lineHeight = '40px'
    document.getElementById('result').style.fontSize = '25px'
    document.getElementById('result').style.textAlign = 'center'
}

let CONTAR = document.getElementById('contar')
CONTAR.addEventListener('click', contagem)

let numero = Number(num.value)
function contagem()  {
    let passo = Number(pas.value)
    numero += passo
    if(passo > 0)  {
        document.getElementById('result').innerHTML = `${numero}`
    }
}

