Morris.Bar({
    element: 'graph-bar',
    data: [
        {x: '2018 Q1', y: 3, z: 2, a: 3},
        {x: '2018 Q2', y: 2, z: 1, a: 2},
        {x: '2018 Q3', y: 1, z: 2, a: 3.5},
        {x: '2018 Q4', y: 2, z: 3.5, a: 3},
        {x: '2018 Q5', y: 3, z: 2, a: 3},
        {x: '2018 Q6', y: 2, z: 1, a: 2},
        {x: '2018 Q7', y: 1, z: 2, a: 3.5},
        {x: '2018 Q8', y: 2, z: 3.5, a: 3}
    ],
    xkey: 'x',
    ykeys: ['y', 'z', 'a'],
    labels: ['Y', 'Z', 'A'],
    gridLineColor: 'transparent',
    barColors:['rgba(255, 255, 255, 0.5)']

});


var day_data = [
    {"elapsed": "I", "value": 14},
    {"elapsed": "II", "value": 24},
    {"elapsed": "III", "value": 20},
    {"elapsed": "IV", "value": 32},
    {"elapsed": "V", "value": 30},
    {"elapsed": "VI", "value": 22},
    {"elapsed": "VII", "value": 15},
    {"elapsed": "VIII", "value": 26},
    {"elapsed": "IX", "value": 32},
    {"elapsed": "X", "value": 39}
];

Morris.Line({
    element: 'graph-line',
    data: day_data,
    xkey: 'elapsed',
    ykeys: ['value'],
    labels: ['value'],
    lineColors:['#fff'],
    gridLineColor: 'transparent',
    parseTime: false
});




//Use Morris.Area instead of Morris.Line
Morris.Area({
    element: 'graph-area-line',
    behaveLikeLine: false,
    data: [
        {x: '2011 Q1', y: 3, z: 3},
        {x: '2011 Q2', y: 2, z: 1},
        {x: '2011 Q3', y: 2, z: 4},
        {x: '2011 Q4', y: 3, z: 3},
        {x: '2011 Q5', y: 3, z: 4}
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Y', 'Z'],
    lineColors:['#E67A77','#79D1CF']



});





// Use Morris.Area instead of Morris.Line
Morris.Donut({
    element: 'graph-donut',
    data: [
        {value: 60, label: 'woo', formatted: 'at least 60%' },
        {value: 20, label: 'far', formatted: 'approx. 20%' },
        {value: 10, label: 'faz', formatted: 'approx. 10%' },
        {value: 5, label: 'A long label', formatted: 'at most 5%' }
    ],
    backgroundColor: '#fff',
    labelColor: '#1fb5ac',
    colors: [
        '#ff5252','#fb8c00','#039be5','#67d7e8'
    ],
    formatter: function (x, data) { return data.formatted; }
});



// Use Morris.Area instead of Morris.Line
Morris.Area({
    element: 'graph-area',
    behaveLikeLine: true,
    gridEnabled: false,
    gridLineColor: '#ddd',
    axes: true,
    fillOpacity:.8,
    data: [
        {period: '2016 Q1', desktop: 1000, mobile: 10, ipad: 10},
        {period: '2016 Q2', desktop: 10000, mobile: 7294, ipad: 18441},
        {period: '2016 Q3', desktop: 2912, mobile: 12969, ipad: 3501},
        {period: '2016 Q4', desktop: 3767, mobile: 3597, ipad: 5689},
        {period: '2018 Q1', desktop: 16810, mobile: 3914, ipad: 12293},
        {period: '2018 Q2', desktop: 5670, mobile: 14293, ipad: 2881},
        {period: '2018 Q3', desktop: 4820, mobile: 3795, ipad: 1588},
        {period: '2018 Q4', desktop: 20687, mobile: 5967, ipad: 10175},
        {period: '2018 Q1', desktop: 35073, mobile: 30460, ipad: 22028},
        {period: '2018 Q2', desktop: 2000, mobile: 5713, ipad: 1791}


    ],
    lineColors:['#ff5252','#039be5','#7e57c2'],
    xkey: 'period',
    ykeys: ['desktop', 'mobile', 'ipad'],
    labels: ['desktop', 'mobile', 'iPod Touch'],
    pointSize: 0,
    lineWidth: 0,
    hideHover: 'auto'

});





