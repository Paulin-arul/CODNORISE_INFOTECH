function startCountdown() {
    const targetDate = new Date(document.getElementById('date').value).getTime();
  
    const countdown = setInterval(function() {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById('days').innerHTML = days;
      document.getElementById('hours').innerHTML = hours;
      document.getElementById('minutes').innerHTML = minutes;
      document.getElementById('seconds').innerHTML = seconds;
  
      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('timer').innerHTML = 'EXPIRED';
      }
    }, 1000);
  }
  