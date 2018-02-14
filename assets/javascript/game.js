$(document).ready ( function() {
    var chosenHero
    var chosenEnemy
    var isHeroChosen
    var isEnemyChosen
    var isHeroAlive
    var isEnemyAlive

function initGame () {
isHeroChosen =false
isEnemyChosen =false

// Getting Charter to show in first Row
for(var i=0; i < charArr.length; i++){
console.log(charArr[i].image)
var num = Math.floor(12 / charArr.length)
var charThing = $("<div id='"+charArr[i].name +"' class='myChar col-md-"+num+
"'value='"+i+"'><img src='"+charArr[i].image+"'style='width:120px;height:200px;'/></div>")
$("#characters").append(charThing)
}
}

//function 1 Selecting Hero
$(document).on("click",".myChar", function() {
    if (isHeroChosen === false) {
    // this code makes chosenHero becomes the hero you click in the charArr index
    chosenHero = charArr[$(this).attr("value")]
    console.log(chosenHero)
    $(this).addClass("fader")
    isHeroChosen = true
    myHeroThing = $("<div id='" +
    chosenHero.name +"'><img src='" +
    chosenHero.image+"' style='width:280px;height:500px;'/> <p>" +
    chosenHero.name+"</p> <h4>HP</h4> <p id='heroHP'>"+ chosenHero.hp +
    "</p></div>")
    $("#myHero").html(myHeroThing)
    $("#"+ chosenHero.name).hide(500)
    }

    // Selecting Enemy
    else if (isEnemyChosen === false &&
    chosenHero.name != charArr[$(this).attr("value")
    ].name) {
    chosenEnemy = charArr[$(this).attr("value")]
    console.log(chosenEnemy)
    $(this).addClass("fader")
    isEnemyChosen = true
    myEnemyThing = $("<div id='" +
    chosenEnemy.name + "'><img src='" +
    chosenEnemy.image + "' style='width:280px;height:500px;'/> <p>" +
    chosenEnemy.name + "</p><h4>HP</h4><p id='enemyHP'>"+chosenEnemy.hp +
    "</p> </div>")
    $("#myEnemy").html(myEnemyThing)
    $("#"+ chosenEnemy.name).hide(500)
    $("#characters").hide(800)
    }
})

    //function 2 Attack Button
$("#attackBTN").on("click", function() {
    var num1 = Math.floor(Math.random()*20)
    var num2 = Math.floor(Math.random()*20)
    chosenEnemy.hp -= num1
    $("#enemyHP").text(chosenEnemy.hp)
    $("#myBattle").html("<p>" +
    chosenHero.name + " attacked " +
    chosenEnemy.name + " for " + num1 + " points!</p>")
    chosenHero.hp -= num2
    $("#heroHP").text(chosenHero.hp)
    $("#myBattle").append("<p>" +
    chosenEnemy.name + " attacked " +
    chosenHero.name + " for " + num2 + " points!</p>")
    winOrLose()
})

// function 3 WIN or LOSE
function winOrLose() {
    if (chosenHero.hp <= 0) {
    console.log("you lose")
    $("#song").attr("src", "assets/audio/lose-theme.mp3")
    var reBTN = '<button id="replayButton" class="btn btn-primary"> Play Again </button>'
    $("#myBattle").empty()
    $("#attkRow").empty()
    $("#myBattle").html("<h2> You Lose</h2>" + "<h1>GAME OVER</h1>" + reBTN)
    $("#replayButton").on("click", function() {
    window.location.reload()
    isHeroAlive = false
    isEnemyAlive =   true
    })
    }
    else if (chosenEnemy.hp <=0) {
    alert("Congratulations you LEVELED UP!")
    chosenHero.hp+=115
    chosenHero.strength+=15
    $("#myBattle").empty()
    $("#myEnemy").empty()
    $("#myBattle").html("<h2> You Win</h2>" + "<h1>Select another Opponent</h1>")
    $("#attkRow").hide(300)
    $("#characters").show(800)
    isHeroAlive = true
    isEnemyAlive = false
    isEnemyChosen = false
    }
    if ( isHeroAlive && !isEnemyAlive ) {

    $(document).on("click",".myChar", function() {
        $("#myBattle").empty()
        $("#attkRow").show(300)
    if (isEnemyChosen === false &&
        chosenHero.name != charArr[$(this).attr("value")
        ].name ) {
        chosenEnemy = charArr[$(this).attr("value")]
        $(this).addClass("fader")
        isEnemyChosen = true
        myEnemyThing = $("<div id='" +
        chosenEnemy.name + "'><img src='" +
        chosenEnemy.image + "' style='width:280px;height:500px;'/> <p>" +
        chosenEnemy.name + "</p><h4>HP</h4><p id='enemyHP'>"+chosenEnemy.hp +
        "</p> </div>")
        $("#myEnemy").html(myEnemyThing)
        }
        })
    }

    else if ( isEnemyAlive && !isHeroAlive){

    }
}
// name, hp, strength, image
var charArr = [
{
name: "Sasuke",
hp: 110,
strength: 34,
image:"assets/images/Sasuke.png"
},
{
name: "Sakura",
hp: 110,
strength: 33,
image:"assets/images/Sakura.png"
},
{
name: "Naruto",
hp: 120,
strength: 33,
image:"assets/images/Naruto.png"
},
{
name: "Kakashi",
hp: 130,
strength: 34,
image:"assets/images/Kakashi.jpg"
},
{
name: "Itachi",
hp: 130,
strength: 35,
image:"assets/images/Itachi.png"
},
{
name: "Orochimaru ",
hp: 140,
strength: 32,
image:"assets/images/Orchimaru.jpg"
},
]

initGame()
})