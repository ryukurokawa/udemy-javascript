window.addEventListener('DOMContentLoaded', function () {
  const elementStart = document.querySelector('#start');
  const elementStop = document.querySelector('#stop');
  let intervalId;

  elementStart.addEventListener('click', function () {
    elementStart.classList.add('hide');
    elementStop.classList.remove('hide');

    const timeStart = Date.now();

    intervalId = setInterval(function () {
      //差分時間の計算
      const timeNow = Date.now();
      const timeDiff = timeNow - timeStart;
      const sec = (timeDiff / 1000).toFixed(3);

      document.querySelector('#output').innerHTML = `${sec}秒`;
    });
  });

  elementStop.addEventListener('click', function () {
    elementStop.classList.add('hide');
    elementStart.classList.remove('hide');
    clearInterval(intervalId);
  });
});
