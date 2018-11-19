// Instantiate the size of the SVG
var width = 1000;
var height = 500;



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


    //Make A Total Data Object that hold both of the x and y arrays.
    let totalData = {x: chlorides,
                     y: density};
    console.log(totalData.x);


    // Create the X and Y Axis
    var svg = d3.select("svg").attr("height", height).attr("width", width);

    //Create The Scales
    let xScale = d3.scaleLinear().domain([d3.min(chlorides), d3.max(chlorides)]).range([0, width - 100]);

    let yScale = d3.scaleLinear().domain([d3.min(density), d3.max(density)]).range([height/2, 0]);

    //Create the Line
    let x_Axis = d3.axisBottom().scale(xScale);

    let y_Axis = d3.axisLeft().scale(yScale);

    //Insert Axis into the SVG
    svg.append("g").attr("transform","translate(60,10)").call(y_Axis);

    let xAxisTranslate = height/2 + 10;
    svg.append("g").attr("transform","translate(60, "+ xAxisTranslate + " )").call(x_Axis);

    //Map Data
    //let xMap = function(){return xScale(chlorides[])};
    //let yMap = ()=> {return yScale(density[60])};


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
    let circles = svg.selectAll('circle').data(data);

        circles.enter()
            .append('circle')
            .attr("r", 1.5)
            .attr("class", "dot")
            //.attr("cx",)
            //.attr("cy",)
            //.merge(circles);


});