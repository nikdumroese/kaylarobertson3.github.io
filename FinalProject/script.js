
/* margins and widths as global variables */
var margin = {top: 20, right: 60, bottom: 30, left: 100},
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

/* Tick format controls how the tick labels appear */
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(function(d) {
      return "$"+d;
    });


/* svg canvas goes here, appended to target div (.chart)*/
var svg = d3.select(".chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



/* stores data */
var theData;
var currYear = "2016";
/* ------------------------------- */

/* load csv in d3 */
d3.csv("data/college.csv", function(error, data) {


  /* casting data as numbers, not strings (+) */
  data.forEach(function(d) {
    d.Enrollment = +d["Enrollment"];
    d.Tuition = +d["Tuition"];
  });

  //data variable
  theData = data;

  /*high and lows of x and y scales */
  x.domain(d3.extent(theData, function(d) { return d.Enrollment; })).nice();
  y.domain(d3.extent(theData, function(d) { return d.Tuition; })).nice();


  //Draw the axis
  chartInit();

  //Draw the datapoints in a separate function.
  //to separate this in case we need to update the data
  //Without redrawing the axis
  chartUpdate();




  /* buttons, then run chartUpdate() again */

  d3.selectAll(".btn").on("click", function() {

    //Set the currYear global to be equal to the selected button.
    currYear = d3.select(this).attr("val");

    //Remove the .active class from all buttons, add it to the one we just clicked.
    d3.selectAll(".btn").classed("active", false);
    d3.select(this).classed("active", true);

    //Update the chart
    chartUpdate();
  });


});


function chartInit() {

  //Append the x axis to the chart.
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width) // width represents the farthest point right on our chart
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Avg. Enrollment (FTE)");

  //Append the y axis to the chart.
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)") // Rotate is another SVG property.
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("In-state tuition")


}




function chartUpdate() {

  // d3.nest lets us break our data into 4 separate years.
  // We're basically reorganizing 120 rows (30 MLB teams x 4 years)
  // Into 4 arrays of 30 teams, with "Year" as the object key.
  var nestedData = d3.nest()
    .key(function(d) { return d.Year; })
    .map(theData);

  //Now we can target a single year of the data.
  //We'll use the current year (2015 is default, but will update when we click the buttons)
  var currYearData = nestedData[currYear];



  // This is where the magic happens, where we actually create elements on the page
  // using our data. Let's break it down.

  // SELECT
  // First we select the elements we're going to create.
  // That may sound a little weird since these elements don't exist yet,
  // but just hang with it.
  svg.selectAll(".dot")
  // JOIN
  // Now we join our data to those elements. This creates a one-to-one relationship
  // between each data point and element that represents it, in this case a dot!

  /* ------------------------------- */
  /* EXTRA SUPER ADDED BONUS LESSON */
  /* ------------------------------- */
  /* We need to bind each dot to a specific team so they stay the same each upate
  This dot should always represent this team when the data updates
  If we DON'T DO THIS, the circles will update in the order of the data. The number of dots will stay the same,
  but they might not update according to their original team name */
  /* ------------------------------- */

      .data(currYearData, function(d) {
        return d.College;
      })

  // ENTER
  // This is where d3 is amazing. It knows to check the page, and if there are more data points
  // than elements representing them, it adds them to the page.
    .enter().append("circle")
      // Here on out, we're just adding properties to the elements we just created.
      .attr("class", "dot")

    /* ------------------------------- */
    /* EXTRA SUPER ADDED BONUS LESSON */
    /* ------------------------------- */
    /* We're separating the enter() from the attribute assignments.
    Objects are created on enter, but only if they're new. Once they exist,
    we can update them based on the current year's data */
    /* ------------------------------- */


    d3.selectAll(".dot")
      .transition().duration(500)
      .attr("r", 3.5)
      .attr("cx", function(d) { return x(d.Enrollment); })
      .attr("cy", function(d) { return y(d.Tuition); })
      .style("fill", function(d) {
        if (d.College === "University of Montana") {
          return "rgb(107, 21, 21)";
        } else {
          return "#999";
        }
      });

  svg.selectAll(".name")
      .data(currYearData, function(d) {
        return d.College;
      })
    .enter().append("text")
      .attr("class", "name")
      .text(function(d) {
          return d.College;
        });

  d3.selectAll(".name")
      .transition().duration(500)
      .attr("x", function(d) { return x(d.Enrollment) + 5; })
      .attr("y", function(d) { return y(d.Tuition); });

}
