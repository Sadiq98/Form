var data_arr = [/*form data*/]

$(document).ready(function () {
    const parameters = new URLSearchParams(window.location.search);
    const srno = parameters.get('srno');
    viewData(srno)
})

function viewData(srno) {
    $(".view").attr("readonly", true);//class of input fields
    $(".view-select").attr("disabled", true);//class of drop-down fields
    $(".radio").attr("disabled", true);//class of radio fields
    $("#editView").removeClass("d-none");
    $("#submitView").addClass("d-none");
    $("#hdnCpass").addClass("d-none");

    $.each(data_arr, function (k, item) {
        $(item).prop("disabled", true);
    });
    var filter = data_arr.filter((x) => x.srno == srno);
    if (filter[0].status == true) {
        $("#btnActive").prop("checked", true);
        $("#btnInactive").prop("checked", false);
    } else {
        $("#btnActive").prop("checked", false);
        $("#btnInactive").prop("checked", true);
    }
    $("#username").val(filter[0].username);
    $("#fname").val(filter[0].fname);
    $("#lname").val(filter[0].lname);
    $("#country").val(filter[0].country);
    var filterState = States.filter(x => x.country_id == $("#country option:selected").attr("id"));
    $("#state").empty();
    $.each(filterState, function (k, item) {
        $("#state").append('<option id=' + item.id + '>' + item.value + '</option>');
    });
    $("#state").val(filter[0].state);
    $("#city").val(filter[0].city);
    $("#postal").val(filter[0].postal);
    $("#address").val(filter[0].address);
    $("#mobile").val(filter[0].mobile);
    $("#email").val(filter[0].email);
    $("#username").val(filter[0].username);
    $("#password").val(filter[0].password);
    $("#hdnsrno").val(filter[0].srno);

    $("#editView").click(function () { //When the edit button of view-modal is clickedd...

        $(".view").attr("readonly", false);
        $(".view-select").attr("disabled", false);
        $("#editView").addClass("d-none");
        $("#deleteView").addClass("d-none");
        $("#submitView").removeClass("d-none");
        $("#resetView").removeClass("d-none");
        $(".radio").attr("disabled", false);
        $("#hdnCpass").removeClass("d-none");
        $("#cpassword").val(filter[0].cpassword);


    });
};

//-------------------------------------------------Submit ViewModal------------------------------------------------------------------//
function viewSubmit() {
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
//----------------------------------------------------Delete View Modal-----------------------------------------------------------------//

function viewDelete(srno) {
    $('#viewdeleteModal').modal('show');

    $('#btnDelete').click(function () {
        data_arr = $.grep(data_arr, function (element, index) {
            return element.srno != parseInt($("#hdnsrno").val());
        });

        for (var i = 0; i < data_arr.length; i++) {
            data_arr[i].srno = i + 1;
        }

        localStorage.clear();
        localStorage.setItem('Row', JSON.stringify(data_arr)); // Store the updated data array in local storage
        updateTableData();
        window.location = 'index.html'
        // Show the deleteSuccessModal after a delay
        setTimeout(function () {
            $('#deleteSuccessModal').modal('show');
        }, 500); // Adjust the delay time as needed
    });
}

