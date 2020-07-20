(function () {
    // send alert
    window.alert("Testing window.alert(str)")

    //send prompt
    var prompt = window.prompt("Your name", "Gertrude")

    //send confirm
    var confirm = window.confirm("Your name is " + prompt + " ?")
    console.log("confirm: " + confirm);


    // little gess game
    /*var target = Math.round(Math.random() * 100)
    var submited = 0
    do{
        
        submited = window.prompt('What is the number ?')
        submited = parseInt(submited, 10)
        console.log(submited);
        if (submited < target) {
            console.log('Too low ! ');
        }else if (submited > target) {
            console.log('Too high !');
        }
        
    } while (target != submited)

    console.log('You found it')*/

    var count = 0
    var bavard = function () {
        console.log('count: ' + count.toString());
        count++
    }

    var bavard_once = function () {
        console.log('bavard_once');
        
    }

    var interval_id = window.setInterval(bavard, 1000) // execute the bavard function every 1000 milli-second
    window.setTimeout(bavard_once, 2250) // execute the bavard_once function on time after 2250 milli-second

    if (i === 10 ) {
        window.clearInterval(interval_id)
    }


})()