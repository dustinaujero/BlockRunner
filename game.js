import Game from './components/game';

document.addEventListener("DOMContentLoaded", () => {
    window.game = new Game();
    window.newGame = (diffSetting) => {
        document.body.removeChild(document.body.children[3]);
        const game = new Game(diffSetting);
        return game;
    }
})