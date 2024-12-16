window.addEventListener('DOMContentLoaded', function () {
  createTable(); // テーブルの作成

  // テーブルの作成
  function createTable() {
    let html = '';
    for (let i = 0; i < globalData.length; i++) {
      html += '<tr>';
      for (let j = 0; j < globalData[i].length; j++) {
        html += `<td>${globalData[i][j]}</td>`;
      }
      html += '</tr>';
    }
    document.querySelector('#preview tbody').innerHTML = html;
  }

  // 昇順（ascending order）
  document.querySelector('#sortAsc').addEventListener('click', function () {
    globalData.sort(function (a, b) {
      return a[2] - b[2];
    });
    createTable(); // テーブルの作成
  });

  // 降順（descending order）
  document.querySelector('#sortDesc').addEventListener('click', function () {
    globalData.sort(function (a, b) {
      return b[2] - a[2];
    });
    createTable(); // テーブルの作成
  });
});
