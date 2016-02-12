var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SlotMachine SCENE
var scenes;
(function (scenes) {
    var SlotMachine = (function (_super) {
        __extends(SlotMachine, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SlotMachine() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SlotMachine.prototype.start = function () {
            // add the LEFT_CAVE button to the MENU scene
            this._backgroundImage = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._backgroundImage);
            this._spinButton = new objects.Button("SpinButton", 402, 382, false);
            this.addChild(this._spinButton);
            this._spinButton.on("click", this._spinButtonClick, this);
            this._bet1Button = new objects.Button("Bet1Button", 168, 382, false);
            this.addChild(this._bet1Button);
            this._bet1Button.on("click", this._bet1ButtonClick, this);
            this._bet10Button = new objects.Button("Bet10Button", 240, 382, false);
            this.addChild(this._bet10Button);
            this._bet10Button.on("click", this._bet10ButtonClick, this);
            this._bet100Button = new objects.Button("Bet100Button", 312, 382, false);
            this.addChild(this._bet100Button);
            this._bet100Button.on("click", this._bet100ButtonClick, this);
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SlotMachine.prototype.update = function () {
        };
        SlotMachine.prototype._spinButtonClick = function (event) {
            console.log("Spin");
        };
        SlotMachine.prototype._bet1ButtonClick = function (event) {
            console.log("Bet 1 Coin");
        };
        SlotMachine.prototype._bet10ButtonClick = function (event) {
            console.log("Bet 10 Coin");
        };
        SlotMachine.prototype._bet100ButtonClick = function (event) {
            console.log("Bet 100 Coin");
        };
        return SlotMachine;
    })(objects.Scene);
    scenes.SlotMachine = SlotMachine;
})(scenes || (scenes = {}));
//# sourceMappingURL=slotmachine.js.map