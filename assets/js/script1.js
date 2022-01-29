$(document).ready(function () {
    var name = 'swathi'


    // $('#para1').empty()
    // $('#para2').empty()
    // $('#para3').empty()
    // $('#para1').append("loremmmmmmmmmmmm")
    // $('#para2').append("loremmmmmmmmmmmm gbkhbjjbkb,j")
    // $('#para3').append("loremmmmmmmmmmmm 12344567784269")
    // $('[id=paragra1]').html("0987654")
    // $('#paragra1').html("12345678")
})




// $('#btn1').click(function(){
//     $('#paragra1').hide()
// })
// $('#btn2').click(function(){
//     $('#paragra1').show()
// })


$('#btn1').click(function () {
    $('#paragra1').fadeOut(3000)
    setTimeout(function () {
        $('#btn1').html('Show')
        $('#btn1').attr('id', 'btn2')

    }, 3000);
});
// $('#btn2').click(function(){
//     $('#paragra1').fadeIn(1000)
//  });

$(document).on('click', '#btn2', function () {
    $('#paragra1').fadeIn(3000)
    $(this).html('Hide')
    $(this).attr('id', 'btn1')
});


$('#btn3').click(function () {
    $('#paragra1').fadeToggle(2000)
});

$(document).ready(function () {
    $('#form1').validate({

        rules:{
            fname:{
                required:true
            },
            lname:{
                required:true
            },
            email1:{
                required:true,
                email:true
            },
            psd:{
                required:true,
            },
            Cpsd:{
                required:true,
                equalTo:'#ConfirmPassword'
            },
            gender:{
                required:true,
                minlength:1
            },
            phone:{
                required:true
            }
           
        },
    messages:{
        fname:{
            required:'First Name is required'
        },
        lname:{
            required:'Last Name is required'
        },
        email1:{
            required:'This Feild is required',
            email:'This is not a valid email'
        },
        psd:{
            required:'This Feild is required'
        },
        Cpsd:{
            required:'This Feild is required',
            equalTo:'Password does not match'
        },
        gender:{
            required:'This Feild is required',
            minlength:'You can select only one'
        },
        phone:{
            required:'This Feild is required'
        }
    },
    submitHandler: function(form) {
        var x = $(form).serializeArray();
        console.log(x)
        var fname = $('input[name=fname]').val()
        var lname = $('input[name=lname]').val()
        var email = $('input[name=email1]').val()
        var password = $('input[name=psd]').val()
        var gender = $('input[name=gender]').val()
        var phone = $('input[name=phone]').val()


        var data1={
            'fname':fname,
            'lname':lname,
            'email':email
        }
        var data2={
            'password':password,
            'gender':gender,
            'phone':phone
        }
        console.log(data1,data2)


    }

    });

});




$('#male').change(function(){
    if($(this).prop('checked')==true){
        $('#female').prop('checked',false)
    }
});
$('#female').change(function(){
    if($(this).prop('checked')==true){
        $('#male').prop('checked',false)
    }
});



$('#workNumber').keyup(function(){
    var workNo = $(this).val()
    console.log(workNo)
    if(workNo.length==0){
        $('#Company').hide();
        $('input[name=company]').val(null)
    }
    else{
        $('#Company').show();
    }
    
});

$(document).ready(function(){
    
    $('#Company').hide()
})

$(document).ready(function () {
    $('#form2').validate({


        rules:{
            fname:{
                required:true
            },
            mname:{
                required:true
            },
            lname:{
                required:true
            },
            date:{
                required:true
            },
            gender:{
                required:true,
                minlength:1
            },
            
            Street:{
                required:true,
                minlength:1
            },
           
            city:{
                required:true

            },
            state:{
                required:true
            },
            pincode:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            mobile:{
                required:true,
                minlength:1
            },
            company:{
                required:true
            },
            courses:{
                required:true
            },
            comments:{
                required:true
            },
           
        },
    messages:{
        fname:{
            required:'First Name is required'
        },
        fname:{
            required:'Middle Name is required'
        },
        lname:{
            required:'Last Name is required'
        },
        date:{
            required:'Date of Birth  is required'
        },
        gender:{
            required:'This Feild is required',
            minlength:'You can select only one'
        },
        Street:{
            required:'Any one of Street  is required'
        },
        city:{
            required:'Your city is required'
        },
        state:{
            required:'Your State is required'
        },
        pincode:{
            required:'Your Pincode is required'
        },
        
        email:{
            required:'This Feild is required',
            email:'This is not a valid email'
        },
        mobile:{
            required:'Anyone of your contact is required'
        },
        company:{
            required:'Complete your company details'
        },
        courses:{
            required:'This Feild is required'
        },
        comments:{
            required:'This Feild is required'
        },

    },
    submitHandler: function(form) {
        
        var x = $(form).serializeArray();
        fun1(x)
        console.log(x)
        var fname = $('input[name=fname]').val()
        var mname = $('input[name=mname]').val()
        var lname = $('input[name=lname]').val()
        var date = $('input[name=date]').val()
        var gender = $('input[name=gender]').val()
        var Street = $('input[name=Street]').val()
        var city = $('input[name=city]').val()
        var state = $('input[name=state]').val()
        var pincode = $('input[name=pincode]').val()
        var email = $('input[name=email]').val()
        var mobile = $('input[name=mobile]').val()
        var company = $('input[name=company]').val()
        var courses = $('input[name=courses]').val()
        var comments = $('input[name=comments]').val()


    }


});

});

$('#Clear').click(function(){
    $('#form2').trigger("reset");
})





function fun1(y){
    console.log(y)
}