var IntroStartGameLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        this.startMusicBackground();
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
        //Ảnh Intro Game:
        this.boatBattlesStartGameImg = new cc.Sprite(res.BoatBattlesStartGame_jpg);
        this.boatBattlesStartGameImg.attr({
            x: size.width / 2,
            y: size.height,
            scaleX: 0.5,
            scaleY: 0.5,
        });
        this.addChild(this.boatBattlesStartGameImg, 0);
        const actionsImgIntro = cc.moveBy(3, cc.p(0, - size.height / 2 + 150));
        this.boatBattlesStartGameImg.runAction(actionsImgIntro);
        //Ảnh tàu ngầm chạy:
        this.warShip = new cc.Sprite(res.BoatBattlesStartGame_jpg);
        this.warShip.attr({
            x: -400,
            y: 390,
            scaleX: 0.5,
            scaleY: 0.5,
        });
        this.addChild(this.warShip, 0);
        const actionsWarShip1 = cc.moveBy(1, cc.p(size.width + 900, 0));
        const actionsWarShip2 = cc.moveBy(1, cc.p(- size.width - 900, 0));
        this.warShip.runAction(
            cc.repeatForever(cc.sequence(actionsWarShip1, actionsWarShip2))
        );
        //Ảnh thuyền chạy:
        this.submarine = new cc.Sprite(res.BoatBattlesStartGame_jpg);
        this.submarine.attr({
            x: size.width + 500,
            y: 200,
            scaleX: 0.5,
            scaleY: 0.5,
        });
        this.addChild(this.submarine, 0);
        const actionsSubmarine1 = cc.moveBy(1, cc.p(-size.width - 900, 0));
        const actionsSubmarine2 = cc.moveBy(1, cc.p(size.width + 900, 0));
        this.submarine.runAction(
            cc.repeatForever(cc.sequence(actionsSubmarine1, actionsSubmarine2))
        );
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
    //Nút start lựa chọn người chơi:
    startGame: function (sender, type) {
        switch (type) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                this.actionsChangeSceneChooseOpponent();
                break;
        }
    },
    //Nút xử lý âm nhạc:
    handleMusic: function (sender, type) {
        switch (type) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                if (this.playSound) {
                    this.stopMusic();
                    this.playSound = false;
                } else {
                    cc.audioEngine.playMusic(res.MusicBackgroundAppIntroStartGame_mp3);
                    this.playSound = true;
                }
                break;
        }
    },
    //Nút xử lý âm thanh click chuột:
    handleSoundClickMouse: function () {

    },
    //Mở nhạc nền:
    startMusicBackground: function () {
        cc.audioEngine.playMusic(res.MusicBackgroundAppIntroStartGame_mp3);
    },
    //Tắt nhạc nền:
    stopMusic: function () {
        cc.audioEngine.stopMusic();
    },
    //Chuyển cảnh lựa chọn người chơi cùng: 
    actionsChangeSceneChooseOpponent: function () {
        this.stopMusic();
        cc.director.runScene(new ChooseOpponentScene());
    }
});

var IntroStartGameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new IntroStartGameLayer();
        this.addChild(layer);
    }
});

