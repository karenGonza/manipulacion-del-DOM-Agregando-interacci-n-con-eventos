window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let estadoSecreto = 0;
    let inputTitle = document.querySelector('#titulo');

    function changeEstado(title){
        switch (title) {
            case 's':
                estadoSecreto = 1;
                break
                case 'se':
                    estadoSecreto = 2;
                    break
                    case 'sec':
                        estadoSecreto = 3;
                        break
                        case 'secr':
                        estadoSecreto = 4;
                        break
                        case 'secre':
                        estadoSecreto = 5;
                        break
                        case 'secret':
                        estadoSecreto = 6;
                        break
                        case 'secreto':
                        estadoSecreto = "ok";
                        break
                        default :
                        estadoSecreto = 0
                        break
        }
        return estadoSecreto;
    }


 function colorAlAzar(...colores){ 
     let random = Math.floor((Math.random() * (5-0))+0);
     let colorRandom = colores[random]
     return colorRandom
 }

 titulo.addEventListener('mouseover', () => {
     titulo.style.color = colorAlAzar('red', 'blue', 'orange', 'brown', 'yellow');
 })

 inputTitle.addEventListener('keyup', (e) => {

    setTimeout(function(){
        console.log(changeEstado(e.target.value))
        if(estadoSecreto === 'ok') {
            alert("SECRETO MAGICO")
            estadoSecreto = 0;
            e.target.value = ""
        }
    }, 1200);
 })
}