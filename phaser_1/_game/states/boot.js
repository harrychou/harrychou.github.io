
'use strict';

function Boot() {
}

Boot.prototype = {
    preload: function () {
        this.load.image('preloader', 'assets/preloader.gif');
    },
    create: function () {
        // allow only one input pointer, for most games
        this.game.input.maxPointers = 1;
        // start from preload state
        this.game.state.start('preload');
    }
};

module.exports = Boot;
