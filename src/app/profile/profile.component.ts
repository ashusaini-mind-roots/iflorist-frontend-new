import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
declare  var jQuery:  any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	(function ($) {
       $(document).ready(function(){
		  $(".cnewemployee").click(function(){
		  $(".employeemaintab .table-responsive").hide();
			$(".createnewrole").hide();
			$(".stepformemployee").show();
		  });
		  $(".cancelemployee").click(function(){
			$(".employeemaintab .table-responsive").show();
			$(".createnewrole").show();
			$(".stepformemployee").hide();
		  });
		  
		  /******Store Start*****/
		   $(".cnewstore").click(function(){
		  $("#mystores .table-responsive").hide();
			$(".createnewstore").hide();
			$(".stepformstore").show();
		  });
		  $(".cancelstore").click(function(){
			$("#mystores .table-responsive").show();
			$(".createnewstore").show();
			$(".stepformstore").hide();
		  });

		  /******Store End*****/

			 /******User Start*****/
		   $(".cnewusers").click(function(){
		  $("#users .table-responsive").hide();
			$(".createnewusers").hide();
			$(".stepformusers").show();
		  });
		  $(".cancelusers").click(function(){
			$("#users .table-responsive").show();
			$(".createnewusers").show();
			$(".stepformusers").hide();
		  });
		  /******User End*****/
		  
		   /******Role Start*****/
		   $(".cnewroles").click(function(){
		  $("#roles .table-responsive").hide();
			$(".createnewrole").hide();
			$(".stepformroles").show();
		  });
		  $(".cancelroles").click(function(){
			$("#roles .table-responsive").show();
			$(".createnewrole").show();
			$(".stepformroles").hide();
		  });
		  /******Role End*****/
		  
		});
     })(jQuery);

  }

}
