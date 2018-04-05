var width, height;
var chartWidth, chartHeight;
var margin;
var svg = d3.select("#graph").append("svg");
var chartLayer = svg.append("g").classed("chartLayer", true);

var cast = function(d) {
  d.value = +d.value;
  return d;
};

d3.csv("data.csv").then(main);

function main(data) {
  data.forEach(cast);

  setSize(data);
  renderChart(data);
}

function setSize(data) {
  width = document.querySelector("#graph").clientWidth;
  height = document.querySelector("#graph").clientHeight;

  margin = { top: 40, left: 0, bottom: 40, right: 0 };

  chartWidth = width - (margin.left + margin.right);
  chartHeight = height - (margin.top + margin.bottom);

  svg.attr("width", width).attr("height", height);

  chartLayer
    .attr("width", chartWidth)
    .attr("height", chartHeight)
    .attr("transform", "translate(" + [margin.left, margin.top] + ")");
}

function renderChart(data) {
  //pieチャート用のデータセットを生成する
  var arcs = d3
    .pie()
    .sort(null)
    .value(function(d) {
      return d.value;
    })(data);

  //パスジェネレーターを生成する
  var arc = d3
    .arc()
    .outerRadius(chartHeight / 2)
    .innerRadius(chartHeight / 4)
    .padAngle(0.03)
    .cornerRadius(8);

  var pieG = chartLayer
    .selectAll("g")
    .data([data])
    .enter()
    .append("g")
    .attr("transform", "translate(" + [chartWidth / 2, chartHeight / 2] + ")");

  var block = pieG.selectAll(".arc").data(arcs);

  var newBlock = block
    .enter()
    .append("g")
    .classed("arc", true);

  //円グラフ描画
  newBlock
    .append("path")
    .attr("d", arc)
    .attr("id", function(d, i) {
      return "arc-" + i;
    })
    .attr("stroke", "gray")
    .attr("fill", function(d, i) {
      return d3.interpolateCool(Math.random());
    });

  //ラベル表示
  newBlock
    .append("text")
    .attr("dx", 55)
    .attr("dy", -5)
    .append("textPath")
    .attr("xlink:href", function(d, i) {
      return "#arc-" + i;
    })
    .text(function(d) {
      return d.data.name;
    });
}
