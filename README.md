# c3js Example w/function

If you are looking to get started with charting and javascript, download the examples of the c3js.org charting components. 

## Getting Started

To get started, download the files and unzip to the root of your project. Run the index.html file and see the 6 examples of different charts. Line charts, pie charts, area charts, spline charts, bar charts and stacked bar charts.

### Prerequisites

All the prerequisites are included in the /js and /css folders.

### Usage

I recommend using a local web server. For MacOS or Windows, I use MAMP. The free version works fine. I do recommend the pro version if you are running a number of local test sites. 

```
//data 
var data1 = ['data1', 230, 190, 300, 500, 300, 400];

//simple function
createChart("#chart", "line", data1);

function createChart(target, type, data) {
  var chart = c3.generate({
     bindto: target,
     data: {
         columns: data,
         type: type
     }
  });
}
```

## Resources
* bindto = http://c3js.org/reference.html#bindto
* data = http://c3js.org/reference.html#data-url
* type = http://c3js.org/reference.html#data-type

for dynamic charts you can also access the window object for the 'chart' variable using the 'target'
window[target] 

( var chart becomes var window[target] )

## Built With

* [c3js.org](http://www.c3js.org) - The charting framework used
* [jQuery](http://www.jquery.com/) - jQuery is a fast, small, and feature-rich JavaScript library.

## License

This project is licensed under the MIT License

