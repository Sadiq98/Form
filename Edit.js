var data_arr = [/*form data*/]

$(document).ready(function () {
    const parameters = new URLSearchParams(window.location.search);
    const srno = parameters.get('srno');
    EditData(srno);

})


function EditData(srno) {
    var filter = data_arr.filter(x => x.srno == srno)[0];

    // Common logic for both branches
    $("#btnStatus").removeClass("d-none");

    if (filter.status) {
        $("#btnActive").prop("checked", true);
    } else {
        $("#btnInactive").prop("checked", true);
    }

    $("#username").val(filter.username);
    $("#fname").val(filter.fname);
    $("#lname").val(filter.lname);
    $("#country").val(filter.country);

    var filterState = States.filter(x => x.country_id == $("#country option:selected").attr("id"));
    $("#state").html(filterState.map(item => `<option id=${item.id}>${item.value}</option>`)).val(filter.state);

    $("#city").val(filter.city);
    $("#postal").val(filter.postal);
    $("#email").val(filter.email);
    $("#mobile").val(filter.mobile);
    $("#address").val(filter.address);
    $("#password").val(filter.password);
    $("#cpassword").val(filter.cpassword);
    $("#hdnsrno").val(filter.srno);

    if (filter.status) {
        $("#btnActive").prop("checked", true);
    } else {
        $("#btnInactive").prop("checked", true);
    }

}


//--------------------------------------------------UPDATING THE TABLE DATA -----------------------------------------------------------

function updateData() {
    var srno = $("#hdnsrno").val();

    var index = data_arr.findIndex(obj => obj.srno == srno);
    var selectedCountry = $("#country");
    var selectedState = $("#state");

    var updatedData = {

        srno: srno,
        username: $("#username").val(),
        fname: $("#fname").val(),
        lname: $("#lname").val(),
        country: selectedCountry.val(),
        country_id: selectedCountry.find(":selected").attr("id"),
        state: selectedState.val(),
        state_id: selectedState.find(":selected").attr("id"),
        city: $("#city").val(),
        postal: $("#postal").val(),
        email: $("#email").val(),
        mobile: $("#mobile").val(),
        address: $("#address").val(),
        password: $("#password").val(),
        cpassword: $("#cpassword").val(),
        status: $("#btnActive").is(":checked")
    };

    data_arr[index] = updatedData;

    updateLocalStorage();
    updateTableData();
    window.location = 'index.html';
    setTimeout(function () {
        $('#updateModal').modal('show');
    }, 500);

}


function updateLocalStorage() {
    localStorage.clear();
    localStorage.setItem('Row', JSON.stringify(data_arr));
}
