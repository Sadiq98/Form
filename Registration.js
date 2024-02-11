
function AddData(duplicateModal) {

    var index = data_arr.findIndex(x => x.username == $("#username").val());
    if (index == -1) {
        // var srno = data_arr.length;
        data_arr.push({

            srno: data_arr.length + 1,
            fname: $("#fname").val(),
            lname: $("#lname").val(),
            mobile: $("#mobile").val(),
            email: $("#email").val(),
            username: $("#username").val(),
            country: $("#country").val(),
            country_id: $("#country option:selected").attr("id"),
            state: $("#state").val(),
            state_id: $("#state option:selected").attr("id"),
            city: $('#city').val(),
            postal: $('#postal').val(),
            address: $('#address').val(),
            password: $('#password').val(),
            cpassword: $('#cpassword').val(),
            status: $("#btnActive").is(":checked"),

        })
        localStorage.setItem("Row", JSON.stringify(data_arr));
        updateTableData()
        // window.location='Index.html';
        // $('#successModal').modal('show');
    }
    else {
        // alert("Duplicate Username")
        $('#duplicateModal').modal('show')
        // return false;
        disableValidator()    
    }

}

