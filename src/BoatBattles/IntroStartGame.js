var IntroStartGameLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        this.musicBackground();
        this.playSound = true;
        this.soundClickMouse = false;
        var size = cc.winSize;
        //Ảnh background start Game:
        this.backgroundStartGame = new cc.Sprite(res.BackgroundIntroStartGame_jpg);
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
            y: size.height,
            scaleX: 0.5,
            scaleY: 0.5,
        });
        this.addChild(this.boatBattlesStartGameImg, 0);
        const runBackGround = cc.moveBy(3, cc.p(0, - size.height / 2 + 150));
        this.boatBattlesStartGameImg.runAction(runBackGround);
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
        //Nút bật tắt âm nhạc:
        this.btnSound = new ccui.Button();
        this.btnSound.loadTextures(res.BtnStartGame_png);
        this.btnSound.setName("btnStartGame")
        this.btnSound.x = 300;
        this.btnSound.y = 200;
        this.btnSound.scaleX = 0.06;
        this.btnSound.scaleY = 0.06;
        this.addChild(this.btnSound, 0);
        this.btnSound.addTouchEventListener(this.handleMusic, this);
        //Nút bật tắt tiếng click chuột:
        this.btnSoundClickMouse = new ccui.Button();
        this.btnSoundClickMouse.loadTextures(res.BtnStartGame_png);
        this.btnSoundClickMouse.setName("btnStartGame")
        this.btnSoundClickMouse.x = 665;
        this.btnSoundClickMouse.y = 200;
        this.btnSoundClickMouse.scaleX = 0.06;
        this.btnSoundClickMouse.scaleY = 0.06;
        this.addChild(this.btnSoundClickMouse, 0);
        this.btnSoundClickMouse.addTouchEventListener(this.handleMusic, this);
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
    handleMusic: function (sender, type) {
        switch (type) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                console.log("This", this);
                if (this.playSound) {
                    cc.audioEngine.stopMusic();
                    this.playSound = false;
                } else {
                    cc.audioEngine.playMusic(res.MusicBackgroundAppIntroStartGame_mp3);
                    this.playSound = true;
                }
                break;
        }
    },
    handleSoundClickMouse : function(){
        
    },
    actionsChangeSceneLoadingProcessGame: function () {
        cc.director.runScene(new LoadingProcessStartGameScene());
    },
    musicBackground: function () {
        cc.audioEngine.playMusic(res.MusicBackgroundAppIntroStartGame_mp3);
    }
});

var IntroStartGameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new IntroStartGameLayer();
        this.addChild(layer);
    }
});

