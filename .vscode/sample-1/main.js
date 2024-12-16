window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#exec').addEventListener('click', function () {
    const val = document.querySelector('#input').value;

    let num = Number.parseInt(val);
    num = num * 1.1;

    const html = `<div class="item">税込み <b>${num}</b> 円</div>`;
    document.querySelector('#output').innerHTML = html;
  });
});
