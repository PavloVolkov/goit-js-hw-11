const bodyEl = document.querySelector('body');
const startBtnEl =document.querySelector('[data-action="start"]');
const stoptBtnEl =document.querySelector('[data-action="stop"]');

startBtnEl.addEventListener('click', onBtnStartClick)
stoptBtnEl.addEventListener('click', onBtnStopClick)
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
let changeColor;
  function onBtnStartClick(e){
      console.log("running");
      
        changeColor = setInterval(()=> {
        bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
       }, 1000)
    }



  function onBtnStopClick(e){
       clearInterval(changeColor)
       console.log("stopped");
       return
  }