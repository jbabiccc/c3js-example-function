$(function() {

    loadTemplate();

    function loadTemplate() {

        $.getJSON("/config/board-default.json", function(obj) {
            $("#layout").addClass(obj.options[0].layout);
            $("#copyrightText").html(obj.options[0].copyrightText);

            // Sample Data
    

            $.each(obj.sections, function(key, value) {
                if (value.display == 'yes') {
                    $('#main ').append('<div id="' + value.div + '"' + 'class="zone ' + ' col-xs-' + value.xs + ' col-sm-' + value.sm + ' col-md-' + value.md + ' col-lg-' + value.lg + '"><div class="chart canvas-holder"><canvas id="x-' + value.div + '" ></canvas></div>' + '</div>');
                    
                    

                    if (value.chartType == 'line') {

                        var dataObject = value.dataObject;
                    	// Get context with jQuery - using jQuery's .get() method.
                    	var ctx = $('#x-' + value.div).get(0).getContext("2d");
                    	// This will get the first returned node in the jQuery collection.
                        var myNewChart = new Chart(ctx).Line(impressions, options);
                    }
                    if (value.chartType == 'bar') {
                    	// Get context with jQuery - using jQuery's .get() method.
                    	var ctx = $('#x-' + value.div).get(0).getContext("2d");
                    	// This will get the first returned node in the jQuery collection.
                        var myNewChart = new Chart(ctx).Bar(dataBar, options);
                    }
                    if (value.chartType == 'stackedbar') {
                        // Get context with jQuery - using jQuery's .get() method.
                        var ctx = $('#x-' + value.div).get(0).getContext("2d");
                        // This will get the first returned node in the jQuery collection.
                        var myNewChart = new Chart(ctx).StackedBar(dataStacked, options);
                    }
                    if (value.chartType == 'pie') {
                        // Get context with jQuery - using jQuery's .get() method.
                        var ctx = $('#x-' + value.div).get(0).getContext("2d");
                        // This will get the first returned node in the jQuery collection.
                        var myNewChart = new Chart(ctx).Pie(dataPie,options);
                    }
                    if (value.chartType == 'doughnut') {
                        // Get context with jQuery - using jQuery's .get() method.
                        var ctx = $('#x-' + value.div).get(0).getContext("2d");
                        // This will get the first returned node in the jQuery collection.
                        var myNewChart = new Chart(ctx).Doughnut(dataPie,options);
                    }
                    if (value.chartType == 'html') {
                    	$('#x-' + value.div).remove();
                        $('#' + value.div + ' .chart').load(value.data);
                        $('#' + value.div + ' .chart').css("height","250px")
                    }
                };

            });

			if (obj.options[0].showBorders == 'no') {
           		$('.chart').addClass('noborders');
           	}
        });
    };

    var impressions = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Pageviews 2015",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [4507724976, 3831815142, 4353885640, 4181733261, 4337564293, 4132148554, 4372027859, 4263143041, 4155925321, 4549576063, 457462873, 0]
        }, {
            label: "Pageviews 2014",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [3939515179, 3290063188, 3710347228, 3650088377, 3774225224, 3709617227, 3936865986, 4066011521, 4093372464, 4373781030, 5430811382, 5614784048]
        }]
    };
    

    var dataBar = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }, {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }]
    };

    var dataPie = [
        {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
    ];

    var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
    var randomColorFactor = function(){ return Math.round(Math.random()*255)};

    var dataStacked = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,0.8)",
                highlightFill : "rgba(151,187,205,0.75)",
                highlightStroke : "rgba(151,187,205,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
                fillColor : "rgba(240,73,73,0.5)",
                strokeColor : "rgba(240,73,73,0.8)",
                highlightFill : "rgba(240,73,73,0.75)",
                highlightStroke : "rgba(240,73,73,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]
    };

    var options = {
        responsive: true,
        maintainAspectRatio: false
    }


});
