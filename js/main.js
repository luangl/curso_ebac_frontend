$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            address: {
                required: true
            },
            mensagem: {
                required: true,
            },
            produtoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            telefone: 'Por favor, insira seu número de telefone',
            cpf: 'Por favor, insira seu CPF',
            cep: 'Por favor, insira seu CEP',
            address: 'Por favor, insira seu endereço completo',
            email: 'Por favor, insira seu email',
            mensagem: 'Por favor, escreva uma mensagem'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-ps button').click(function(){
        const destino = $('#contato');
        const nomeProduto = $(this).parent().find('h3').text()

        $('#produto-interesse').val(nomeProduto);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})