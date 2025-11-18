document.addEventListener("DOMContentLoaded", function () {
  let btnStart = document.getElementById("startButton");
  let btnPause = document.getElementById("stopButton");
  let btnReset = document.getElementById("resetButton");
  let minutesText = document.getElementById("minutes");
  let secondsText = document.getElementById("seconds");
  let horasText = document.getElementById("hours");
  
  let segundos = 0;
  let minutos = 0;
  let horas = 0;
  let cronometro;

  function items() {
    function start() {
      cronometro = setInterval(() => {
          segundos++;
          if (segundos === 60) {
              segundos = 0;
              minutos += 1;
            }  
            if (minutos === 60) {
                minutos = 0;
                horas += 1;
            };
            
            function atualizarDisplay(){
                let texto;
                horas < 10 ? (texto = "0" + horas) : (texto = horas);
                horasText.innerText = texto;
    
                
                minutos < 10 ? (texto = "0" + minutos) : (texto = minutos);
                minutesText.innerText = texto;
                
               
                segundos < 10 ? (texto = "0" + segundos) : (texto = segundos);
                secondsText.innerText = texto;
                
            }
    
            atualizarDisplay()
        }, 1000);
        
    }


    btnStart.addEventListener("click", function () {
      start();
    });

    btnPause.addEventListener("click", function () {
      clearInterval(cronometro);
    });

    btnReset.addEventListener("click", function () {
      segundos = 0;
      minutos = 0;
      horas = 0;
      clearInterval(cronometro);
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      document.getElementById("hours").innerText = "00";
    });
  }

  items();
});









let btnDark = document.getElementById('btnDARK');
let isDark = document.getElementById('iconMode');

function mudarTema (){

  document.body.classList.toggle('clear-mode');
  isDark.classList.toggle('bi-moon-fill');
  btnDark.classList.toggle('bg-[#ccc2d8]');
  isDark.classList.toggle('bi-sun-fill');

  }


btnDark.addEventListener('click' , mudarTema);