var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Menu SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            // add the LEFT_CAVE button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 80, true);
            this.addChild(this._startButton);
            // LEFT_CAVE Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            this._introLabel = new objects.Label("SLOT MACHINE", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this._setupBackground("WhiteBackground");
            this.addChild(this._introLabel);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // start Button click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Switch to the start Scene
            this._fadeOut(500, function () {
                // Switch to the LEFT_CAVE Scene
                scene = config.Scene.SLOT_MACHINE;
                changeScene();
            });
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map