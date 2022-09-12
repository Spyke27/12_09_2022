/* Peganda a data e hora da máquina! */

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
//var prepand = (hour >= 12 && hour <=)

alert(`Hoje é ${daylist[day]}, e são ${hour}:${minute}:${second}.`)