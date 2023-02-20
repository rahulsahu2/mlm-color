function countdown(element, minutes, seconds) {
// set time for the particular countdown
var time = minutes*60 + seconds;
    var interval = setInterval(function() {
    var el = document.getElementById(element);
        var currentPeriod = document.getElementById("periodId");
        const d = new Date();
        var month = d.getMonth() < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
        let todayStamp = d.getFullYear() + month + "" + d.getDate();
        var data = currentPeriod.innerHTML;
        console.log(data);
        if (data == '') {
            currentPeriod.innerHTML = todayStamp + "1";
        }
        //else {
        //    let result = text.substring(8);
        //    var num = parseInt(result);
        //    currentPeriod.innerHTML = todayStamp + "" + (num + 1);
        //}

    // if the time is 0 then end the counter
    if(time == 0) {
        setTimeout(function () {
            el.innerHTML = "<input type='button' value='Continue' class='btn btn-warning' />";
        }, 10);


    clearInterval(interval);

    setTimeout(function() {
        countdown('countDown', 3, 0);
        }, 2000);
    }
    var minutes = Math.floor( time / 60 );
    if (minutes < 10) minutes = "0" + minutes;
    var seconds = time % 60;
    if (seconds < 10) seconds = "0" + seconds;
    var text = minutes + ':' + seconds;
    el.innerHTML = text;
    time--;
}, 1000);
}
countdown('countDown', 3, 0);