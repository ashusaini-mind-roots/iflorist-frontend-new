$(function() {
	'use strict';

	
/******sales*****/
	var chartdata44 = [
		{
		  name: 'sales',
		  type: 'bar',
		  stack: 'Stack',
		  barMaxWidth: 15,	
		  data: [14, 18, 20, 14, 29, 21, 25, 14, 24,18,12,17]
		},
		{
		  name: 'Profit',
		  type: 'bar',
		  stack: 'Stack',
		  barMaxWidth: 15,		
		  data: [12, 14, 15, 50, 24, 24, 10, 20 ,30,24,15,50]
		}
	];
	var option44 = {
		grid: {
		  top: '6',
		  right: '30',
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
		  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'june', 'July', 'Aug', 'Sept','Oct','Nov','Dec'],
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
		series: chartdata44,
		color:[ '#1CABA0', '#cc3465']
	};
	var saleschartbox = document.getElementById('saleschartbox');
	var barsaleschartbox4 = echarts.init(saleschartbox);
	barsaleschartbox4.setOption(option44);
	/******sales*****/

});