import Game from './components/game';
import Game2 from './components/gameTwo';

document.addEventListener("DOMContentLoaded", () => {
    window.game = new Game();
    window.newGame = (diffSetting, twoPlayer) => {
        if (twoPlayer) {
            document.body.removeChild(document.body.children[7]);
            const game = new Game2(diffSetting);
            return game;
        }
        else {
            document.body.removeChild(document.body.children[7]);
            const game = new Game(diffSetting);
            return game;
        }
    }
})