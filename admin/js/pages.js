var header = document.getElementById("content-header");
var content = document.getElementById("content");
var head ;
var cont;
var table;
function dashboard()
{
  //load the view for dashbaord
  //header.style.display = 'block';
  //content.style.display = 'block';
  head= '<h1>'+
        'Dashboard'+
        '<small>Control Panel</small>'+
        '</h1>'+

        '<ol class="breadcrumb">'+
          '<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>'+
          '<li class="active">Dashboard</li>'+
        '</ol>';



    cont = '<div class="row">'+
            '<div class="col-lg-3 col-xs-6">'+
              '<!-- small box -->'+
              '<div class="small-box bg-aqua">'+
                '<div class="inner">'+
                  '<h3>150</h3>'+

                  '<p>New Orders</p>'+
                '</div>'+
                '<div class="icon">'+
                  '<i class="ion ion-bag"></i>'+
                '</div>'+
                '<a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>'+
              '</div>'+
            '</div>'+
            '<!-- ./col -->'+
            '<div class="col-lg-3 col-xs-6">'+
              '<!-- small box -->'+
              '<div class="small-box bg-green">'+
                '<div class="inner">'+
                  '<h3>53<sup style="font-size: 20px">%</sup></h3>'+

                  '<p>Bounce Rate</p>'+
                '</div>'+
                '<div class="icon">'+
                  '<i class="ion ion-stats-bars"></i>'+
                '</div>'+
                '<a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>'+
              '</div>'+
            '</div>'+
            '<!-- ./col -->'+
            '<div class="col-lg-3 col-xs-6">'+
              '<!-- small box -->'+
              '<div class="small-box bg-yellow">'+
                '<div class="inner">'+
                  '<h3>44</h3>'+

                  '<p>User Registrations</p>'+
                '</div>'+
                '<div class="icon">'+
                  '<i class="ion ion-person-add"></i>'+
                '</div>'+
                '<a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>'+
              '</div>'+
            '</div>'+
            '<!-- ./col -->'+
            '<div class="col-lg-3 col-xs-6">'+
              '<!-- small box -->'+
              '<div class="small-box bg-red">'+
                '<div class="inner">'+
                '  <h3>65</h3>'+

                  '<p>Unique Visitors</p>'+
                '</div>'+
                '<div class="icon">'+
                  '<i class="ion ion-pie-graph"></i>'+
                '</div>'+
                '<a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>'+
              '</div>'+
            '</div>'+
            '<!-- ./col -->'+
          '</div>';


          $("#dashtab").addClass("active");
          $("#usertab").removeClass("active");
          //$("#dashtab").removeClass("active");
          $("#grouptab").removeClass("active");
          $("#phonetab").removeClass("active");
          $("#smstab").removeClass("active");
          $("#emailtab").removeClass("active");
          $("#visiTtab").removeClass("active");
          $("#reFtab").removeClass("active");
          $("#tickeTtab").removeClass("active");
          $("#alerTtab").removeClass("active");

          $('#content-header').html(head);
          $('#content').html(cont);
}



function users()
{
      head= '<h1>'+
        'Users'+
        '<small>User management</small>'+
        '</h1>'+

        '<ol class="breadcrumb">'+
          '<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>'+
          '<li class="active">Users</li>'+
        '</ol>';

        cont = '<div class="row">'+
               '<div class=" col-xs-12" >'+
               '<div class="box">'+
               '<div class="box-header">'+
                '<a href="javascript:void(0);" onclick="user_new()"> <h3 class="box-title btn btn-primary"><i class="fa fa-user-plus"> </i>  Add New User</h3></a>'+
                '<div class="box-body">'+
                '<table id="example" class="display" cellspacing="0" width="100%">'+
                '<thead>'+
                    '<tr>'+
                        '<th>Name</th>'+
                        '<th>Email</th>'+
                        '<th>Date</th>'+
                        '<th>Access Level</th>'+
                        '<th>Action</th>'+
                        //'<th><i class="fa fa-edit"> </i></th>'+
                    '</tr>'+
                '</thead>'+
                '<tbody>'+
                  //  '<span id="user_data"> </span>'+

                '</tbody>'+
                '<tfoot>'+
                      '<tr>'+
                      '<th>Name</th>'+
                      '<th>Email</th>'+
                      '<th>Date</th>'+
                      '<th>Access Level</th>'+
                      '<th>Action</th>'+
                        //'<th>Salary</th>'+
                    '</tr>'+
                '</tfoot>'+
                '</table>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
              '</div>';


        $("#usertab").addClass("active");
        $("#dashtab").removeClass("active");
        $("#grouptab").removeClass("active");
        $("#phonetab").removeClass("active");
        $("#smstab").removeClass("active");
        $("#emailtab").removeClass("active");
        $("#visiTtab").removeClass("active");
        $("#reFtab").removeClass("active");
        $("#tickeTtab").removeClass("active");
        $("#alerTtab").removeClass("active");

        $('#content-header').html(head);
        $('#content').html(cont);
        user_data_api()
        //$('#example').DataTable( {
            //responsive: true
        //});
}

function group()
{
  head= '<h1>'+
        'Groups'+
        '<small>Manage groups</small>'+
        '</h1>'+

        '<ol class="breadcrumb">'+
          '<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>'+
          '<li class="active">Groups</li>'+
        '</ol>';

    cont = '<div class="row">'+
           '<div class=" col-xs-12" >'+
           '<div class="box">'+
           '<div class="box-header">'+
            '<a href="javascript:void;" onclick="group_new()"> <h3 class="box-title btn btn-primary"><i class="fa fa-user-plus"> </i>  Add New Group</h3></a>'+
            '<div class="box-body">'+
            '<table id="table" class="display" cellspacing="0" width="100%">'+
            '<thead>'+
                '<tr>'+
                    '<th>Group Name</th>'+
                    '<th>Created On</th>'+
                    '<th>Created By</th>'+
                    //'<th>Access Level</th>'+
                    '<th>Action</th>'+
                    //'<th><i class="fa fa-edit"> </i></th>'+
                '</tr>'+
            '</thead>'+
            '<tbody>'+
              //  '<span id="user_data"> </span>'+

            '</tbody>'+
                '<tr>'+
                '<tfoot>'+
                '<th>Group Name</th>'+
                '<th>Created On</th>'+
                '<th>Created By</th>'+
                //'<th>Access Level</th>'+
                '<th>Action</th>'+
                    //'<th>Salary</th>'+
                '</tr>'+
            '</tfoot>'+
            '</table>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+
          '</div>';

          $("#grouptab").addClass("active");
          $("#usertab").removeClass("active");
          $("#dashtab").removeClass("active");
          $("#phonetab").removeClass("active");
          $("#smstab").removeClass("active");
          $("#emailtab").removeClass("active");
          $("#visiTtab").removeClass("active");
          $("#reFtab").removeClass("active");
          $("#tickeTtab").removeClass("active");
          $("#alerTtab").removeClass("active");


          $('#content-header').html(head);
          $('#content').html(cont);
          group_api();
}







function user_data()
{
  $.ajax({
      url : "../user.json",
      type: "GET",
      dataType: "JSON",
      success: function(data)
      {
          var html ='';
          var i;
          var stats;
          for(i=0; i<data.length; i++)
          {
                  //console.log(data[i].Name);
                  html+='<tr>'+
                      '<td>'+data[i].Name+'</td>'+
                      '<td>'+data[i].Email+'</td>'+
                      '<td>'+data[i].Date+'</td>'+
                      '<td>'+data[i].Access+'</td>'+
                      '<td><i class="fa fa-edit btn btn-primary"> </i></td>'+
                    '</tr>'+

                  $('#user_data').html(html);
                  console.log(html);
          }

      },
      error: function (jqXHR, textStatus, errorThrown)
      {
          alert('Error connecting to the internet');
      }
  });
}



function group_api()
{
  table = $('#table').DataTable({
        "responsive": true,
        "processing" : true,
        "ajax" : {
            "url" : "../group.json",
            dataSrc : ''
        },
        "columns" : [ {
            "data" : "group_name"
        }, {
            "data" : "created_on"
        }, {
            "data" : "created_by"
        }, {
            "data" : "action"
        }]
    });
    console.log(table);
}

function user_data_api()
{
   table = $('#example').DataTable({
        "responsive": true,
        "processing" : true,
        "ajax" : {
            "url" : "../user.json",
            dataSrc : ''
        },
        "columns" : [ {
            "data" : "Name"
        }, {
            "data" : "Email"
        }, {
            "data" : "Date"
        }, {
            "data" : "Access"
        }, {
            "data" : "Action"
        }]
    });

    //console.log(table);
}


function user_new()
{
    save_method = 'add';
    $('#form')[0].reset(); // reset form on modals
    $('div.form-group').removeClass('has-error'); // clear error class
    $('div.form-group').removeClass('has-success'); // clear error class
    $('.text-danger').empty(); // clear error string
    $('#modal_form').modal('show'); // show bootstrap modal// show bootstrap modal
    $('.modal-title').text('Add New User'); // Set Title to Bootstrap modal title

}


$(function() {
    //group_api();
    //user_data()

});
