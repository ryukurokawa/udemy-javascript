window.addEventListener('DOMContentLoaded', function () {
  createTable(); // テーブルの作成

  // テーブルの作成
  function createTable() {
    const html = globalData
      .map((array) => {
        const htmlRow = array.map((cell) => `<td${cell}</td>`).join('');
        return `<tr>${htmlRow}</tr>`;
      })
      .join('');
    document.querySelector('preview tbody').innerHTML = html;
  }

  // 昇順(ascending order)
  document.querySelector('#sortAsc').addEventListener('click', function () {
    globalData.sort((a, b) => a[2] - b[2]);
    createTable(); //テーブルの作成
  });

  // 降順 (descending order)
  document.querySelector('#sortDesc').addEventListener('click', function () {
    globalData.sort((a, (b) => b[2] - a[2]));
    createTable(); //テーブルの作成
  });
});
