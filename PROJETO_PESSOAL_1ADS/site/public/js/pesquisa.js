const usuarios_votantes = []
const estilo_mais_votado = []

var quantidade_voto = 0;

function computar_voto_usuario(){
    var usuario_voto = {
        Nome: 'Nathan',
        Idade: '23',
        Email:'nathan.teste@teste.com',
        Estilo_escolhido:'Heavy metal',
    }
    
    for(var votante; usuarios_votantes.length; votante++){
        usuarios_votantes.push(usuario_voto);
        votante += 1;
    }

    for(var quantidade_voto; estilo_mais_votado.length; voto_estilo++){
        estilo_mais_votado.push(quantidade_voto);
        quantidade_voto += 1;
    }


    if (option.value == 1) {
        window.alert('Escolha uma opção válida')

    }else{
        window.alert('Voto Computado');
        window.location.assign('../dashboard.html');
    }
    
 }



