var ChooseOpponentLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        var size = cc.winSize;
        //Ảnh background start Game:
        this.backgroundStartGame = new cc.Sprite(res.StartGameBackground_jpg);
        this.backgroundStartGame.setScaleX(3);
        this.backgroundStartGame.setScaleY(2);
        this.backgroundStartGame.attr({
            x: size.width / 2,
            y: size.height / 2,
        });
        this.addChild(this.backgroundStartGame, 0);
    }
});

var ChooseOpponentScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new ChooseOpponentLayer();
        this.addChild(layer);
    }
});

