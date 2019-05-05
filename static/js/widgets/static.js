(function($) {
	'use strict';
	$(function() {

		// Chart for client
		var densityCanvas = document.getElementById("chart1");

		var densityData = {
			label: '',
			data: [1427, 2543, 2314, 1933, 1626, 1087, 971, 1638],
			backgroundColor: '#67d7e8',
			borderWidth: 0,
			yAxisID: "y-axis-density"
		};

		var visitorData = {
			label: '',
			data: [1000, 1500, 2000, 1600, 1300, 1200, 1200, 1800],
			backgroundColor: '#039be5',
			borderWidth: 0,
			yAxisID: "y-axis-gravity"
		};

		var visits = {
			labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
			datasets: [densityData, visitorData]
		};

		var chartOptions = {
			gridLines: { display: false },
			drawBorder: false,
			zeroLineColor: 'rgba(0, 0, 0, 0.25)',
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					barPercentage: 3,
					scaleFontSize: 0,
					categoryPercentage: 0.3,
					ticks: { display: false },
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false
					},
					ticks: {
						display: false
					}
				}],
				yAxes: [{
					ticks: { display: false },
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false
					},
					ticks: {
						display: false
					},
					id: "y-axis-density"
				}, {
					ticks: { display: false },
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false
					},
					ticks: {
						display: false
					},
					id: "y-axis-gravity"
				}]
			}
		};

		var barChart = new Chart(densityCanvas, {
			type: 'bar',
			data: visits,
			options: chartOptions,
			ticks: { display: false },
			gridLines: {
				display: false,
			},
		});

		// Chart for Order
		var densityCanvas = document.getElementById("order");

		var densityData = {
			label: '',
			data: [1427, 2543, 2314, 1933, 1626, 1087, 971, 1638],
			backgroundColor: '#fb8c00',
			borderWidth: 0,
			yAxisID: "y-axis-density"
		};

		var visitorData = {
			label: '',
			data: [1000, 1500, 2000, 1600, 1300, 1200, 1200, 1800],
			backgroundColor: '#facd96',
			borderWidth: 0,
			yAxisID: "y-axis-gravity"
		};

		var visits = {
			labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
			datasets: [densityData, visitorData]
		};

		var chartOptions = {
			gridLines: { display: false },
			drawBorder: false,
			zeroLineColor: 'rgba(0, 0, 0, 0.25)',
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					barPercentage: 3,
					scaleFontSize: 0,
					categoryPercentage: 0.3,
					ticks: { display: false },
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false
					},
					ticks: {
						display: false
					}
				}],
				yAxes: [{
					ticks: { display: false },
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false
					},
					ticks: {
						display: false
					},
					id: "y-axis-density"
				}, {
					ticks: { display: false },
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false
					},
					ticks: {
						display: false
					},
					id: "y-axis-gravity"
				}]
			}
		};

		var barChart = new Chart(densityCanvas, {
			type: 'bar',
			data: visits,
			options: chartOptions,
			ticks: { display: false },
			gridLines: {
				display: false,
			},
		});

		// Chart for Copy
		var densityCanvas = document.getElementById("copy");

		var densityData = {
			label: '',
			data: [1427, 2543, 2314, 1933, 1626, 1087, 971, 1638],
			backgroundColor: '#ff5252',
			borderWidth: 0,
			yAxisID: "y-axis-density"
		};

		var visitorData = {
			label: '',
			data: [1000, 1500, 2000, 1600, 1300, 1200, 1200, 1800],
			backgroundColor: '#ff9e9e',
			borderWidth: 0,
			yAxisID: "y-axis-gravity"
		};

		var visits = {
			labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
			datasets: [densityData, visitorData]
		};

		var chartOptions = {
			gridLines: { display: false },
			drawBorder: false,
			zeroLineColor: 'rgba(0, 0, 0, 0.25)',
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					barPercentage: 3,
					scaleFontSize: 0,
					categoryPercentage: 0.3,
					ticks: { display: false },
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false
					},
					ticks: {
						display: false
					}
				}],
				yAxes: [{
					ticks: { display: false },
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false
					},
					ticks: {
						display: false
					},
					id: "y-axis-density"
				}, {
					ticks: { display: false },
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false
					},
					ticks: {
						display: false
					},
					id: "y-axis-gravity"
				}]
			}
		};

		var barChart = new Chart(densityCanvas, {
			type: 'bar',
			data: visits,
			options: chartOptions,
			ticks: { display: false },
			gridLines: {
				display: false,
			},
		});

		// Chart for Invoices
		var densityCanvas = document.getElementById("invoices");

		var densityData = {
			label: '',
			data: [1427, 2543, 2314, 1933, 1626, 1087, 971, 1638],
			backgroundColor: '#50c37f',
			borderWidth: 0,
			yAxisID: "y-axis-density"
		};

		var visitorData = {
			label: '',
			data: [1000, 1500, 2000, 1600, 1300, 1200, 1200, 1800],
			backgroundColor: '#9be4b9',
			borderWidth: 0,
			yAxisID: "y-axis-gravity"
		};

		var visits = {
			labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
			datasets: [densityData, visitorData]
		};

		var chartOptions = {
			gridLines: { display: false },
			drawBorder: false,
			zeroLineColor: 'rgba(0, 0, 0, 0.25)',
			legend: {
				display: false
			},
			scales: {
				xAxes: [{
					barPercentage: 3,
					scaleFontSize: 0,
					categoryPercentage: 0.3,
					ticks: { display: false },
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false
					},
					ticks: {
						display: false
					}
				}],
				yAxes: [{
					ticks: { display: false },
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false
					},
					ticks: {
						display: false
					},
					id: "y-axis-density"
				}, {
					ticks: { display: false },
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false
					},
					ticks: {
						display: false
					},
					id: "y-axis-gravity"
				}]
			}
		};

		var barChart = new Chart(densityCanvas, {
			type: 'bar',
			data: visits,
			options: chartOptions,
			ticks: { display: false },
			gridLines: {
				display: false,
			},
		});


		$('#sparkline1').sparkline('html', {
			width: 400,
			height: 100,
			lineColor: '#039be5',
			fillColor: '#039be5',
		});

		$('#sparkline2').sparkline('html', {
			width: 400,
			height: 100,
			lineColor: '#fb8c00',
			fillColor: '#fb8c00',
		});

		$('#sparkline3').sparkline('html', {
			width: 400,
			height: 100,
			lineColor: '#ff5252',
			fillColor: '#ff5252',
		});

		$('#sparkline4').sparkline('html', {
			width: 400,
			height: 100,
			lineColor: '#50c37f',
			fillColor: '#50c37f',
		});


	});
})(jQuery);