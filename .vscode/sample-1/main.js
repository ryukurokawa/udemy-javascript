window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#exec').addEventListener('click', function () {
    const html = `我が輩は猫である。`;
    document.querySelector('#output').innerHTML = html;
  });

  document.querySelector('#exec2').addEventListener('click', function () {
    const html = `私は猫です。`;
    document.querySelector('#output').innerHTML = html;
  });
});
