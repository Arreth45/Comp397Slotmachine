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
            //results
            this._blanks = 0;
            this._stormtroopers = 0;
            this._lightsabers = 0;
            this._falcons = 0;
            this._xwings = 0;
            this._ties = 0;
            this._deaths = 0;
            this._rebels = 0;
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SlotMachine.prototype.start = function () {
            this._resetAll();
            // add the Backgroung Image to the MENU scene
            this._backgroundImage = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._backgroundImage);
            //add Bet 1 button to the scene
            this._bet1Button = new objects.Button("Bet1Button", 168, 382, false);
            this.addChild(this._bet1Button);
            this._bet1Button.on("click", this._bet1ButtonClick, this);
            //add Bet 10 button to the scene
            this._bet10Button = new objects.Button("Bet10Button", 240, 382, false);
            this.addChild(this._bet10Button);
            this._bet10Button.on("click", this._bet10ButtonClick, this);
            //add Bet 100 button to the scene
            this._bet100Button = new objects.Button("Bet100Button", 312, 382, false);
            this.addChild(this._bet100Button);
            this._bet100Button.on("click", this._bet100ButtonClick, this);
            //add spin button to the scene
            this._spinButton = new objects.Button("SpinButton", 402, 382, false);
            this.addChild(this._spinButton);
            this._spinButton.on("click", this._spinButtonClick, this);
            // Initialize Array of Bitmaps 
            this._initializeBitmapArray();
            // add JackPot Text to the scene
            this._jackpotText = new objects.Label(this._jackpot.toString(), "14px Consolas", "#ff0000", 353, 107, false);
            this._jackpotText.textAlign = "right";
            this.addChild(this._jackpotText);
            // add Credits Text to the scene
            this._creditsText = new objects.Label(this._playerMoney.toString(), "14px Consolas", "#ff0000", 254, 303, false);
            this._creditsText.textAlign = "right";
            this.addChild(this._creditsText);
            // add Bet Text to the scene
            this._betText = new objects.Label(this._playerBet.toString(), "14px Consolas", "#ff0000", 351, 303, false);
            this._betText.textAlign = "right";
            this.addChild(this._betText);
            // add Result Text to the scene
            this._resultText = new objects.Label(this._winnings.toString(), "14px Consolas", "#ff0000", 450, 303, false);
            this._resultText.textAlign = "right";
            this.addChild(this._resultText);
            // Setup Background
            this._setupBackground("WhiteBackground");
            // FadeIn
            this._fadeIn(500);
            stage.addChild(this);
        };
        // INTRO Scene updates here
        SlotMachine.prototype.update = function () {
            if (this._playerMoney == 0 && this._playerBet == 0) {
                this._fadeOut(500, function () {
                    // Switch to the Game Over Scene
                    scene = config.Scene.GAME_OVER;
                    changeScene();
                });
            }
        };
        SlotMachine.prototype._checkRange = function (value, lowerBounds, upperBounds) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        };
        SlotMachine.prototype._resetTally = function () {
            this._stormtroopers = 0;
            this._lightsabers = 0;
            this._falcons = 0;
            this._rebels = 0;
            this._deaths = 0;
            this._xwings = 0;
            this._ties = 0;
            this._blanks = 0;
        };
        SlotMachine.prototype._resetAll = function () {
            this._playerMoney = 1000;
            this._winnings = 0;
            this._jackpot = 5000;
            this._playerBet = 0;
        };
        SlotMachine.prototype._checkJackPot = function () {
            /* compare two random values */
            var jackPotTry = Math.floor(Math.random() * 51 + 1);
            var jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin) {
                alert("You Won the $" + this._jackpot + " Jackpot!!");
                this._playerMoney += this._jackpot;
                this._jackpot = 1000;
            }
        };
        /* When this function is called it determines the betLine results.
        e.g. Bar - Orange - Banana */
        SlotMachine.prototype._spinReels = function () {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];
            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 27):
                        betLine[spin] = "blank";
                        this._blanks++;
                        break;
                    case this._checkRange(outCome[spin], 28, 37):
                        betLine[spin] = "Stormtrooper";
                        this._stormtroopers++;
                        break;
                    case this._checkRange(outCome[spin], 38, 46):
                        betLine[spin] = "Lightsaber";
                        this._lightsabers++;
                        break;
                    case this._checkRange(outCome[spin], 47, 54):
                        betLine[spin] = "Falcon";
                        this._falcons++;
                        break;
                    case this._checkRange(outCome[spin], 55, 59):
                        betLine[spin] = "Xwing";
                        this._xwings++;
                        break;
                    case this._checkRange(outCome[spin], 60, 62):
                        betLine[spin] = "Tie";
                        this._ties++;
                        break;
                    case this._checkRange(outCome[spin], 63, 64):
                        betLine[spin] = "Death";
                        this._deaths++;
                        break;
                    case this._checkRange(outCome[spin], 65, 65):
                        betLine[spin] = "Rebel";
                        this._rebels++;
                        break;
                }
            }
            return betLine;
        };
        SlotMachine.prototype._determineWinnings = function () {
            if (this._blanks == 0) {
                if (this._stormtroopers == 3) {
                    this._winnings = this._playerBet * 10;
                }
                else if (this._lightsabers == 3) {
                    this._winnings = this._playerBet * 20;
                }
                else if (this._falcons == 3) {
                    this._winnings = this._playerBet * 30;
                }
                else if (this._xwings == 3) {
                    this._winnings = this._playerBet * 40;
                }
                else if (this._ties == 3) {
                    this._winnings = this._playerBet * 50;
                }
                else if (this._deaths == 3) {
                    this._winnings = this._playerBet * 75;
                }
                else if (this._rebels == 3) {
                    this._winnings = this._playerBet * 100;
                }
                else if (this._stormtroopers == 2) {
                    this._winnings = this._playerBet * 2;
                }
                else if (this._lightsabers == 2) {
                    this._winnings = this._playerBet * 2;
                }
                else if (this._falcons == 2) {
                    this._winnings = this._playerBet * 3;
                }
                else if (this._xwings == 2) {
                    this._winnings = this._playerBet * 4;
                }
                else if (this._ties == 2) {
                    this._winnings = this._playerBet * 5;
                }
                else if (this._deaths == 2) {
                    this._winnings = this._playerBet * 10;
                }
                else if (this._rebels == 2) {
                    this._winnings = this._playerBet * 20;
                }
                else if (this._rebels == 1) {
                    this._winnings = this._playerBet * 5;
                }
                else {
                    this._winnings = this._playerBet * 1;
                }
                console.log("Win!");
            }
            else {
                console.log("Loss!");
            }
            this._resultText.text = this._winnings.toString();
            this._playerMoney += this._winnings;
            this._creditsText.text = this._playerMoney.toString();
            this._resetTally();
        };
        SlotMachine.prototype._initializeBitmapArray = function () {
            this._reels = new Array();
            for (var reel = 0; reel < 3; reel++) {
                this._reels[reel] = new createjs.Bitmap(assets.getResult("Blank"));
                this._reels[reel].x = 216 + (reel * 84);
                this._reels[reel].y = 220;
                this.addChild(this._reels[reel]);
                console.log("reel" + reel + " " + this._reels[reel]);
            }
        };
        SlotMachine.prototype._placeBet = function (playerBet) {
            // ensure player's bet is less than or equal to players money
            if (playerBet <= this._playerMoney) {
                this._playerBet += playerBet;
                this._playerMoney -= playerBet;
                this._creditsText.text = this._playerMoney.toString();
                this._betText.text = this._playerBet.toString();
            }
        };
        SlotMachine.prototype._bet1ButtonClick = function (event) {
            console.log("Bet 1 Coin");
            this._placeBet(1);
        };
        SlotMachine.prototype._bet10ButtonClick = function (event) {
            console.log("Bet 10 Coin");
            this._placeBet(10);
        };
        SlotMachine.prototype._bet100ButtonClick = function (event) {
            console.log("Bet 100 Coin");
            this._placeBet(100);
        };
        SlotMachine.prototype._spinButtonClick = function (event) {
            if (this._playerBet > 0) {
                var bitmap = this._spinReels();
                for (var reel = 0; reel < 3; reel++) {
                    this._reels[reel].image = assets.getResult(bitmap[reel]);
                }
                this._determineWinnings();
                // reset player's bet to zero
                this._playerBet = 0;
                this._betText.text = this._playerBet.toString();
            }
        };
        return SlotMachine;
    })(objects.Scene);
    scenes.SlotMachine = SlotMachine;
})(scenes || (scenes = {}));
//# sourceMappingURL=slotmachine.js.map