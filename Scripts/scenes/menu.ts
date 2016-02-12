// Menu SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _startButton: objects.Button;
        private _introLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add the LEFT_CAVE button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 80 , true);
            this.addChild(this._startButton);
            
            // LEFT_CAVE Button event listener
            this._startButton.on("click", this._startButtonClick, this);

            this._introLabel = new objects.Label(
                "SLOT MACHINE",
                "60px Consolas",
                "#000000",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y
            );
            
            this.addChild(this._introLabel);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }    
        //EVENT HANDLERS ++++++++++++++++++++
        
        // start Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the start Scene
            scene = config.Scene.SLOT_MACHINE;
            changeScene();
        }
    }
}