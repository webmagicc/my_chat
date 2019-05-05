/*Morris Init*/
$(function() {
    "use strict";

    if($('#morris-area-chart').length > 0)
        // Area Chart
        Morris.Area({
            element: 'morris-area-chart',
            data: [{
                period: '2016 Q1',
                Desktop: 2666,
                iPhone: null,
                iPad: 2647
            }, {
                period: '2016 Q2',
                Desktop: 2778,
                iPhone: 2294,
                iPad: 2441
            }, {
                period: '2016 Q3',  
                Desktop: 4912,
                iPhone: 1969,
                iPad: 2501
            }, {
                period: '2016 Q4',
                Desktop: 3767,
                iPhone: 3597,
                iPad: 5689
            }, {
                period: '2017 Q1',
                Desktop: 6810,
                iPhone: 1914,
                iPad: 2293
            }, {
                period: '2017 Q2',
                Desktop: 5670,
                iPhone: 4293,
                iPad: 1881
            }, {
                period: '2017 Q3',
                Desktop: 4820,
                iPhone: 3795,
                iPad: 1588
            }, {
                period: '2017 Q4',
                Desktop: 13073,
                iPhone: 5967,
                iPad: 5175
            }, {
                period: '2018 Q1',
                Desktop: 8687,
                iPhone: 15460,
                iPad: 12028
            }, {
                period: '2018 Q2',
                Desktop: 7432,
                iPhone: 5713,
                iPad: 1791
            }],
            xkey: 'period',
            ykeys: ['Desktop', 'iPhone', 'iPad'],
            labels: ['Desktop', 'iPhone', 'iPod Touch'],
            pointSize: 0,
            lineWidth:0,
            fillOpacity: .7,
            pointStrokeColors:['#ff5252', '#039be5', '#fb8c00'],
            behaveLikeLine: true,
            grid: false,
            hideHover: 'auto',
            lineColors: ['#ff5252', '#039be5', '#fb8c00'],
            resize: true,
            redraw: true,
            smooth: true,
            gridTextColor:'#878787'
        });

    if($('#morris-donut-chart').length > 0) {
        // Donut Chart
        Morris.Donut({
            element: 'morris-donut-chart',
            data: [{
                label: "Download Sales",
                value: 12
            }, {
                label: "In-Store Sales",
                value: 30
            }, {
                label: "Mail-Order Sales",
                value: 20
            }],
            colors: ['rgba(74, 162, 60,1)', 'rgba(248, 179, 45,1)', 'rgba(243, 57, 35,1)'],
            resize: true,
            labelColor: '#878787',
        });
        $("div svg text").attr("style","font-family: Roboto").attr("font-weight","400");
    }   

    if($('#morris-line-chart').length > 0)
        // Line Chart
        Morris.Line({
            // ID of the element in which to draw the chart.
            element: 'morris-line-chart',
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: [{
                d: '2017-12-01',
                visits: 802
            }, {
                d: '2017-12-02',
                visits: 783
            }, {
                d: '2017-12-03',
                visits: 820
            }, {
                d: '2017-12-04',
                visits: 839
            }, {
                d: '2017-12-05',
                visits: 792
            }, {
                d: '2017-12-06',
                visits: 859
            }, {
                d: '2017-12-07',
                visits: 790
            }, {
                d: '2017-12-08',
                visits: 1680
            }, {
                d: '2017-12-09',
                visits: 1592
            }, {
                d: '2017-12-10',
                visits: 1420
            }, {
                d: '2017-12-11',
                visits: 882
            }, {
                d: '2017-12-12',
                visits: 889
            }, {
                d: '2017-12-13',
                visits: 819
            }, {
                d: '2017-12-14',
                visits: 849
            }, {
                d: '2017-12-15',
                visits: 870
            }, {
                d: '2017-12-16',
                visits: 1063
            }, {
                d: '2017-12-17',
                visits: 1192
            }, {
                d: '2017-12-18',
                visits: 1224
            }, {
                d: '2017-12-19',
                visits: 1329
            }, {
                d: '2017-12-20',
                visits: 1329
            }, {
                d: '2017-12-21',
                visits: 1239
            }, {
                d: '2017-12-22',
                visits: 1190
            }, {
                d: '2017-12-23',
                visits: 1312
            }, {
                d: '2017-12-24',
                visits: 1293
            }, {
                d: '2017-12-25',
                visits: 1283
            }, {
                d: '2017-12-26',
                visits: 1248
            }, {
                d: '2017-12-27',
                visits: 1323
            }, {
                d: '2017-12-28',
                visits: 1390
            }, {
                d: '2017-12-29',
                visits: 1420
            }, {
                d: '2017-12-30',
                visits: 1529
            }, {
                d: '2017-12-31',
                visits: 1892
            }, ],
            // The name of the data record attribute that contains x-visitss.
            xkey: 'd',
            // A list of names of data record attributes that contain y-visitss.
            ykeys: ['visits'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['Visits'],
            // Disables line smoothing
            pointSize: 1,
            pointStrokeColors:['#ff5252'],
            behaveLikeLine: true,
            grid:false,
            gridTextColor:'#878787',
            lineWidth: 2,
            smooth: true,
            hideHover: 'auto',
            lineColors: ['#ff5252'],
            resize: true
            
        });

    if($('#morris-bar-chart').length > 0)
       // Bar Chart
        Morris.Bar({
            element: 'morris-bar-chart',
            data: [{
                device: 'Desktop',
                geekbench: 1136
            }, {
                device: 'Laptop',
                geekbench: 700
            }, {
                device: 'iPhone 7',
                geekbench: 1075
            }, {
                device: 'iPhone 7S',
                geekbench: 780
            }, {
                device: 'iPhone 8',
                geekbench: 1655
            }, {
                device: 'iPhone X',
                geekbench: 1071
            }],
            xkey: 'device',
            ykeys: ['geekbench'],
            labels: ['Geekbench'],
            barRatio: 0.4,
            xLabelAngle: 35,
            pointSize: 1,
            barOpacity: 1,
            pointStrokeColors:['#4aa23c'],
            behaveLikeLine: true,
            grid: false,
            gridTextColor:'#878787',
            hideHover: 'auto',
            barColors: ['#67d7e8'],
            resize: true
            
        });
    
    if($('#morris-extra-line-chart').length > 0)
        Morris.Line({
        element: 'morris-extra-line-chart',
        data: [{
            period: '2011',
            iphone: 50,
            ipad: 80,
            itouch: 20
        }, {
            period: '2012',
            iphone: 130,
            ipad: 100,
            itouch: 80
        }, {
            period: '2013',
            iphone: 80,
            ipad: 60,
            itouch: 70
        }, {
            period: '2014',
            iphone: 70,
            ipad: 200,
            itouch: 140
        }, {
            period: '2015',
            iphone: 180,
            ipad: 150,
            itouch: 140
        }, {
            period: '2016',
            iphone: 105,
            ipad: 100,
            itouch: 80
        },
         {
            period: '2017',
            iphone: 250,
            ipad: 150,
            itouch: 200
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 1,
        fillOpacity: 0,
        lineWidth:1,
        pointStrokeColors:['#4aa23c', '#f8b32d', '#f33923'],
        behaveLikeLine: true,
        grid: false,
        hideHover: 'auto',
        lineColors: ['#ff5252', '#039be5', '#50c37f'],
        resize: true,
        gridTextColor:'#878787'
        
    });
    
    if($('#morris-extra-bar-chart').length > 0)
        // Morris bar chart
        Morris.Bar({
            element: 'morris-extra-bar-chart',
            data: [{
                y: '2006',
                a: 100,
                b: 90,
                c: 60
            }, {
                y: '2007',
                a: 75,
                b: 65,
                c: 40
            }, {
                y: '2008',
                a: 50,
                b: 40,
                c: 30
            }, {
                y: '2009',
                a: 75,
                b: 65,
                c: 40
            }, {
                y: '2010',
                a: 50,
                b: 40,
                c: 30
            }, {
                y: '2011',
                a: 75,
                b: 65,
                c: 40
            }, {
                y: '2012',
                a: 100,
                b: 90,
                c: 40
            }],
            xkey: 'y',
            ykeys: ['a', 'b', 'c'],
            labels: ['A', 'B', 'C'],
            barColors:['#ff5252', '#7e57c2', '#67d7e8'],
            barOpacity:1,
            hideHover: 'auto',
            grid: false,
            resize: true,
            gridTextColor:'#878787'
            
        });

});