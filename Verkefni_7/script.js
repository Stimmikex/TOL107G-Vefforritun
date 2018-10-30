/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */
// fasti sem segir til um hve marga leiki eigi að spila
/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
var end = true;
function start() {
    alert("Markmið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er");
    do  {
        play();;   
    }while(end);
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
var timekeeper = new Date();
var wintimer = null, totaltimer = null;
var lose = 0, win = 0;
let gcounter = 0;
const GAMES_TO_PLAY = 10;
var svar = "";
var results = null;
var avg = null;
function play() {
    results = ask();
    gcounter = 0;
    win = 0;
    lose = 0;
    // console.log(gcounter);
    while (gcounter < GAMES_TO_PLAY) {
        svar = prompt(results[0]);
        //svar = parseInt(svar);
        // console.log(svar);
        totaltimer += timekeeper.getMilliseconds();
        if (svar != "" && svar != null) {
            svar = parseInt(svar);
            gcounter++;
            // console.log("Counter: "+gcounter);
            // console.log("Svar: "+svar);
            // console.log(parseInt(results[1]));
            if (parseInt(results[1]) == svar) {
                wintimer += timekeeper.getMilliseconds();
                avg = (wintimer/GAMES_TO_PLAY)/100;
                avg = Math.round(avg * 100) / 100;
                win++;
                // console.log("Wins: "+win);
            }
            else {
                lose++;
                // console.log("Loses: "+lose);
            }
            // console.log(timer);
        }
        else {
            replay();
        }
        if (end == true) {
            results = ask();
        } 
        else {
            return;
        }
    }
    if (gcounter == GAMES_TO_PLAY) {
        totaltimer = Math.round(((totaltimer*100)/100)/1000);
        alert("Wins: "+win+" Out of "+GAMES_TO_PLAY+" games.\nTotal time: "+totaltimer+"Sec Average time: "+avg+" Sec")
    }
    replay();
}
function replay() {
    svar = confirm("Spila aftur?");
    if (!svar) {
        Exit();
    }
    else {
    }
}
function Exit() {
    end = false;
}
/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
    let rand = randomNumber(1,4);
    let tal1 = 0;
    let tal2 = 0;
    let spurn = null;
    let sum;
    switch (rand) {
        case 1:
            tal1 = randomNumber(1, 100);
            tal2 = randomNumber(1, 100);
            sum = tal1+tal2;
            spurn = tal1 +" + "+tal2
            return [spurn, sum];
            break;
        case 2:
            tal1 = randomNumber(1, 100);
            tal2 = randomNumber(1, 100);
            sum = tal1-tal2;
            spurn = tal1 +" - "+tal2
            return [spurn, sum];
            break;
        case 3:
            tal1 = randomNumber(1, 10);
            tal2 = randomNumber(1, 10);
            sum = tal1*tal2;
            spurn = tal1 +" * "+tal2 
            return [spurn, sum];    
            break;
        case 4:
            tal1 = randomNumber(2, 10);
            tal2 = tal1*randomNumber(2, 10);
            sum = tal2/tal1;
            spurn = tal2 +" / "+tal1 
            return [spurn, sum];
            break;
    
        default:
            break;
    }
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();