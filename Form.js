class Form{
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        console.log("in form")
      }

    

    hide(){

        this.button.hide()
        this.input.hide()
        this.greeting.hide()

    }

    display(){

     var title = createElement("h1");
     title.html("Car Racing Game");
     title.position(displayWidth/2-60, displayHeight/2-60);

     this.input.position(displayWidth/2-30, displayHeight/2);
     this.button.position(displayWidth/2, displayHeight/2+40);
    // console.log(input.value())
     
    this.button.mousePressed(()=>{
        console.log(this.input);
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        console.log(player.index)
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2-10, 100);
      });
  
     
    }


}