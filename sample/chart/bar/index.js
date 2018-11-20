
//チャート全体の幅と高さを保管する変数
var width, height;
//全体からマージンを引いたチャート用エリアの幅と高さを保存する変数
var chartWidth, chartHeight;
//マージン
var margin = { top: 0, left: 100, bottom: 40, right: 0 };


//svg要素をDOMに追加
var svg = d3.select("#graph").append("svg");

//svg要素配下に軸用のレイヤーを追加
var axisLayer = svg.append("g").classed("axisLayer", true);
//svg要素配下に軸チャート用のレイヤーを追加
var chartLayer = svg.append("g").classed("chartLayer", true);

//正規化関数の用意
var xScale = d3.scaleBand();
var yScale = d3.scaleLinear();

//データの型を変換する関数
var cast = function(d) {
  d.value = +d.value;
  return d;
};


//データ読み込み
d3.csv("data.csv").then(main);

function main(data) {
  //value値を数値型に変換
  data.forEach(cast);

  //サイズの調整
  setSize(data);
  //軸を描画
  renderAxis();
  //チャートを描画
  renderChart(data);
}

function setSize(data) {
  //graphエリアの幅と高さを取得
  width = document.querySelector("#graph").clientWidth;
  height = document.querySelector("#graph").clientHeight;

  //マージン分を引いたサイズを取得
  chartWidth = width - (margin.left + margin.right);
  chartHeight = height - (margin.top + margin.bottom);

  //svg要素にgraphエリアの幅と高さを適用
  svg.attr("width", width).attr("height", height);

  //軸レイヤーにgraphエリアの幅と高さを適用
  axisLayer.attr("width", width).attr("height", height);

  //チャートレイヤーに幅と高さを適用
  chartLayer
    .attr("width", chartWidth)
    .attr("height", chartHeight)
    .attr("transform", "translate(" + [margin.left, margin.top] + ")");

  xScale
    .domain(
      data.map(function(d) {
        return d.name;
      })
    )
    .range([0, chartWidth])
    .paddingInner(0.1) //バー間のパディング
    .paddingOuter(0.5); //x軸両端のパディング

  yScale
    .domain([
      0,
      d3.max(data, function(d) {
        return d.value;
      })
    ])
    .range([chartHeight, 0]);
}

function renderChart(data) {
  //トランジションオブジェクトを生成
  var t = d3
    .transition()
    .duration(1000)
    .ease(d3.easeLinear)
    //トランジションイベント
    .on("start", function(d) {
      console.log("transiton start");
    }) //トランジション開始時
    .on("end", function(d) {
      console.log("transiton end");
    }); //トランジション終了時

  var bar = chartLayer.selectAll(".bar").data(data);

  bar.exit().remove();

  bar
    .enter()
    .append("rect")
    .classed("bar", true)
    .merge(bar) //選択済みセレクションをenterで追加されるセレクションにマージする
    .attr("fill", "blue")
    .attr("width", xScale.bandwidth())
    .attr("height", 0)
    .attr("transform", function(d) {
      return "translate(" + [xScale(d.name), chartHeight] + ")";
    });

  //アニメーション
  chartLayer
    .selectAll(".bar")
    .transition(t)
    .attr("height", function(d) {
      return chartHeight - yScale(d.value);
    })
    .attr("transform", function(d) {
      return "translate(" + [xScale(d.name), yScale(d.value)] + ")";
    });
}

function renderAxis() {
  var yAxis = d3.axisLeft(yScale).tickSizeInner(-chartWidth);

  axisLayer
    .append("g")
    .attr("transform", "translate(" + [margin.left, margin.top] + ")")
    .attr("class", "axis y")
    .call(yAxis);

  var xAxis = d3.axisBottom(xScale);

  axisLayer
    .append("g")
    .attr("class", "axis x")
    .attr("transform", "translate(" + [margin.left, chartHeight] + ")")
    .call(xAxis);
}
