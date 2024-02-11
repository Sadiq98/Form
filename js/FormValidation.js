var validator;
    document.addEventListener('DOMContentLoaded', function () {
    // Define form element
    const form = document.getElementById('registration_form');

    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
    validator = FormValidation.formValidation(
        form,
        {
            fields: {
                'fname': {
                    validators: {
                        notEmpty: {
                            message: 'First name is required'
                        },
                        stringLength: {
                            min: 3,
                            max: 10,
                            message: 'First name must be less than 10 & more than 3 characters'
                        },
                        regexp: {
                            regexp: /^[A-Za-z\s]+$/i,
                            message: 'First name can consist of alphabetical characters only',
                        }


                    }
                },
                'lname': {
                    validators: {
                        notEmpty: {
                            message: 'Last name is required'
                        },
                        stringLength: {
                            min: 3,
                            max: 10,
                            message: 'Last name must be less than 10 & more than 3 characters'
                        },
                        regexp: {
                            regexp: /^[A-Za-z\s]+$/i,
                            message: 'Last name can consist of alphabetical characters only',
                        }


                    }
                },
                'country': {
                    validators: {
                        notEmpty: {
                            message: 'Country selection is required'
                        }
                    }
                },
                'city': {
                    validators: {
                        notEmpty: {
                            message: 'City name is required'
                        },
                        stringLength: {
                            min: 3,
                            max: 10,
                            message: 'City name must be less than 10 & more than 3 characters'
                        },
                        regexp: {
                            regexp: /^[A-Za-z\s]+$/i,
                            message: 'City name can consist of alphabetical characters only',
                        }
                    }
                },
                'postal': {
                    validators: {
                        notEmpty: {
                            message: 'Postal code is required'
                        },
                        stringLength: {
                            min: 6,
                            max: 6,
                            message: 'Postal code must be of 6 digits'
                        },
                        regexp: {
                            regexp: /^(?!(\d)\1{5})\d{6}$/i,
                            message: 'Invalid Postal code',
                        }
                    }

                },
                'address': {
                    validators: {
                        notEmpty: {
                            message: 'Address is required'
                        },
                        stringLength: {
                            min: 6,
                            max: 20,
                            message: 'Address should be more than 6 character and less than 20 characters'
                        },
                    }
                },
                'mobile': {
                    validators: {
                        notEmpty: {
                            message: 'Mobile number is required'
                        },
                        stringLength: {
                            min: 10,
                            max: 10,
                            message: 'Mobile number must be of 10 digits'
                        },
                        regexp: {
                            regexp: /^(?!(\d)\1{9})(0|91)?[6-9][0-9]{9}$/i,
                            message: 'Invalid mobile number',
                        }
                    }
                },
                'email': {
                    validators: {
                        notEmpty: {
                            message: 'Email Id is required'
                        },
                        regexp: {
							regexp: /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,
                            // regexp: /^[a-z0-9](\.?[a-z0-9]){2,}@g(oogle)?mail\.com$/,
                            message: "Invalid email id",
                        }
                    }
                },
                'username': {
                    validators: {
                        notEmpty: {
                            message: 'Username is required'
                        },
                        stringLength: {
                            min: 3,
                            max: 10,
                            message: 'Username must not be less than 3 characters'
                        },
                        regexp: {
                            regexp: /^(?=.*[a-z])(?=.*\d)[a-z\d]+$/i,
                            message: "Username must contain both letters (in small case) and numbers",
                        }
                    }
                },
                'password': {
                    validators: {
                        notEmpty: {
                            message: 'Password is required'
                        },
                        minLength: {
                            message: 'Password must be at least 8 characters long'
                        },
                        regex: {
                            message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                            regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[^\s]{8,}$/
                            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        }
                    }
                },
                'cpassword': {
                    validators: {
                        notEmpty: {
                            message: 'Please confirm your password'
                        },
                        identical: {
                            compare: function () {
                                return form.querySelector('[name="password"]').value;
                            },
                            message: 'Password did not match',
                        },
                    }
                }


            },

            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap: new FormValidation.plugins.Bootstrap5({
                    rowSelector: '.registration_form_validation',
                    eleInvalidClass: '',
                    eleValidClass: ''
                })
            }
        }

    );
    // Submit button handler
    const submitButton = document.getElementById('registration_form_submit');
    submitButton.addEventListener('click', function (e) {
        // Prevent default button action
        e.preventDefault();

        // Validate form before submit
        if (validator) {
            validator.validate().then(function (status) {
                console.log('validated!');

                if (status == 'Valid') {
                    AddData();
                    // Show loading indication
                    submitButton.setAttribute('data-kt-indicator', 'on');


                    // Disable button to avoid multiple click
                    submitButton.disabled = true;

                    // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                    setTimeout(function () {
                        // Remove loading indication
                        submitButton.removeAttribute('data-kt-indicator');

                        // Enable button
                        submitButton.disabled = false;

                        // Show popup confirmation
                        Swal.fire({
                            text: "Form has been successfully submitted!",
                            icon: "success",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        })
                            .then(function () {
                                window.location.href = "Index.html";
                            })
                    }, 2000);


                }
            });


        }

    });

})


function Reset() {
    validator.resetForm(true);

}