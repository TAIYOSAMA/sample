var data_characters =['マリオ','ルイージ','ピーチ','デイジー','ロゼッタ','メタルマリオ',
                      'ヨッシー','キノピオ','ノコノコ','ヘイホー','ジュゲム','キノピコ',
                      'ベビーマリオ','ベビールイージ','ベビーピーチ','ベビーデイジー',
                      'ベビーロゼッタ','ピンクゴールドピーチ','クッパ','ドンキーコング',
                      'ワリオ','ワルイージ','イギー','ロイ','レミー','ラリー','ウェンディ',
                      'ルドウィッグ','モートン','タヌキマリオ','ネコピーチ','リンク','むらびと',
                      'しずえ','ほねクッパ','ボーイ','ガール','キングテレサ','カロン','クッパJr.','Mii'];

var data_machines =['ハナチャンバギー','くまライド','バウザートライク','スタンダードカート',
                   'スケルトン','Gフォース','スティールダイバー','ネコクラシカル','ターボ・ワン',
                   'トライマッシュ','ビートデイモン','プリンセスコーチ','パタテンテン','クッパシップ',
                   'スニーカート','スーパースター','ゴールドカート','GLA','W２５シルバーアロー',
                   '３００SLロードスター','ブルーファルコン','タヌキバギー','Bダッシュ',
                   'わくわくビートル','Pウィング','スタンダードバイク','スーパーコメット','マッハGP',
                   'マキシマム','バーニングホール','モト・ドーザー','そらまめ','ジェットライダー',
                   'ヨッシーバイク','マスターバイク','きせかえスクーター','スタンダードATV'];

var data_wheels =['ローラータイヤ','リングタイヤ','スリックタイヤ','メタルタイヤ','ボタンタイヤ',
                  'ブロックタイヤ','スポンジタイヤ','ウッドリング','クッションタイヤ','ノーマルブルー',
                  'ワイルドホット','スカイローラー','スパイシーリング','サイバースリック','クリームブロック',
                  'GLAホイール','トライフォースタイヤ','リーフタイヤ','ノーマルタイヤ','ワイルドタイヤ'];

var data_wings =['かみひこうき','スーパーカイト','もくもくバルーン','ワリオカイト','ズングリカイト',
                 'ピーチパラソル','パラシュート','パラフォイル','フラワーカイト','クッパだこ','セイルプレーン',
                 'パラフォイルMKTV','ゴールドカイト','ハイラルカイト'];

var myclick = function(){
  var str = data_characters[Math.floor( Math.random() * data_characters.length )];
  document.getElementById('character').innerHTML = str ;
  var str = data_machines[Math.floor( Math.random() * data_machines.length )];
  document.getElementById('machine').innerHTML = str ;
  var str = data_wheels[Math.floor( Math.random() * data_wheels.length )];
  document.getElementById('wheel').innerHTML = str ;
  var str = data_wings[Math.floor( Math.random() * data_wings.length )];
  document.getElementById('wing').innerHTML = str ;
}
