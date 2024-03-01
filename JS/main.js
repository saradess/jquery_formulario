$(document).ready(function(){

    $('#telefone').mask('(00)00000-0000',{
        placeholder:'(__)_____-____'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder:'123.456.789-01'
    });

    $('#cep').mask('00000-000', {
        placeholder: '12345-123'
    });

    $('form').validate({
        rules: {
            nomeCompleto: {
                required:true
            },

            email: {
                required:true,
                email:true
            },

            telefone: {
                required: true
            },

            cep: {
                required:true
            },

            endereco: {
                required: true
            },

            cpf: {
                required:true
            }
        },
        messages:{
            nomeCompleto:'Digite o nome completo para contato',
            email: 'Digite seu email',
            telefone: 'Digite seu telefone para contato',
            cpf: 'Digite seu numero de CPF',
            cep: 'Digite o CEP de sua rua',
            endereco: 'Digite o endereço'
        },
        submitHandler:function(form){
            alert('Formulário enviado com sucesso!');
            console.log(form)
        },
        invalidHandler: function(evento, validados){
            let camposIncorretos = validados.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Faltam ${camposIncorretos} campos a serem preenchidos`)
            };
        }

    })
})