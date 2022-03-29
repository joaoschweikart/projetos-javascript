var seconds = 00;
var minutes = 00;
var tens = 00;
var appendSeconds = document.getElementById('seconds');
var appendMinutes = document.getElementById('minutes');
var appendTens = document.getElementById('tens');
var interval;

function start(){
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
}

function pause(){
  clearInterval(interval);
}

function reset(){
  clearInterval(interval);
  seconds = '00';
  minutes = '00';
  tens= '00';
  appendSeconds.innerHTML = seconds;
  appendMinutes.innerHTML = minutes;
  appendTens.innerHTML = tens;
}

function startTimer(){
  tens++;
  appendTens.innerHTML = '0'+tens
  if (tens > 9){
    appendTens.innerHTML = tens;
  } 
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = '0'+seconds;
    tens = 0;
  }
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  } 
  if (seconds > 59) {
    minutes++;
    appendMinutes.innerHTML = '0'+minutes;
    seconds = 0;
  }
  if(minutes > 9){
    appendMinutes.innerHTML = minutes
  }
}