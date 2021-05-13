class Quiz {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

    question.hide();

    //write code to change the background color here

    background("black");

    //write code to show a heading for showing the result of Quiz

    fill("cyan");
    textSize(30);

    text("░R░e░s░u░l░t░ ░o░f░ ░t░h░e░ ░q░u░i░z░",350, 0);

    //call getContestantInfo( ) here

    contestant.getContestantInfo();

   

    //write condition to check if contestantInfor is not undefined

    if(allContestants !== undefined)
      {

      debugger;
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("The correct ans is highlighted in green",130,230);

      for(var plr in allContestants )
      {

        debugger;

        display_Answer+=30;
        textSize = 30;
        text (allContestants[plr].name + ":" + allContestants[plr].answer,250,display_Answer)

      }

    }


    //write code to highlight contest who answered correctly

    var correctAns = "1";
        if (correctAns === allContestants[plr].answer)
        fill ("green");
        else
        fill("red");
    
  }

}
