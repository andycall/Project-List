/**
 * Created by andycall on 14-3-19.
 */
function open(elem) {
    if (document.createEvent) {
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        elem[0].dispatchEvent(e);
    } else if (element.fireEvent) {
        elem[0].fireEvent("onmousedown");
    }
}

$(document).ready(function() {

//    $('.select_button').click(function() {
//        open($('#colleage'));
//    });
    $(".select_button").delegate('img','click',function(){
//        open($('#colleage'));
        alert(1);
    });
    $(".select_button").on('click',function(){
//        open($('#colleage'));
        alert(1);
    })
    $("#colleage").on('change',function(e){
        var changeValue = e.target.value;
//        console.log(changeValue);
        $("input[name='colleage']").val(changeValue);
    });
    $('.cancel').click(function(){
        var input = $(this).parent().find("input").val("");
    });
    $(".right_cancel").click(function(){
        $("#content").val("");
    });
    document.getElementById("Form").addEventListener('submit',function(e){
        console.log(e);
        e.preventDefault();
        var colleage = $(this).find("input[name='colleage']").val();
        var grade = $(this).find("input[name='grade']").val();
        var name = $(this).find("input[name='name']").val();
        var content = $(this).find("textarea").val();
        if(!colleage){
            alert("擦..LOL学院？");
            return false;
        }
        else if(!grade){
            alert("2014届的？");
            return false;
        }
        else if(!name){
            alert("名字去哪了？");
            return false;
        }
        else if(!content){
            alert("你的评论隐身能力很强哈。。");
            return false;
        }
        e.returnValue = true;
    });
});
