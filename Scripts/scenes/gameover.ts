// GameOver SCENE
module scenes {
    export class GameOver extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _restartButton: objects.Button;
        private _gameOverLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add the LEFT_CAVE button to the MENU scene
            this._restartButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 80,
                true);
            this.addChild(this._restartButton);
            
            // LEFT_CAVE Button event listener
            this._restartButton.on("click", this.__restartButtonClick, this);

            this._gameOverLabel = new objects.Label(
                "GAME OVER",
                "60px Consolas",
                "#000000",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y,
                true
            );
            
            this.addChild(this._gameOverLabel);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }    
        //EVENT HANDLERS ++++++++++++++++++++
        
        // start Button click event handler
        private __restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the start Scene
            scene = config.Scene.SLOT_MACHINE;
            changeScene();
        }
    }
}