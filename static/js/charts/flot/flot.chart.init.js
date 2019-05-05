$(function() {
  'use strict';

  $.plot("#flotBar1", [{
    data: [[1, 5], [3, 7], [5, 10], [7, 7],[9,9], [11,5],[13,4], [15,6]]
  }], {
    series: {
      bars: {
        show: true,
        lineWidth: 0,
        fillColor: '#67d7e8'
      }
    },
    grid: {
      borderWidth: 1,
      borderColor: '#eee'
    },
    yaxis: {
      tickColor: '#eee',
      font: {
        color: '#666',
        size: 10
      }
    },
    xaxis: {
      tickColor: '#eee',
      font: {
        color: '#666',
        size: 10
      }
    }
  });

  $.plot("#flotBar2", [{
    data: [[0, 3], [2, 8], [4, 5], [6, 13],[8,5], [10,7],[12,4], [14,6]],
    bars: {
      show: true,
      lineWidth: 0,
      fillColor: '#67d7e8'
    }
  },{
    data: [[0, 3], [2, 8], [4, 5], [6, 13],[8,5], [10,7],[12,4], [14,6]],
    bars: {
      show: true,
      lineWidth: 0,
      fillColor: '#039be5'
    }
  }], {
    grid: {
      borderWidth: 1,
      borderColor: '#eee'
    },
    yaxis: {
      tickColor: '#eee',
      font: {
        color: '#666',
        size: 10
      }
    },
    xaxis: {
      tickColor: '#eee',
      font: {
        color: '#666',
        size: 10
      }
    }
  });

  var newCust = [[0, 2], [1, 3], [2,6], [3, 5], [4, 7], [5, 8], [6, 10]];
  var retCust = [[0, 1], [1, 2], [2,5], [3, 3], [4, 5], [5, 6], [6,9]];

  var plot = $.plot($('#flotLine1'),[{
    data: newCust,
    label: 'New Data Flow',
    color: '#67d7e8'
  },
  {
    data: retCust,
    label: 'Old Data Flow',
    color: '#039be5'
  }],
  {
    series: {
      lines: {
        show: true,
        lineWidth: 1
      },
      shadowSize: 0
    },
    points: {
      show: false,
    },
    legend: {
      noColumns: 1,
      position: 'nw'
    },
    grid: {
      hoverable: true,
      clickable: true,
      borderColor: '#ddd',
      borderWidth: 0,
      labelMargin: 5,
      backgroundColor: '#fff'
    },
    yaxis: {
      min: 0,
      max: 15,
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    },
    xaxis: {
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    }
  });

  var plot = $.plot($('#flotLine2'),[{
    data: newCust,
    label: 'New Data Flow',
    color: '#67d7e8'
  },
  {
    data: retCust,
    label: 'Old Data Flow',
    color: '#039be5'
  }],
  {
    series: {
      lines: {
        show: false
      },
      splines: {
        show: true,
        tension: 0.4,
        lineWidth: 1,
        //fill: 0.4
      },
      shadowSize: 0
    },
    points: {
      show: false,
    },
    legend: {
      noColumns: 1,
      position: 'nw'
    },
    grid: {
      hoverable: true,
      clickable: true,
      borderColor: '#ddd',
      borderWidth: 0,
      labelMargin: 5,
      backgroundColor: '#fff'
    },
    yaxis: {
      min: 0,
      max: 15,
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    },
    xaxis: {
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    }
  });

  var plot = $.plot($('#flotArea1'),[{
    data: newCust,
    label: 'New Data Flow',
    color: '#67d7e8'
  },
  {
    data: retCust,
    label: 'Old Data Flow',
    color: '#039be5'
  }],
  {
    series: {
      lines: {
        show: true,
        lineWidth: 0,
        fill: 0.8
      },
      shadowSize: 0
    },
    points: {
      show: false,
    },
    legend: {
      noColumns: 1,
      position: 'nw'
    },
    grid: {
      hoverable: true,
      clickable: true,
      borderColor: '#ddd',
      borderWidth: 0,
      labelMargin: 5,
      backgroundColor: '#fff'
    },
    yaxis: {
      min: 0,
      max: 15,
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    },
    xaxis: {
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    }
  });

  var plot = $.plot($('#flotArea2'),[{
    data: newCust,
    label: 'New Data Flow',
    color: '#67d7e8'
  },
  {
    data: retCust,
    label: 'Old Data Flow',
    color: '#039be5'
  }],
  {
    series: {
      lines: {
        show: false
      },
      splines: {
        show: true,
        tension: 0.4,
        lineWidth: 0,
        fill: 0.8
      },
      shadowSize: 0
    },
    points: {
      show: false,
    },
    legend: {
      noColumns: 1,
      position: 'nw'
    },
    grid: {
      hoverable: true,
      clickable: true,
      borderColor: '#ddd',
      borderWidth: 0,
      labelMargin: 5,
      backgroundColor: '#fff'
    },
    yaxis: {
      min: 0,
      max: 15,
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    },
    xaxis: {
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    }
  });


  /*********** REAL TIME UPDATES **************/

  var data = [], totalPoints = 50;

  function getRandomData() {
    if (data.length > 0)
    data = data.slice(1);
    while (data.length < totalPoints) {
      var prev = data.length > 0 ? data[data.length - 1] : 50,
      y = prev + Math.random() * 10 - 5;
      if (y < 0) {
        y = 0;
      } else if (y > 100) {
        y = 100;
      }
      data.push(y);
    }
    var res = [];
    for (var i = 0; i < data.length; ++i) {
      res.push([i, data[i]])
    }
    return res;
  }


  // Set up the control widget
  var updateInterval = 1000;

  var plot4 = $.plot('#flotRealtime1', [ getRandomData() ], {
    colors: ['#039be5'],
    series: {
      lines: {
        show: true,
        lineWidth: 1
      },
      shadowSize: 0 // Drawing is faster without shadows
    },
    grid: {
      borderColor: '#ddd',
      borderWidth: 1,
      labelMargin: 5
    },
    xaxis: {
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    }
  });

  var plot5 = $.plot('#flotRealtime2', [ getRandomData() ], {
    colors: ['#039be5'],
    series: {
      lines: {
        show: true,
        lineWidth: 0,
        fill: 0.9
      },
      shadowSize: 0 // Drawing is faster without shadows
    },
    grid: {
      borderColor: '#ddd',
      borderWidth: 1,
      labelMargin: 5
    },
    xaxis: {
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      color: '#eee',
      font: {
        size: 10,
        color: '#6a7074'
      }
    }
  });

  function update_plot4() {
    plot4.setData([getRandomData()]);
    plot4.draw();
    setTimeout(update_plot4, updateInterval);
  }

  function update_plot5() {
    plot5.setData([getRandomData()]);
    plot5.draw();
    setTimeout(update_plot5, updateInterval);
  }

  update_plot4();
  update_plot5();


  /**************** PIE CHART *******************/
  var piedata = [
    { label: "Data 1", data: [[1,15]], color: '#50c37f'},
    { label: "Data 2", data: [[1,25]], color: '#ff5252'},
    { label: "Data 3", data: [[1,80]], color: '#039be5'},
    { label: "Data 4", data: [[1,60]], color: '#7e57c2'},
    { label: "Data 5", data: [[1,75]], color: '#fb8c00'}
  ];

  $.plot('#flotPie1', piedata, {
    series: {
      pie: {
        show: true,
        radius: 1,
        label: {
          show: true,
          radius: 2/3,
          formatter: labelFormatter,
          threshold: 0.1
        }
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    }
  });

  $.plot('#flotPie2', piedata, {
    series: {
      pie: {
        show: true,
        radius: 1,
        innerRadius: 0.5,
        label: {
          show: true,
          radius: 2/3,
          formatter: labelFormatter,
          threshold: 0.1
        }
      }
    },
    grid: {
      hoverable: true,
      clickable: true
    }
  });

  function labelFormatter(label, series) {
    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
  }

});