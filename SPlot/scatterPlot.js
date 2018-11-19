// Instantiate the size of the SVG
var width = 800;
var height = 500;

//Import the data set and isolate the density and chlorides
d3.csv("WhiteWineCSV.csv", (data) => {

    //Get the chlorides
    let chlorides = data.map((x) => {
        return parseFloat(x.chlorides)
    });


    //Get the Density
    let density = data.map((y) => {
        return parseFloat(y.density)
    });


    // Create the X and Y Axis
    var svg = d3.select("svg").attr("height", height).attr("width", width);

    //Create The Scales
    let xScale = d3.scaleLinear().domain([d3.min(chlorides), d3.max(chlorides)]).range([0, width - 100]);

    let yScale = d3.scaleLinear().domain([d3.min(density), d3.max(density)]).range([height/2, 0]);

    //Create the Line
    let x_Axis = d3.axisBottom().scale(xScale);

    let y_Axis = d3.axisLeft().scale(yScale);

    //Insert Axis into the SVG
    svg.append("g").attr("transform","translate(50,10)").call(y_Axis);

    let xAxisTranslate = height/2 + 10;
    svg.append("g").attr("transform","translate(50, "+ xAxisTranslate + " )").call(x_Axis);

});