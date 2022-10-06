const prompt = require('prompt-sync')();

while(true) {
    let flipInput=prompt("flip? ")

    if(flipInput == "yes"){

        let choiceInput=prompt("put money on it ")
        
        let randomNum = Math.round(Math.random())
let reply;
        if(randomNum == 0){
            console.log("heads")
            reply = "heads"
        }
        else{
            console.log("tails")
            reply = "tails"
        }
        
        console.log("reply: " + reply)
        console.log("I said:" + choiceInput)
        if(choiceInput == reply){
            console.log("great success!") 

        }
        else if(choiceInput != reply){
            console.log("read a book")
        }
        
        else{
            console.log("read a book")
        }

       
        
    }

        // when asked to flip and i agree, it asks to guess
        // when i guess, it triggers flip
        // it shows result
        // if guess was correct, it says "great succes"
        // if guess was wrong, it says "read a book"
    




    if(flipInput == "quit"){
       process.exit(1) 
    }


   
}







