const usuarios_votantes = []
const estilo_mais_votado = []

var quantidade_voto = 0;

function computar_voto_usuario(){
    var usuario_voto = {
        Nome: '',
        Idade: '',
        Email:'',
        Estilo_escolhido:'',
    }
    
    for(var votante; usuarios_votantes.length; votante++){
        usuarios_votantes.push(usuario_voto);
        votante += 1;
    }

    for(var quantidade_voto; estilo_mais_votado.length; voto_estilo++){
        estilo_mais_votado.push(quantidade_voto);
        quantidade_voto += 1;
    }


    if (Option.value == 0) {
        window.alert('Escolha uma opção válida')

    }else{
        window.alert('Voto Computado');
        window.location.replace('./dashboard.html');
    }
   
 }



