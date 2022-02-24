var StartPlayGameLayer = cc.Layer.extend({
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
        // //Ảnh Intro Game:
        this.boatBattlesStartGameImg = new cc.Sprite(res.BoatBattlesStartGame_jpg);
        this.boatBattlesStartGameImg.attr({
            x: size.width / 2,
            y: size.height / 2 + 100,
            scaleX: 0.5,
            scaleY: 0.5,
        });
        this.addChild(this.boatBattlesStartGameImg, 0);
        //Nút start Game:
        this.btnStartGame = new ccui.Button();
        this.btnStartGame.loadTextures(res.BtnStartGame_png);
        this.btnStartGame.setName("btnStartGame")
        this.btnStartGame.x = size.width / 2;
        this.btnStartGame.y = size.height / 2 - 50;
        this.btnStartGame.scaleX = 0.06;
        this.btnStartGame.scaleY = 0.06;
        this.addChild(this.btnStartGame, 0);
        this.btnStartGame.addTouchEventListener(this.startGame, this);
        return true;
    },
    startGame: function (sender, type) {
        switch (type) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                this.actionsChangeSceneLoadingProcessGame();
                break;
        }
    },
    actionsChangeSceneLoadingProcessGame: function () {
        cc.director.runScene(new LoadingProcessStartGameScene());
    }
});

var StartPlayGameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new StartPlayGameLayer();
        this.addChild(layer);
    }
});

