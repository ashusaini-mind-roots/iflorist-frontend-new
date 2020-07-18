$(function() {
	'use strict';

	

	/* Echart5*/
	var chartdata3 = [
		{
		  name: 'sales',
		  type: 'bar',
		  stack: 'Stack',
		  barMaxWidth: 15,
		  data: [14, 18, 20, 14, 29, 21, 25, 14, 24,20]
		},
		{
		  name: 'Profit',
		  type: 'bar',
		  stack: 'Stack',
		  barMaxWidth: 15,
		  data: [12, 14, 15, 50, 24, 24, 10, 20 ,30,40]
		}
	];
	var option5 = {
		grid: {
		  top: '6',
		  right: '0',
		  bottom: '17',
		  left: '25',
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer:
			{
				label: {
					show: false,
				}
			}
		},
		xAxis: {
		  data: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10'],
		  axisLine: {
			lineStyle: {
			  color: 'rgba(119, 119, 142, 0.2)'
			}
		  },
		  axisLabel: {
			fontSize: 10,
			color: '#77778e'
		  }
		},
		yAxis: {
		  splitLine: {
			lineStyle: {
			  color: 'rgba(119, 119, 142, 0.2)'
			}
		  },
		  axisLine: {
			lineStyle: {
			  color: 'rgba(119, 119, 142, 0.2)'
			}
		  },
		  axisLabel: {
			fontSize: 10,
			color: '#77778e'
		  }
		},
		series: chartdata3,
		color:[ '#1CABA0', '#cc3465']
	};
	var chart5 = document.getElementById('echart5');
	var barChart5 = echarts.init(chart5);
	barChart5.setOption(option5);
	
	/********E6***/
	var chartdata2 = [
		{
		  name: 'sales',
		  type: 'bar',
		  stack: 'Stack',
		  barMaxWidth: 15,	
		  data: [14, 18, 20, 14, 29, 21, 25, 14, 24,21]
		},
		{
		  name: 'Profit',
		  type: 'bar',
		  stack: 'Stack',
		  barMaxWidth: 15,	
		  data: [12, 14, 15, 50, 24, 24, 10, 20 ,30,10]
		}
	];
	var option2 = {
		grid: {
		  top: '6',
		  right: '0',
		  bottom: '17',
		  left: '25',
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer:
			{
				label: {
					show: false,
				}
			}
		},
		xAxis: {
		  data: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10'],
		  axisLine: {
			lineStyle: {
			  color: 'rgba(119, 119, 142, 0.2)'
			}
		  },
		  axisLabel: {
			fontSize: 10,
			color: '#77778e'
		  }
		},
		yAxis: {
		  splitLine: {
			lineStyle: {
			  color: 'rgba(119, 119, 142, 0.2)'
			}
		  },
		  axisLine: {
			lineStyle: {
			  color: 'rgba(119, 119, 142, 0.2)'
			}
		  },
		  axisLabel: {
			fontSize: 10,
			color: '#77778e'
		  }
		},
		series: chartdata2,
		color:[ '#1CABA0', '#cc3465']
	};
	var dashboardchart2 = document.getElementById('dashboardchart2');
	var bardashboardchart2 = echarts.init(dashboardchart2);
	bardashboardchart2.setOption(option2);
	
	/**Dashboard 3*/
	
	
	var chartdata3 = [
		{
		  name: 'sales',
		  type: 'bar',
		  stack: 'Stack',
		  barMaxWidth: 15,
		  data: [14, 18, 20, 14, 29, 21, 25, 14, 24,29]
		},
		{
		  name: 'Profit',
		  type: 'bar',
		  stack: 'Stack',
		  barMaxWidth: 15,	
		  data: [12, 14, 15, 50, 24, 24, 10, 20 ,30,15]
		}
	];
	var option3 = {
		grid: {
		  top: '6',
		  right: '0',
		  bottom: '17',
		  left: '25',
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer:
			{
				label: {
					show: false,
				}
			}
		},
		xAxis: {
		  data: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10'],
		  axisLine: {
			lineStyle: {
			  color: 'rgba(119, 119, 142, 0.2)'
			}
		  },
		  axisLabel: {
			fontSize: 10,
			color: '#77778e'
		  }
		},
		yAxis: {
		  splitLine: {
			lineStyle: {
			  color: 'rgba(119, 119, 142, 0.2)'
			}
		  },
		  axisLine: {
			lineStyle: {
			  color: 'rgba(119, 119, 142, 0.2)'
			}
		  },
		  axisLabel: {
			fontSize: 10,
			color: '#77778e'
		  }
		},
		series: chartdata3,
		color:[ '#1CABA0', '#cc3465']
	};
	var dashboardchart3 = document.getElementById('dashboardchart3');
	var bardashboardchart3 = echarts.init(dashboardchart3);
	bardashboardchart3.setOption(option3);
	
 /****Dashboard 4***/

var chartdata4 = [
		{
		  name: 'sales',
		  type: 'bar',
		  stack: 'Stack',
		  barMaxWidth: 15,	
		  data: [14, 18, 20, 14, 29, 21, 25, 14, 24,18]
		},
		{
		  name: 'Profit',
		  type: 'bar',
		  stack: 'Stack',
		  barMaxWidth: 15,	
		  data: [12, 14, 15, 50, 24, 24, 10, 20 ,30,24]
		}
	];
	var option4 = {
		grid: {
		  top: '6',
		  right: '0',
		  bottom: '17',
		  left: '25',
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer:
			{
				label: {
					show: false,
				}
			}
		},
		xAxis: {
		  data: ['1', '2', '3', '4', '5', '6', '7', '8', '9','10'],
		  axisLine: {
			lineStyle: {
			  color: 'rgba(119, 119, 142, 0.2)'
			}
		  },
		  axisLabel: {
			fontSize: 10,
			color: '#77778e'
		  }
		},
		yAxis: {
		  splitLine: {
			lineStyle: {
			  color: 'rgba(119, 119, 142, 0.2)'
			}
		  },
		  axisLine: {
			lineStyle: {
			  color: 'rgba(119, 119, 142, 0.2)'
			}
		  },
		  axisLabel: {
			fontSize: 10,
			color: '#77778e'
		  }
		},
		series: chartdata4,
		color:[ '#1CABA0', '#cc3465']
	};
	var dashboardchart4 = document.getElementById('dashboardchart4');
	var bardashboardchart4 = echarts.init(dashboardchart4);
	bardashboardchart4.setOption(option4);
	
	

});