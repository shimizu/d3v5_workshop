var width, height;
var chartWidth, chartHeight;
var margin;
var svg = d3.select("#graph").append("svg");
var axisLayer = svg.append("g").classed("axisLayer", true);
var chartLayer = svg.append("g").classed("chartLayer", true);

var xScale = d3.scaleLinear();
var yScale = d3.scaleLinear();

var xAxis, yAxis;

var cast = function(d) {
  d.stature = +d.stature;
  d.weight = +d.weight;
  return d;
};

d3.csv("data.csv").then(main);

function main(data) {
  data.forEach(cast);

  initSize(data);
  initScale();
  renderAxis();
  renderChart(data);


  // ↓の関数を実行するとチャートがアニメーションします。
  //animation();
}

function initSize(data) {
  width = document.querySelector("#graph").clientWidth;
  height = document.querySelector("#graph").clientHeight;

  margin = { top: 0, left: 80, bottom: 40, right: 0 };

  chartWidth = width - (margin.left + margin.right);
  chartHeight = height - (margin.top + margin.bottom);

  svg.attr("width", width).attr("height", height);

  axisLayer.attr("width", width).attr("height", height);

  chartLayer
    .attr("width", chartWidth)
    .attr("height", chartHeight)
    .attr("transform", "translate(" + [margin.left, margin.top] + ")");

}


function initScale(){
  xScale.domain([0, 190]).range([0, chartWidth]);
  yScale.domain([0, 90]).range([chartHeight, 0]);  
}

function renderChart(data) {
  var point = chartLayer.selectAll(".point").data(data);

  point.exit().remove();

  point
    .enter()
    .append("circle")
    .classed("point", true)
    .merge(point)
    .attr("r", 4)
    .attr("transform", function(d) {
      return "translate(" + [xScale(d.stature), yScale(d.weight)] + ")";
    });
}

function renderAxis() {
  yAxis = axisLayer
    .append("g")
    .attr("transform", "translate(" + [margin.left, margin.top] + ")")
    .attr("class", "axis y")
    .call(d3.axisLeft(yScale).tickSizeInner(-chartWidth));

  xAxis = axisLayer
    .append("g")
    .attr("class", "axis x")
    .attr("transform", "translate(" + [margin.left, chartHeight] + ")")
    .call(d3.axisBottom(xScale).tickSizeInner(-chartHeight));
}

function animation() {
  
  //描画するデータの範囲を変更してスケールを更新する。
  if (xScale.domain()[0] == 0 && yScale.domain()[0] == 0) {
    //x軸の最小値を160, y軸の最小値を190に変更する
    xScale.domain([160, 190]);
    yScale.domain([50, 90]);
  } else {
    //x軸の最小値を0, y軸の最小値を0に変更する
    xScale.domain([0, 190]);
    yScale.domain([0, 90]);
  }

  //トランジション設定
  var t = d3
    .transition()
    .delay(1000)
    .duration(1600)
    .ease(d3.easeLinear)
    .on("end", animation); //アニメーションをループ(再帰)させる

  //軸をアニメーションしながら更新
  yAxis.transition(t).call(d3.axisLeft(yScale).tickSizeInner(-chartWidth));
  xAxis.transition(t).call(d3.axisBottom(xScale).tickSizeInner(-chartHeight));

  //チャートをアニメーションさせながら更新する
  chartLayer
    .selectAll(".point")
    .transition(t)
    .attr("transform", function(d) {
      return "translate(" + [xScale(d.stature), yScale(d.weight)] + ")";
    });
}
