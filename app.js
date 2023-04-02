
let count = 0;
let start = 0;
function pressed_function()
{
    if (count == 0)
    {
        start = Date.now();
    }
    let diff = Date.now()-start;
    console.log(diff/1000);
    document.getElementById("counter_div").innerHTML = count.toString();
    document.getElementById("timer_div").innerHTML = diff.toString() + "ms";
    document.getElementById("ts_div").innerHTML = (count/(diff/1000)).toFixed(1).toString() + "t/s";
    count++;
}
document.addEventListener('touchstart', function(evento) {
    pressed_function();
});
document.body.onkeyup = function(e)
{
    pressed_function();
}