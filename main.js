$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })
})



$(document).ready(function() {
        // Adiciona a tarefa na lista quando o formulário é submetido
        $("form").submit(function(event) {
        event.preventDefault(); // Previne o recarregamento da página
        var tarefa = $("#textonovo").val();
        $("#lista-tarefas").append("<li>" + tarefa + "</li>");
        // Limpa o campo do formulário
        $("#textonovo").val("");
    });
    
        // Adiciona o efeito no texto ao clicar em um item da lista
        $("#lista-tarefas").on("click", "li", function() {
        $(this).css("text-decoration", "line-through");
        });
});







