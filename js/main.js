$(function() {

    // Data Sets, specific to each chart type
    var linedata = [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
    ];

    var splinedata = [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 100, 140, 200, 150, 50]
    ];

    var areadata = [
        ['data1', 300, 350, 300, 0, 0, 0],
        ['data2', 130, 100, 140, 200, 150, 50]
    ];

    var bardata = [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 100, 140, 200, 150, 50]
    ];

    var stackedbardata = [
        ['data1', -30, 200, 200, 400, -150, 250],
        ['data2', 130, 100, -100, 200, -150, 50],
        ['data3', -230, 200, 200, -300, 250, 250]
    ];

    var piedata = [
        ['data1', 30],
        ['data2', 120]
    ];


    // Options, specific to each chart type
    var barOptions = {
        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }
    };


    function createChart(target, type, data, options) {

        if (type === 'bar' | type === 'line' | type === 'spline' | type === 'area-spline') {
            var chart = c3.generate({
                bindto: target,
                data: {
                    columns: data,
                    type: type
                }
            });
        };

        if (type === 'stackedbar') {

            var groups = [];

            $.each(data, function(index, value) {
                groups.push(value[0]);
            });

            var chart = c3.generate({
                bindto: target,
                data: {
                    columns: data,
                    type: 'bar',
                    groups: [groups]
                },
                grid: {
                    y: {
                        lines: [{ value: 0 }]
                    }
                }
            });

        };

        if (type === 'pie') {
           // alert("pie")
            var chart = c3.generate({
                bindto: target,
                data: {
                    columns: data,
                    type: 'pie',
                    onclick: function(d, i) { console.log("onclick", d, i); },
                    onmouseover: function(d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function(d, i) { console.log("onmouseout", d, i); }
                }
            });
        };

    };

    // Create all charts
    createChart("#linechart", "line", linedata);
    createChart("#splinechart", "spline", splinedata);
    createChart("#areachart", "area-spline", areadata);
    createChart("#barchart", "bar", bardata, barOptions);
    createChart("#stackedbarchart", "stackedbar", stackedbardata);
    createChart("#piechart", "pie", piedata);

});
