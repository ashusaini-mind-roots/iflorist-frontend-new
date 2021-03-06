﻿import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import {PlanService} from '../_services';
import { SalesService } from "../_services/sales.service";
import * as echarts from 'echarts';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import {UtilsService} from "../_services/utils.service";
import {StoreSubscriberService} from "@app/_services/storeSubscriber.service";
import {CostOfFreshService} from "@app/_services/costOfFresh.service";
import {SchedulerService} from "@app/_services/scheduler.service";
import * as $ from 'jquery';
declare  var jQuery:  any;

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    plans: any;
    loaded: boolean = true;
    error: boolean;
    yearQuarter: any;
    selectedStorage: any;

    //sales section
    salesChart: any;
    projWeeklyRevQuarter: number;
    weeks: any[];
    actualSalesTotal: number;
    actualSalesByWeek: number[];
    projectedSalesByWeek: number[];

    //cost of hard goods section
    cogChart: any;
    actualCogByWeek: number[];
    projectedCogByWeek: number[];
    actualCogTotal: number;
    projectionsCog: number;
    weeksCog: any[];

    //cost of fresh section
    cofChart: any;
    actualCofByWeek: number[];
    projectedCofByWeek: number[];
    actualCofTotal: number;
    projectionsCof: number;
    weeksCof: any[];

    //cost of labor section
    colChart: any;
    actualColByWeek: number[];
    projectedColByWeek: number[];
    actualColTotal: number;
    projectionsCol: number;
    weeksCol: any[];

    modules: any;

    constructor(
        private storeSubscriberService: StoreSubscriberService,//service used to receive store from top bar stores combobox
        private userService: UserService,
        private utilService: UtilsService,
        private planService:PlanService,
        private authenticationService: AuthenticationService,
        private salesService: SalesService,
        private costOfFreshService: CostOfFreshService,
        private schedulerService: SchedulerService,
    ) {
        storeSubscriberService.subscribe(this,function (ref,store) {
            ref.receiveStorage(store);
        });
        this.yearQuarter = {year :this.utilService.GetCurrentYear(), quarter: 1};

        //sales
        this.projWeeklyRevQuarter = 0.00;
        this.actualSalesTotal = 0.00;
        this.actualSalesByWeek = new Array();
        this.projectedSalesByWeek = new Array();

        //Cog
        this.projectionsCog = 0.00;
        this.actualCogTotal = 0.00;
        this.actualCogByWeek = new Array();
        this.projectedCogByWeek = new Array();

        //Cof
        this.projectionsCof = 0.00;
        this.actualCofTotal = 0.00;
        this.actualCofByWeek = new Array();
        this.projectedCofByWeek = new Array();

        //Col
        this.projectionsCol = 0.00;
        this.actualColTotal = 0.00;
        this.actualColByWeek = new Array();
        this.projectedColByWeek = new Array();

    }

    ngOnInit() {
        this.selectedStorage = JSON.parse(localStorage.getItem('selectedStorage'));
           
        document.body.classList.remove('loginbody'); 

        //TO LOAD THE BAR CHART CORRECTLY WITH JQUERY
        (function ($) {
          $(document).ready(function(){
                $(function() {
                        'use strict';
                        /* Echart5*/
                        var chartdata3 = [
                            {
                              name: 'sales',
                              type: 'bar',
                              stack: 'Stack',
                              barMaxWidth: 15,
                              data: this.actualSalesByWeek
                            },
                            {
                              name: 'Profit',
                              type: 'bar',
                              stack: 'Stack',
                              barMaxWidth: 15,
                              data: this.projectedSalesByWeek
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
                              data: this.actualCogByWeek
                            },
                            {
                              name: 'Profit',
                              type: 'bar',
                              stack: 'Stack',
                              barMaxWidth: 15,  
                              data: this.projectedCogByWeek
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
                              data: this.actualSalesByWeek
                            },
                            {
                              name: 'Profit',
                              type: 'bar',
                              stack: 'Stack',
                              barMaxWidth: 15,  
                              data: this.projectedSalesByWeek
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
                              data: this.actualCofByWeek
                            },
                            {
                              name: 'Profit',
                              type: 'bar',
                              stack: 'Stack',
                              barMaxWidth: 15,  
                              data: this.projectedCofByWeek
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
                                  color:'rgba(119, 119, 142, 0.2)'
                                }
                              },
                              axisLabel: {
                                fontSize: 10,
                                color:'#77778e'
                              }
                            },
                            yAxis: {
                              splitLine: {
                                lineStyle: {
                                  color:'rgba(119, 119, 142, 0.2)'
                                }
                              },
                              axisLine: {
                                lineStyle: {
                                  color:'rgba(119, 119, 142, 0.2)'
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
               });
        })(jQuery);

    }

    initActualSalesByWeekArray(){
        this.actualSalesByWeek = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00];
        this.projectedSalesByWeek = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00];
    }
    initGogArray(){
        this.actualCogByWeek = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00];
        this.projectedCogByWeek = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00];
    }
    initGofArray(){
        this.actualCofByWeek = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00];
        this.projectedCofByWeek = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00];
    }
    initColArray(){
        this.actualColByWeek = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00];
        this.projectedColByWeek = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00];
    }
    showSalesChart()
    {
        this.salesChart = {
            labels:['1','2','3','4', '5', '6', '7', '8','9', '10', '11', '12', '13'],
            datasets:[
                {
                    label:'Actual',
                    backgroundColor: '#1caba0',
                    borderColor: '#1caba0',
                    data:this.actualSalesByWeek
                },
                {
                    label:'Projected',
                    backgroundColor: '#ff596e',
                    borderColor: '#ff596e',
                    data: this.projectedSalesByWeek
                }
            ]
        };
    }

    showCogChart()
    {
        this.cogChart = {
            labels:['1','2','3','4', '5', '6', '7', '8','9', '10', '11', '12', '13'],
            datasets:[
                {
                    label:'Actual',
                    backgroundColor: '#1caba0',
                    borderColor: '#1caba0',
                    data: this.actualCogByWeek
                },
                {
                    label:'Projected',
                    backgroundColor: '#ff596e',
                    borderColor: '#ff596e',
                    data: this.projectedCogByWeek
                }
            ]
        };
    }
    showCofChart()
    {
        this.cofChart = {
            labels:['1','2','3','4', '5', '6', '7', '8','9', '10', '11', '12', '13'],
            datasets:[
                {
                    label:'Actual',
                    backgroundColor: '#1caba0',
                    borderColor: '#1caba0',
                    data: this.actualCofByWeek
                },
                {
                    label:'Projected',
                    backgroundColor: '#ff596e',
                    borderColor: '#ff596e',
                    data: this.projectedCofByWeek
                }
            ]
        };
    }

    showColChart()
    {
        this.colChart = {
            labels:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
            datasets:[
                {
                    label: 'Actual',
                    backgroundColor: '#1caba0',
                    borderColor: '#1caba0',
                    data: this.actualColByWeek
                },
                {
                    label:'Projected',
                    backgroundColor: '#ff596e',
                    borderColor: '#ff596e',
                    data: this.projectedColByWeek
                }
            ]
        };
    }

    receiveYearQuarter($event){
        this.yearQuarter = $event;
        this.getSales();
        this.getCog();
        this.getCof();
    }
    receiveStorage(storage){
        this.selectedStorage = storage;
        this.getSales();
        this.getCog();
        this.getCof();
    }

    getSales()
    {
        this.loading = true;
        this.salesService.getSales(this.selectedStorage.id,this.yearQuarter.year,this.yearQuarter.quarter).subscribe((response: any) =>{
            this.weeks = response.weeks;
            console.log(this.weeks);
            this.calcActualSalesTotal();
            this.getProjectedSales();
        });
    }
    getCog(){
        this.loading = true;
        this.costOfFreshService.getMasterOverviewWeekly('goods',this.selectedStorage.id,this.yearQuarter.year,this.yearQuarter.quarter).subscribe((data: any) =>{
            this.weeksCog = data.master_overview_weekly;
                this.calcActualCogTotal();
                this.showCogChart();
        })
    }
    getCof(){
        this.loading = true;
        this.costOfFreshService.getMasterOverviewWeekly('fresh',this.selectedStorage.id,this.yearQuarter.year,this.yearQuarter.quarter).subscribe((data: any) =>{
            this.weeksCof = data.master_overview_weekly;
            this.calcActualCofTotal();
            this.showCofChart();
            this.getCol();
        })
    }
    getCol(){
        this.loading = true;
        this.schedulerService.getScheduledPayrollByQuarter(this.yearQuarter.year,this.selectedStorage.id,this.yearQuarter.quarter).subscribe((data: any) =>{
            this.weeksCol = data.scheduled_payroll_array;
            this.calcActualColTotal();
            this.showColChart();
        })
    }
    /**
     * This function is just getProjWeeklyRevQuarter
     */
    getProjectedSales(){
        this.salesService.getProjWeeklyRevQuarter(this.selectedStorage.id,this.yearQuarter.year,this.yearQuarter.quarter).subscribe((response: any) =>{
            this.projWeeklyRevQuarter = response.proj_weekly_rev_quarter;
            this.projectedSalesByWeek = response.all_projected_sales;
            this.showSalesChart();
        });
    }
    calcActualSalesTotal(){
        this.actualSalesTotal = 0.00;
        this.initActualSalesByWeekArray();
        for (let i = 0; i < this.weeks.length; i++) {
            let total = this.weeks[i].totalDelivery + this.weeks[i].totalWire + this.weeks[i].totalMerchandise;
            this.actualSalesTotal += total;
            console.log(this.actualSalesTotal);
            this.actualSalesByWeek[(this.weeks[i].number - (13 * (this.yearQuarter.quarter - 1)))-1] = total;
        }
    }

    calcActualCogTotal(){
        this.actualCogTotal = this.projectionsCog = 0.00;
        this.initGogArray();
        for (let i = 0; i < this.weeksCog.length; i++) {
            let total = Number(this.weeksCog[i].weekly_cog_total);
            this.actualCogTotal += total;
            this.projectionsCog += Number(this.weeksCog[i].actual_weekly_revenue * this.weeksCog[i].target / 100 );
            this.actualCogByWeek[(this.weeksCog[i].week_number - (13 * (this.yearQuarter.quarter - 1)))-1] = total;
            this.projectedCogByWeek[(this.weeksCog[i].week_number - (13 * (this.yearQuarter.quarter - 1)))-1] = Number(this.weeksCog[i].actual_weekly_revenue * this.weeksCog[i].target / 100 );
        }
    }
    calcActualCofTotal(){
        this.actualCofTotal = this.projectionsCof = 0.00;
        this.initGofArray();
        for (let i = 0; i < this.weeksCof.length; i++) {
            let total = Number(this.weeksCof[i].weekly_cog_total);
            this.actualCofTotal += total;
            this.projectionsCof += Number(this.weeksCof[i].actual_weekly_revenue * this.weeksCof[i].target / 100 );
            this.actualCofByWeek[(this.weeksCof[i].week_number - (13 * (this.yearQuarter.quarter - 1)))-1] = total;
            this.projectedCofByWeek[(this.weeksCof[i].week_number - (13 * (this.yearQuarter.quarter - 1)))-1] = Number(this.weeksCof[i].actual_weekly_revenue * this.weeksCof[i].target / 100 );
        }
    }

    calcActualColTotal(){
        this.actualColTotal = this.projectionsCol = 0.00;
        this.initColArray();
        console.log(this.weeksCol)
        for (let i = 0; i < this.weeksCol.length; i++) {
            let total = Number(this.weeksCol[i].scheduled_payroll);
            this.actualColTotal += total;
            this.actualColByWeek[(this.weeksCol[i].week_number - (13 * (this.yearQuarter.quarter - 1)))-1] = total;
        }
        this.projectionsCol = this.projectionsCof;
        this.projectedColByWeek = this.projectedCofByWeek;
    }

}
