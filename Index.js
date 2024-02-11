var data_arr = [/*form data*/]

var btnclicked = 0;

$(document).ready(function () {
    var fromlocal = JSON.parse(localStorage.getItem("Row"));
    if (fromlocal === null) {
        console.log("empty");
    } else {
        for (i = 0; i < fromlocal.length; i++) {
            data_arr.push(fromlocal[i]);
        }
        updateTableData();
        console.log("it works");
    }
});

function updateTableData() {
    var html = '';
    $.each(data_arr, function (k, item) {
      html += "<tr";
      if (item.status == false) {
        html += " style='background-color: lightgray;'>";
      }
      else {
        html += ">";
      }
      html += '<td>' + item.srno + '</td>';
      html += '<td>' + item.username + '</td>';
      html += '<td>' + item.fname + '</td>';
      html += '<td>' + item.lname + '</td>';
      html += '<td>' + item.email + '</td>';
      html += '<td>' + item.mobile + '</td>';
      html += '<td>' + (item.status ? 'Active' : 'Inactive') + '</td>';
      html += '<td class="d-flex"><a id="CRUDicons"  onclick="EditData(' + item.srno + ', this)" title="Edit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ee9511" class="bi bi-pencil-square me-4" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"><svg></a><a id="CRUDicons" onclick="viewData(' + item.srno + ', this)" title="View"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#337ab7" class="bi bi-eye-fill me-4" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg></a> <a id="CRUDicons" onclick="deleteRow(' + item.srno + ', this)" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg></a></td>';
      html += '</tr>';
    });
    $("#tblbody").html(html)
        $('#registration-table').DataTable();  

  }

  //-------------------------------------------------EDITING THE DATA---------------------------------------------------------------------//
  
  function EditData(srno) {
    $("#editModal").modal("show");
    $("#btnModaledit").click(function(){
      window.location.href = "Edit.html?srno=" + srno;
    });
  }

  function viewData(srno){
    window.location.href = "View.html?srno=" + srno;
  }

    //-------------------------------------------------DELETING THE DATA---------------------------------------------------------------------//

  function deleteRow(srno) {
    $('#deleteModal').modal('show');
  
    $('#deleteButton').click(function () {
      data_arr = $.grep(data_arr, function (element, index) {
        return element.srno != srno;
      });
  
      for (var i = 0; i < data_arr.length; i++) {
        data_arr[i].srno = i + 1;
      }
  
      localStorage.clear();
      localStorage.setItem('Row', JSON.stringify(data_arr)); // Store the updated data array in local storage
      updateTableData();
      $('#deleteModal').modal('hide');
      // Show the deleteSuccessModal after a delay
      setTimeout(function () {
        $('#deleteSuccessModal').modal('show');
      }, 500); // Adjust the delay time as needed
    });
  }
  
  
  
      
  
      