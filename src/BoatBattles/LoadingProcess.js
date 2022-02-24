
var LoadingProcessStartGameLayer = cc.Layer.extend({
    sprite: null,
    count: 0,
    loadingBar: null,
    ctor: function () {
        this._super();
        const size = cc.winSize;
        //Thêm ảnh nền giới thiệu game:
        this.backGroundLoadingProcess = new cc.Sprite(res.BackGroundIntroGame_png);
        this.backGroundLoadingProcess.attr({
            x: size.width / 2,
            y: size.height / 2,
            scaleX: scaleBackgroundLoadingProcess,
            scaleY: scaleBackgroundLoadingProcess
        });
        this.addChild(this.backGroundLoadingProcess, 0);
        //Thêm ảnh Intro loading Process:
        this.backGroundLoadingProcess = new cc.Sprite(res.IntroProcessImg_png);
        this.backGroundLoadingProcess.attr({
            x: size.width / 2,
            y: size.height / 2 + 100,
            scaleX: scaleBackgroundLoadingProcess,
            scaleY: scaleBackgroundLoadingProcess
        });
        this.addChild(this.backGroundLoadingProcess, 0);
        //Thêm Loading Process:
        this.loadingBar = new ccui.LoadingBar();
        this.loadingBar.setName("LoadingBar");
        this.loadingBar.loadTexture(res.LoadingProcess_png);
        this.loadingBar.setPercent(0);
        this.loadingBar.x = size.width / 2;
        this.loadingBar.y = size.height / 2 - 20;
        this.addChild(this.loadingBar);
        this.scheduleUpdate();
        return true;
    },
    update: function () {
        this.count++;
        if (this.count > 100) {
            this.count = 0;
            this.actionsChangeSceneStartPlayGame();
        }
        this.loadingBar.setPercent(this.count);
    },
    //Chuyển cảnh lựa chọn bắt đầu chơi game:
    actionsChangeSceneStartPlayGame: function () {
        cc.director.runScene(new IntroStartGameScene());
    }
});

var LoadingProcessStartGameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        const loadingProcess = new LoadingProcessStartGameLayer();
        this.addChild(loadingProcess);
    }
});


