
var a = "github"




/*  ～ノート～
～date関数について～
var today = new Date();
var selectedday = new Date(("1999/12/31 23:59:59")
日付情報の獲得
→date.getDay(); 曜日
→date.getFullyear();　年


※コンソールへの書き出し→ console.log( ~~ )

～配列(Array)の作り方～
配列の宣言
→var newarray = new Array();
→var newarray = [];
配列の宣言+要素の投入
→var newarray = ["A", "B", "C"];
配列に要素を追加
→newarray.push("C");　配列の最後に追加
→newarray.unshift("D");　配列の最初に追加
配列の要素を書き換え
→newarray[1] = "D";

※文字列は種類を問わず + で接続することができる。

※n = n + 1　→　n += 1　→　++n

～無名関数について～
function "名前" (){}とすると関数としてメモリに記憶される。
しかし function(){}とすると記憶されず、それだけでは使えない。しかし、これを変数として用いることができる。
従って、以下のような挙動が可能。
var A = function(){}
addEventListener('click', A);
また、以下のような挙動も可能。
addEventListener('click', function(){})
ただ、無名関数を用いる際はスコープの範囲や巻き上げに注意する。

※setAttribute(属性, 値)

～event, targetについて～
event
→(event)を引数に設定した関数を設定、また、addEventListener(動作,関数名)を設定しておく。イベントが発生したとき、 Event オブジェクトが渡されてくる。
target
→イベントの対象となる要素を取得できる。

～グローバル属性　"data-*" について～
HTMLのタグにdata-*(*には自由に名前をつけられる)という属性をつけると、var newtitle = button.dataset.newTitleといったようにJSで拾える

※new-title(in HTML) = newTitle(in JS)

～HTMLの中身書き換えについて～
textContentを用いて書き換え可能
button.textContent = newtitle;

～イベントリスナーについて～
obj.addEventlistener('click'←イベント名, 関数名);

～変数について～～
varは再代入、再宣言が可能。スコープが広い。関数内（{}内）で宣言しても、関数外からも呼び出すことができる。
letは再代入は可能だが、再宣言は不可能。スコープは狭い。関数内で宣言すると関数外から呼び出すことはできない。
constは両方ともに不可能。for loopの n = n + 1　とか多分できない。finalな感じ。関数内で宣言すると関数外から呼び出すことはできない。


*/