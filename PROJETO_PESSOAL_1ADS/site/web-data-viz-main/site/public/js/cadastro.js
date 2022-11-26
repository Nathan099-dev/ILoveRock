function cadastrar(){
    var nome_usuario = input_nome.value;
    var idade_usuario = input_idade.value;
    var email_usuario = input_email.value;
    var senha_usuario = input_senha.value;
    var confirmar_senha = input_confirma_senha.value;

    if (nome_usuario == '') {
        alert('Campo  nome, inválido');
       
        
    }else if (idade_usuario == '') {
        alert('Campo idade, inválido');
       

    }else if (email_usuario == '') {
        alert('Campo email, inválido');
       

    }else if (email_usuario.indexOf('@').value == -1 || email_usuario.indexOf('.').value == -1) {
        alert('Campo email, inválido');

    }else if (senha_usuario == '') {
        alert('Campo senha, inválido');
        

    }else if (confirmar_senha == '') {
        alert('Campo de confirmação de senha, inválido')

        
    }else if (confirmar_senha != senha_usuario) {
        alert('Suas senhas não coincidem');

    }

}