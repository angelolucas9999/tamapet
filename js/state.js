// [IA CONTEXTO] Gerenciamento de estado do jogo Tamapet
// Responsável por salvar e carregar o estado do jogo no localStorage

let gameState = {
    energy: 100,
    isSleeping: false,
    lastUpdate: Date.now(),
    // Adicione mais estados conforme necessário
};

// Carrega o estado salvo do localStorage
function loadGameState() {
    try {
        const savedState = localStorage.getItem('tamapet_save');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            // Mescla o estado salvo com os valores padrão
            gameState = { ...gameState, ...parsedState };
            return true;
        }
    } catch (error) {
        console.error('Erro ao carregar o jogo:', error);
    }
    return false;
}

// Salva o estado atual no localStorage
function saveGameState() {
    try {
        localStorage.setItem('tamapet_save', JSON.stringify(gameState));
        return true;
    } catch (error) {
        console.error('Erro ao salvar o jogo:', error);
        return false;
    }
}

// Limpa o estado salvo
function clearSavedGame() {
    try {
        localStorage.removeItem('tamapet_save');
        return true;
    } catch (error) {
        console.error('Erro ao limpar os dados salvos:', error);
        return false;
    }
}

// Exporta as funções e o estado para uso em outros arquivos
window.gameState = gameState;
window.saveGameState = saveGameState;
window.loadGameState = loadGameState;
window.clearSavedGame = clearSavedGame;
