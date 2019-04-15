import Game from './components/game';

document.addEventListener("DOMContentLoaded", () => {
    window.game = new Game();
    window.newGame = () => {
        document.body.removeChild(document.body.children[4]);
        const game = new Game();
        return game;
    }
})