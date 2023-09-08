$(document).ready(function () {
    let selectedElement = null;

    // Função para selecionar um elemento e mudar sua cor
    function selectElement(element) {
        if (selectedElement) {
            selectedElement.removeClass('selected');
        }
        selectedElement = element;
        selectedElement.addClass('selected');
    }

    // Evento de clique para selecionar um elemento
    $('#tree').on('click', '.node', function () {
        selectElement($(this));
    });

    // Evento de clique para remover o elemento selecionado
    $('#remove').click(function () {
        if (selectedElement) {
            selectedElement.remove();
            selectedElement = null;
        }
    });

    // Evento de clique para mudar as propriedades do elemento selecionado
    $('#change').click(function () {
        if (selectedElement) {
            const newText = prompt('Digite o novo texto:');
            if (newText) {
                selectedElement.text(newText);
            }
        }
    });

    // Evento de clique para inserir um novo elemento como filho do elemento selecionado
    $('#addChild').click(function () {
        if (selectedElement) {
            const newText = prompt('Digite o texto do novo filho:');
            if (newText) {
                const newChild = $('<div class="node">' + newText + '</div>');
                selectedElement.append(newChild);
            }
        }
    });
});
