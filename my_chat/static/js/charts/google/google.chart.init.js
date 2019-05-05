// Histogram Charts Starts
(function($) {

  google.charts.load("current", {
    packages: ["corechart"]
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Quarks', 'Leptons', 'Gauge Bosons', 'Scalar Bosons'],
      [2 / 3, 1, 1, 1],
      [2 / 3, 1, 0, 1],
      [2 / 3, 1, 0, 1],
      [1 / 3, 0, 1, 1],
      [1 / 3, 0, 1, 1],
      [1 / 3, 0, 1, 1],
      [1 / 3, 0, 1, 1]
    ]);

    var options = {
      title: 'Data Table particles',
      legend: {
        position: 'top',
        maxLines: 2
      },
      colors: ['#50c37f', '#67d7e8', '#F36368', '#ff5252'],
      interpolateNulls: true,
      chartArea: {
        width: 410
      },
    };

    var chart = new google.visualization.Histogram(document.getElementById('histogram-chart'));
    chart.draw(data, options);
  }

})(jQuery);

// Histogram Charts Ends


// Area Chart Starts
(function($) {

  google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2013', 1000, 400],
      ['2014', 1170, 460],
      ['2015', 660, 1120],
      ['2016', 1030, 540]
    ]);

    var options = {
      title: 'Company Performance',
      hAxis: {
        title: 'Year',
        titleTextStyle: {
          color: '#333'
        }
      },
      colors: ['#50c37f', '#67d7e8', '#F36368', '#ff5252'],
      chartArea: {
        width: 500
      },
      vAxis: {
        minValue: 0
      }
    };

    var AreaChart = new google.visualization.AreaChart(document.getElementById('area-chart'));
    AreaChart.draw(data, options);
  }

})(jQuery);
// Area Chart Ends



// Donut Chart Starts

google.charts.load("current", {
  packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ]);

  var options = {
    title: 'My Daily Activities',
    pieHole: 0.4,
    colors: ['#50c37f', '#67d7e8', '#F36368', '#ff5252'],
    chartArea:{left:0,top:0,right:0,bottom:0,width:"100%",height:"100%"},
  };

  var Donutchart = new google.visualization.PieChart(document.getElementById('donut-chart'));
  Donutchart.draw(data, options);
}


// Donut Chart Ends


// Curve Chart Starts
(function($) {

  google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540]
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: {
        position: 'bottom'
      },
      colors: ['#50c37f', '#67d7e8', '#F36368', '#ff5252'],
      chartArea: {
      },
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }
})(jQuery);

// Region Charts Starts

google.charts.load('current', {
  'packages': ['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD2jlT6C_to6X1mMvR9yRWeRvpIgTXgddM'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['Germany', 700],
    ['United States', 350],
    ['United Kingdom', 500],
    ['Iran', 300],
    ['France', 600],
    ['RU', 500]
  ]);

  var options = {
    colorAxis: {
      colors: ['#50c37f', '#ff5252', '#F36368', '#ff5252']
    }
  };
  var chart = new google.visualization.GeoChart(document.getElementById('regions-chart'));

  chart.draw(data, options);
}

// Region Charts Ends


// Bar Charts Starts

google.charts.load('current', {
  'packages': ['bar']
});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ['', 'Percentage'],
    ["2013", 44],
    ["2014", 31],
    ["2015", 12],
    ["2016", 10],
    ['2017', 3]
  ]);

  var options = {
    title: 'Approximating Normal Distribution',
    legend: {
      position: 'none'
    },
    colors: ['#50c37f'],

    chartArea: {
      width: 401
    },
    hAxis: {
      ticks: [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1]
    },
    bar: {
      gap: 0
    },

    histogram: {
      bucketSize: 0.02,
      maxNumBuckets: 200,
      minValue: -1,
      maxValue: 1
    }
  };

  var chart = new google.charts.Bar(document.getElementById('bar-chart'));
  chart.draw(data, options);
};


// Bar Charts Ends