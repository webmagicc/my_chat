$(document).ready(function() {
    "use strict";

    $('#world-map').vectorMap({
        map: 'world_mill_en',
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#b6c4cc',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            hover: {
                fill: '#039be5',
                cursor: 'pointer'
            },
            selected: {
                fill: 'yellow'
            }
        }
    });

    $('#usa').vectorMap({
        map : 'us_aea_en',
        backgroundColor : 'transparent',
        regionStyle : {
            initial : {
                fill : '#b6c4cc'
            }
        }
    });

    $('#australia').vectorMap({
        map : 'au_mill',
        backgroundColor : 'transparent',
        regionStyle : {
            initial : {
                fill : '#b6c4cc'
            }
        }
    });

    $('#uk').vectorMap({
        map : 'uk_mill_en',
        backgroundColor : 'transparent',
        regionStyle : {
            initial : {
                fill : '#b6c4cc'
            }
        }
    });

    $('#source1').sparkline('html', {
        width: 100,
        height: 30,
        lineColor: '#039be5',
        lineWidth: 3,
        fillColor: 'rgba(3,155,229,0.2)'
    });

    $('#source2').sparkline('html', {
        width: 100,
        height: 30,
        lineColor: '#fb8c00',
        lineWidth: 3,
        fillColor: 'rgba(251,140,0,0.2)'
    });

    $('#source3').sparkline('html', {
        width: 100,
        height: 30,
        lineColor: '#7e57c2',
        lineWidth: 3,
        fillColor: 'rgba(126,87,194,0.2)'
    });

    $('#source4').sparkline('html', {
        width: 100,
        height: 30,
        lineColor: '#50c37f',
        lineWidth: 3,
        fillColor: 'rgba(80,192,172,0.2)'
    });

    $('#source5').sparkline('html', {
        width: 100,
        height: 30,
        lineColor: '#ff5252',
        lineWidth: 3,
        fillColor: 'rgba(255,82,82,0.2)'
    });


    var newCust = [[0, 2], [1, 3], [2,6], [3, 5], [4, 7], [5, 8], [6, 10]];

    var plot = $.plot($('#flotLine1'),[{
        data: newCust,
        label: 'New Data Flow',
        color: 'rgba(255, 255, 255, 0.5)'
    }],
    {
        series: {
            lines: {
                show: true,
                lineColor: '#fff',
                lineWidth: 1
            },
            shadowSize: 0
        },
        points: {
            show: true,
        },
        legend: {
            show: false
        },
        grid: {
            show: false,
            hoverable: false,
            clickable: false,
            borderColor: '#fff',
            borderWidth: 1,
            labelMargin: 0
        }
    });

    /* Gauge Chart */
    var opts = {
        angle: -0.25, // The span of the gauge arc
        lineWidth: 0.05, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
        length: 0.4, // // Relative to gauge radius
        strokeWidth: 0.3, // The thickness
        color: '#7e57c2' // Fill color
    },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#7e57c2',   // Colors
        colorStop: '#7e57c2',    // just experiment with them
        strokeColor: '#e5ddf3',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support

    };
    var target = document.getElementById('gauge'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.setTextField(document.getElementById("data-count"));
    gauge.maxValue = 5000; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(2987); // set actual value


});

