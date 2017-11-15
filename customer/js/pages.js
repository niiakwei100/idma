var header = document.getElementById("content-header");
var content = document.getElementById("content");
var head ;
var cont;
var table;



$(document).ready(function() {

  $('#example').DataTable({
        "responsive": true,
        "processing": true, //Feature control the processing indicator.
        "serverSide": true, //Feature control DataTables' server-side processing mode.
        "order": [], //Initial no order.

        // Load data for the table's content from an Ajax source
        "ajax": {
            "url":"http://192.168.8.109/idma-api/index.php/user_manage/ajax_list",

            "type": "POST"
        },

        //Set column definition initialisation properties.
        "columnDefs": [
            {
                "targets": [ -1 ], //last column
                "orderable": false, //set not orderable
            },

        ],

    });



    $('#grp').DataTable({
          "responsive": true,
          "processing": true, //Feature control the processing indicator.
          "serverSide": true, //Feature control DataTables' server-side processing mode.
          "order": [], //Initial no order.

          // Load data for the table's content from an Ajax source
          "ajax": {
              "url":"http://192.168.8.109/idma-api/index.php/group_manage/ajax_list",

              "type": "POST"
          },

          //Set column definition initialisation properties.
          "columnDefs": [
              {
                  "targets": [ -1 ], //last column
                  "orderable": false, //set not orderable
              },

          ],

      });

      $('#phone').DataTable({
            "responsive": true,
            "processing": true, //Feature control the processing indicator.
            "serverSide": true, //Feature control DataTables' server-side processing mode.
            "order": [], //Initial no order.

            // Load data for the table's content from an Ajax source
            "ajax": {
                "url":"http://192.168.8.109/idma-api/index.php/phone_manage/ajax_list",

                "type": "POST"
            },

            //Set column definition initialisation properties.
            "columnDefs": [
                {
                    "targets": [ -1 ], //last column
                    "orderable": false, //set not orderable
                },

            ],

        });



});







function dashboard()
{
  //load the view for dashbaord
  //header.style.display = 'block';
  //content.style.display = 'block';



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

function group_api_data()
{
  $('#grp').DataTable({
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
