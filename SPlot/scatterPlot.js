// Instantiate the size of the SVG
var width = 800;
var height = 500;

var svg = d3.select("svg").attr("height", height).attr("width", width);


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


});