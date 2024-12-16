window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#exec').addEventListener('click', function () {
    const input = document.querySelector('#input').value;
    const inputArr = input.split(',');

    //　値を全て数値にする
    for (let i = 0; i < inputArr.length; i++) {
      inputArr[i] = Number.parseInt(inputArr[i]);
    }

    // ソート
    inputArr.sort(function (a, b) {
      return b - a;
    });

    const html = inputArr.join(',');
    document.querySelector('#output').innerHTML = html;
  });
});
