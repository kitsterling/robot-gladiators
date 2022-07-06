var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log("Name: "+ playerName + ", ", playerAttack , " AD, " + playerHealth, " Health, $" + playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
console.log(enemyNames[0]);
var enemyName = enemyNames[0];

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }

var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // Welcome
    window.alert("Welcome to Robot Gladiators!");
    //Fight or Skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    promptFight = promptFight.toLowerCase();

    if (promptFight === "fight") {
        // Player attack
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // Enemy state
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Enemy attack
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // Player state
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    } else if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else {
          fight();
        }

    } else {
        window.alert("You need to choose a valid option. Try again!");
    }

};

fight(enemyRo);