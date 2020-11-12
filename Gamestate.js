class Gamestate{

    constructor(){

    }

    getState(){

        var dataState = database.ref("gamestate")
        dataState.on("value", function(data){
            gameState = data.val()
        } )
    }

    updateState(state){

        database.ref("/").update({gamestate: state})

    }

    async start(){

        if (gameState === 0){

            player = new Player()
            var playerCountRef = await database.ref('playerCount').once("value"); 

            if(playerCountRef.exists()){ 
                playerCount = playerCountRef.val(); 
                player.getCount(); 
            }

            
            form = new Form();
            form.display();

        }

    }

    play(){

        form.hide();
        text("The game is starting!", 420, 400)
        Player.getPlayerInfo();
        if (allPlayers !== undefined){
            var display_position = 130;
            for(var plr in allPlayers){ 
                if (plr === "player" + player.index) fill("red") 
                else fill("black"); 
                display_position+=20; 
                textSize(15); 
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position) 
            }

            if (keyIsDown(UP_ARROW) && playerIndex !== null){

                player.distance+=50;
                player.update()

            }
        }

    }
}