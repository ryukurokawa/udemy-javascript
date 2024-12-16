window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#exec').addEventListener('click', function () {
    const total = Number.parseInt(document.querySelector('#inputTotal').value);
    const headCount = Number.parseInt(
      document.querySelector('#inputHeadcount').value
    );
    const elementOutput = document.querySelector('#output');

    // エラーがあれば、エッセージを表示して終了
    if (total <= 0) {
      elementOutput.innerHTML = '総額が０円以下です。';
      return;
    }
    if (headCount <= 0) {
      elementOutput.innerHTML = '人数が０以下です。';
      return;
    }

    //変数の初期化
    const payment = Math.trunc(total / headCount);
    const remainder = total % headCount;
    elementOutput.innerHTML = `<div>１人当たり</div><div>${payment}円</div>`;

    //端数があればメッセージを追加
    if (remainder !== 0) {
      elementOutput.innerHTML += `<div>一人だけ端数を加えて</div><div>${
        payment + remainder
      }</div`;
    }
  });
});
