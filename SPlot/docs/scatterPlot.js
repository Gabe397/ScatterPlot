// Instantiate the size of the SVG
var width = 1000;
var height = 500;

const c = "chlorides";
const ds = "density"


//Import the data set and isolate the density and chlorides
d3.csv("WhiteWineCSV.csv", (data) => {

    //Get the chlorides X Value
    let chlorides = data.map((x) => {
        return parseFloat(x.chlorides)
    });


    //Get the Density Y Value
    let density = data.map((y) => {
        return parseFloat(y.density)
    });


    //This returns an object called reData that holds an array of objects with x and y. We use this to plot the circle
    let reData = data.map((d) => {
        return {
            x: parseFloat(d[c]),
            y: parseFloat(d[ds])};
    });

    console.log(d3.min(density));

    // Create the X and Y Axis
    var svg = d3.select("svg").attr("height", height).attr("width", width);

    //Create The Scales
    let xScale = d3.scaleLinear().domain([d3.min(chlorides)-0.09, d3.max(chlorides)]).range([0, width - 100]);

    let yScale = d3.scaleLinear().domain([d3.min(density)-0.01, d3.max(density)]).range([height/2, 0]);

    //Create the Line
    let x_Axis = d3.axisBottom().scale(xScale);

    let y_Axis = d3.axisLeft().scale(yScale);

    //Insert Axis into the SVG
    svg.append("g").attr("transform","translate(60,10)").call(y_Axis);

    let xAxisTranslate = height/2 + 10;
    svg.append("g").attr("transform","translate(60, "+ xAxisTranslate + " )").call(x_Axis);


    //Add Text to the Side

    //Y Axis Text
    svg.append("text")
        .style("font-size","20px")
        .attr("text-anchor","middle")
        .attr("transform", "translate(20,120), rotate(-90)")
        .text("Density");

    //X Axis Text
    svg.append("text")
        .style("font-size","20px")
        .attr("text-anchor","middle")
        .attr("transform", "translate(500,300)")
        .text("Chloride");

    //Plot the Circle
    let circles = svg.selectAll('circle').data(reData);

        circles.enter()
            .append('circle')
            .attr("r", 0.5)
            .attr("class", "dot")
            .style('fill-opacity',0.3)
            .attr('cx', (d) => xScale(d.x))
            .attr('cy', (d) => yScale(d.y))
            .merge(circles);

});