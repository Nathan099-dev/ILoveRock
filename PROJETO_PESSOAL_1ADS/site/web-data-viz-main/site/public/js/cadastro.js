function cadastrar(){
    const nome = input_nome.value;
    const idade = input_idade.value;
    const email = input_email.value;
    const senha = input_senha.value;
    const confirmar_senha = input_confirmar_senha.value;

    if (input_nome == '') {
        window.alert('Campo inválido');
        nome.style.borderColor = 'red';

    }else if (input_idade == '') {
        window.alert('Campo inválido');
        nome.style.borderColor = 'red';

    }else if(input_email){
        window.alert('Campo inválido');
        nome.style.borderColor = 'red';

    }else if (input_email.indexOf('@').value == -1 || input_email.indexOf('.').value == -1) {
        window.alert('email inválido');
        
    }
}