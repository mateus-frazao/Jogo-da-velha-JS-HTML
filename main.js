var quadro = document.querySelectorAll('.container div')
var jogador = 'X'
var fimdejogo = false

function func(x)
{
    if(quadro[x].innerText == '' && !fimdejogo)
    {
        quadro[x].innerText = jogador
        
        for(let i = 0; i < 7; i += 3)
        {
            if(quadro[i].innerText + quadro[i+1].innerText + quadro[i+2].innerText == jogador + jogador + jogador)
            {
                fimdejogo = true
                i = 7
            }
        }
        for(let i = 0; i < 3; i++)
        {
            if(quadro[i].innerText + quadro[i+3].innerText + quadro[i+6].innerText == jogador + jogador + jogador)
            {
                fimdejogo = true
                i = 3
            }
        }
        if(quadro[0].innerText + quadro[4].innerText + quadro[8].innerText == jogador + jogador + jogador) fimdejogo = true
        if(quadro[2].innerText + quadro[4].innerText + quadro[6].innerText == jogador + jogador + jogador) fimdejogo = true
    }
    if(fimdejogo)
    {
        document.querySelector('h1').innerText = 'O jogador '+jogador+' venceu!'
    }
    else if(jogador == 'X')jogador = 'O'
    else jogador = 'X'
}