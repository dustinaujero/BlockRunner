class Controls {
    constructor(player) {
        this.keyboard = {};
        this.keyDown = this.keyDown.bind(this);
        this.keyUp = this.keyUp.bind(this);
        this.input = this.input.bind(this);
        window.addEventListener('keydown', this.keyDown);
        window.addEventListener('keyup', this.keyUp);

        this.player = player;
    }

    keyDown(e) {
        this.keyboard[e.keyCode] = true;
    }
    keyUp(e) {
        this.keyboard[e.keyCode] = false;
    }
    input(code) {
        if (player.position.y < -3) {
            player.position.y = -2.3;
        }
        if(keyboard[37]) { //LEFT
            if(player.position.x >= -6) {
                playerDX -= 0.025;
            }
        }
        if (keyboard[39]) { //RIGHT
            if (player.position.x <= 6) {
                playerDX += 0.025;
            }
        }
        if (keyboard[38]) { //UP
            if (player.position.y <= 0) {
                player.position.y += 0.3;
                playerDY = 0.09;
            }
        }
        if (keyboard[40]) { //DOWN
            if (player.position.y >= -2.5) {
            }
        }
    }
}