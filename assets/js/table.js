$(document).ready(function () {
    $('#dataTable').DataTable({

    });
});

$(document).ready(function () {
    var textArray = [];

    $('#tableForm').validate({
        
        rules: {
            name: {
                required: true
            },
            dob: {
                required: true
            },
            phone: {
                required: true
            },

        },
        messages: {
            name: {
                required: 'This Field is required'
            },
            dob: {
                required: 'This Field is required'
            },
            phone: {
                required: 'This Field is required'
            },
        },

        submitHandler: function (form) {

            var name = $('input[name=name]').val()
            var dob = $('input[name=dob]').val()
            var phone = $('input[name=phone]').val()

            // TableForm(name,dob,phone)
// create empty array and object to push datas 
            var data = {
                'name': name,
                'dob': dob,
                'phone': phone
            }
            textArray.push(data)
            console.log(textArray)
            $('#tableForm').trigger("reset")

            age=TableForm(dob)
// to push data from form into table
            var TableData=[];
            TableData.push([name,age,phone])
            var table = $('#dataTable').DataTable()
            table.draw()
            table.rows.add(TableData).draw()

        }


    })
})


function TableForm(dob) {

    var str = dob.split('-');
    var firstdate = new Date(str[0], str[1], str[2]);
    var today = new Date();
    var dayDiff = Math.ceil(today.getTime() - firstdate.getTime()) / (1000 * 60 * 60 * 24 * 365);
    var age = parseInt(dayDiff);
    return (age)


    // console.log(name, dob, phone)
    // var textArray = [];

    // var data = {
    //     'name': name,
    //     'dob': dob,
    //     'phone': phone
    // }
    // textArray.push(data)

    // console.log(textArray)
    // console.log(data['name'])
}