$(document).ready(function(){
    $('#dataTable1').DataTable({

    })
    
 
})
// to get the value of forms while the page load
$(document).ready(function(){
    var obj =[
        {
            'name':'swathi',
            'age':'10',
            'place':'kgm',
            'phone':'89233456',
            'id':'1'
            
        },
        {
            'name':'suresh',
            'age':'10',
            'place':'kgm',
            'phone':'89233456',
            'id':'2'
            
        }
    ]
    console.log(obj[0]['name'])
    console.log(obj[1].age)
    for(var i=0;i<obj.length;i++){
        var edit='<button value='+obj[i].id+'>Edit</button>'
        var deletet='<button>Delete</button>'
        console.log(obj[i].name)
        var tableData=[];

        tableData.push([obj[i].name],[obj[i].age],[obj[i].phone],[obj[i].place],[edit],[deletet])

        var table = $('#dataTable1').DataTable()
        table.row.add(tableData).draw()
    }
})

$(document).ready(function(){
    var dataArray = [];
    $('#tableForm1').validate({
        rules:{
            fname:{
                required:true
            },
            lname:{
                required:true
            },
            dob:{
                required:true
            },
            phone:{
                required:true
            },
            place:{
                 required:true
            }
        },
        messages:{
            fname:{
                required:'This Field is required'
            },
            lname:{
                required:'This Field is required'
            },
            dob:{
                required:'This Field is required'
            },
            phone:{
                required:'This Field is required'
            },
            place:{
                required:'This Field is required'
            }
        },
        submitHandler:function(form){
            // var x=$(f).serializeArray()
            // console.log(x)
            var tableData=[];

            var fname = $('input[name=fname]').val()
            var lname = $('input[name=lname').val()
            var dob = $('input[name=dob').val()
            var phone = $('input[name=phone').val()
            var place = $('input[name=place').val()

            
            var data={
                'fname':fname,
                'lname':lname,
                'dob':dob,
                'phone':phone,
                'place':place
            }
            dataArray.push(data)
            console.log(dataArray)

            $('#tableForm1').trigger("reset")

            age=TableForm(dob)
            var name=fname+' '+lname                                        

            tableData.push([name],[age],[phone],[place])
            var table = $('#dataTable1').DataTable()
            table.row.add(tableData).draw()

          

            
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
}




