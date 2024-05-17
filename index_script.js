function toggleButtons(activeBtnId, inactiveBtnId) {
    var activeBtn = document.getElementById(activeBtnId);
    var inactiveBtn = document.getElementById(inactiveBtnId);

    // Ativa o botão ativo
    
    activeBtn.classList.add('btn-success'); // Cor "ativada"

    // Desativa o botão inativo
    inactiveBtn.classList.remove('btn-success'); // Cor "ativada"
    inactiveBtn.classList.add('btn-secondary');

    
}
