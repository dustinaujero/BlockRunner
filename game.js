import Game from './components/game';

document.addEventListener("DOMContentLoaded", () => {
    window.game = new Game();
    window.newGame = (diffSetting) => {
        document.body.removeChild(document.body.children[5]);
        const game = new Game(diffSetting, window.innerWidth);
        return game;
    }
})