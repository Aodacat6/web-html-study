$(document).ready(function () {


    $("#button").on("click", function () {
/*        $.get("http://localhost/api/login", {username:$("#username").val(),password:$("#password").val()},
            function (data, status) {
              console.log("data: " + JSON.stringify(data) + "status：" + status)
              //alert("data: " + data + "status：" + status)
                //$("#result").innerText = data;
                if (status == "success") {
                    $("#result").val(JSON.stringify(data))
                }else {
                    alert("登录失败")
                }
        });*/

        $.ajax({
            url:'http://localhost/api/login',
            type:'GET',
            data:{username:$("#username").val(),password:$("#password").val()},
            cache:true,
            headers:{},
            beforeSend: function(XMLHTTPRequest){
            //在发送请求之前调用，并且传入一个XMLHTTPRequest作为参数
        },
        success:function(data){
                alert("登录成功")
            $("#result").val(JSON.stringify(data))
            //当请求成功之后调用，传入返回的数据，以及包含成功代码字符串
            //$("#result").text = data;
        },
        error:function(data){
                alert("登录失败")
            $("#result").val(JSON.stringify(data))
        }
    });

    })
})