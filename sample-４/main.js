window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#exec').addEventListener('click', function () {
    const val = document.querySelector('#input').value;

    // 変化の初期化
    let len = val.length;
    const max = 10;
    let res = '';

    // 文字数によって分岐
    if (len <= max) {
      res = '文字数はOKです！';
    } else {
      res = '文字数が長すぎます';
    }

    document.querySelector('#output').innerHTML = res;
  });
});
