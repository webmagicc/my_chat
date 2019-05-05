$(function() {
    "use strict";
    
    var data = [{
        label: "65% Channel Sell",
        data: 35
    }, {
        label: "35% Direct Sell",
        data: 65
    }];

    var options = {
        series: {
            pie: {
                show: true
            }
        },
        legend: {
            show: true
        },
        grid: {
            hoverable: true,
            clickable: true
        },
        colors: ["#00bfa5", "#039be5"],
        tooltip: true,
        tooltipOpts: {
            defaultTheme: true
        }
    };
    $.plot($("#ct-chart-pie"), data, options);
});