# c3js Example w/function

If you are looking to get started with charting adn javascript, download the examples of the c3js.org charting components. 

## Getting Started

TO get started, download the files and unzip to the root of your project. Run the index.html file and see the 6 examples of different charts. Line charts, pie charts, area charts, spline charts, bar charts and stacked bar charts.

### Prerequisites

All the prerequisites are included in the /js and /css folders.

### Installing

I recommend using a local web server. For MacOS or Windows, I use MAMP. The free version works fine. I do recommend the pro version if you are running a number of local test sites. 

```
//simple function
createChart(target, type, data);

 var chart = c3.generate({
    bindto: target,
    data: {
        columns: data,
        type: type
    }
});
```

## Built With

* [c3js.org](http://www.c3js.org) - The charting framework used
* [jQuery](http://www.jquery.com/) - jQuery is a fast, small, and feature-rich JavaScript library.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

