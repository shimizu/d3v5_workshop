var width, height;
var chartWidth, chartHeight;
var margin;
var svg = d3.select("#graph").append("svg");
var axisLayer = svg.append("g").classed("axisLayer", true);
var chartLayer = svg.append("g").classed("chartLayer", true);

var xScale = d3.scaleTime();
var yScale = d3.scaleLinear();

var cast = function(d) {
  d.date = new Date(d.date); //dateオブジェクトに変換
  d.value = +d.value;
  return d;
};

d3.csv("data.csv").then(main);

function main(data) {
  data.forEach(cast);

  setSize(data);
  renderAxis();
  renderChart(data);
}

function setSize(data) {
  width = document.querySelector("#graph").clientWidth;
  height = document.querySelector("#graph").clientHeight;

  margin = { top: 40, left: 100, bottom: 40, right: 0 };

  chartWidth = width - (margin.left + margin.right);
  chartHeight = height - (margin.top + margin.bottom);

  svg.attr("width", width).attr("height", height);

  axisLayer.attr("width", width).attr("height", height);

  chartLayer
    .attr("width", chartWidth)
    .attr("height", chartHeight)
    .attr("transform", "translate(" + [margin.left, margin.top] + ")");

  xScale
    .domain([new Date("2016/1/1"), new Date("2016/3/16")])
    .range([0, chartWidth]);
  yScale
    .domain([
      500,
      d3.max(data, function(d) {
        return d.value;
      })
    ])
    .range([chartHeight, 0]);
}

function renderChart(data) {
  var t = d3
    .transition()
    .duration(1000)
    .ease(d3.easeLinear)
    .on("start", function(d) {
      console.log("transiton start");
    })
    .on("end", function(d) {
      console.log("transiton end");
    });

  var lineGen = d3
    .line()
    .x(function(d) {
      return xScale(d.date);
    })
    .y(function(d) {
      return yScale(d.value);
    })
    .curve(d3.curveStep);

  var line = chartLayer.selectAll(".line").data([data]);

  line
    .enter()
    .append("path")
    .classed("line", true)
    .merge(line)
    .attr("d", lineGen)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-dasharray", function(d) {
      return this.getTotalLength();
    })
    .attr("stroke-dashoffset", function(d) {
      return this.getTotalLength();
    });

  chartLayer
    .selectAll(".line")
    .transition(t)
    .attr("stroke-dashoffset", 0);
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
    .attr(
      "transform",
      "translate(" + [margin.left, chartHeight + margin.top] + ")"
    )
    .call(xAxis);
}
