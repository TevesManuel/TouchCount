
let count = 0;
let start = 0;
// var circle = new ProgressBar.Circle('#container', {
//     color: '#FCB03C',
//     duration: 3000,
//     easing: 'easeInOut'
// });

// circle.animate(1);
window.onload = function()
{
    document.getElementsByClassName("container")[0].style.height = window.innerHeight.toString() + "px";
    document.getElementsByClassName("container")[0].style.width  = window.innerWidth.toString() + "px";
    document.getElementById("ts_div").innerHTML = "0t/s"
}
function pressed_function()
{
    if (count == 0)
    {
        start = Date.now();
    }
    let diff = Date.now()-start;
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