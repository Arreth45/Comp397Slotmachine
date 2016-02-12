// SlotMachine SCENE
module scenes {
    export class SlotMachine extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _spinButton: objects.Button;
        private _bet10Button: objects.Button;
        private _bet1Button: objects.Button;
        private _bet100Button: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add the LEFT_CAVE button to the MENU scene
            this._backgroundImage = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._backgroundImage);

            //add spin button to the scene
            this._spinButton = new objects.Button("SpinButton", 402, 382, false);
            this.addChild(this._spinButton);
            this._spinButton.on("click", this._spinButtonClick, this);

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


            stage.addChild(this);

        }

        // INTRO Scene updates here
        public update(): void {

        }

        public _spinButtonClick(event: createjs.MouseEvent): void {
            console.log("Spin");
        }

        public _bet1ButtonClick(event: createjs.MouseEvent): void {
            console.log("Bet 1 Coin");
        }

        public _bet10ButtonClick(event: createjs.MouseEvent): void {
            console.log("Bet 10 Coin");
        }

        public _bet100ButtonClick(event: createjs.MouseEvent): void {
            console.log("Bet 100 Coin");
        }
    }
}