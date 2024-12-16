// DOMの読み込み終了時の処理を登録
window.addEventListener('DOMContentLoaded', function() {
    // id="exec" のボタンを1つ選択
    const elementExec = document.querySelector('#exec');

    // ボタンをクリックしたときの処理を追加
    elementExec.addEventListener('click', function() {
        // id="input" 要素を選択して、値を得る
        const value = document.querySelector('#input').value;

        // 文字列を分割して配列化したあと
        // 先頭が「数字1つ以上」＋「_」で始まる行のみ抽出
        const valueArray = value.split('\n')
            .filter(x => {
                if (x.match(/^\d+_/)) { return true }
                return false;
            });

        // 必要なデータを抽出した配列を作る
        const myArray = valueArray.map(x => {
            const a = x.split('\t');
            const ken         = a[0].replace(/^\d+_/, '');
            const siKuTyouSon = a[1].replace(/^\d+_/, '');
            const sousuu = Number.parseInt(a[4].replace(/,/g, '')) || 0;
            const otoko  = Number.parseInt(a[5].replace(/,/g, '')) || 0;
            const onnna  = Number.parseInt(a[6].replace(/,/g, '')) || 0;
            const zougen = Number.parseInt(a[8].replace(/,/g, '')) || 0;
            const zougenRitu = Number.parseFloat(a[9]) || 0;
            return [ken, siKuTyouSon, sousuu, otoko, onnna, zougen, zougenRitu];
        });

        // id="output" 要素を選択して、JSON文字列を出力
        const elementOutput = document.querySelector('#output');
        elementOutput.value = JSON.stringify(myArray, null, '  ');

        // データを一覧にしたテーブルを作成
        const htmlIn = myArray.map(x => {
            const td = x.map(y => `<td>${y}</td>`).join('');
            return `<tr>${td}</tr>`;
        }).join('');
        const html = `<table>${htmlIn}</table>`

        // id="preview" 要素を選択して、プレビューを表示出力
        const elementPreview = document.querySelector('#preview');
        elementPreview.innerHTML = html;
    });
});
