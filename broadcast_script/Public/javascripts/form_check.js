(function ($) {
    function isValid(element, msg, checkValid) {
        var checkValue = element.val();
        var isCheckPass = true;
        for (var i=0;i<checkValue.length;i++) {
            if (checkValid.indexOf(checkValue.substring(i, i+1)) >= 0) {
                continue;
            } else {
                isCheckPass = false;
                break;
            }
        }
        if(!isCheckPass) {
            alert(msg);
            element.select();
        }
        return isCheckPass;
    }

    function isInt(x) {
        var y = parseInt(x, 10);
        if (isNaN(y)) {
            return false;
        }
        return (x == y) && (x.toString() == y.toString());
    }

    function isEmail(element, msg) {
        var email = element.val();
        if (email != "" && email.search(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) == -1) {
            alert(msg);
            element.select();
            return false;
        }
        return true;
    }

    function isEmpty(element, msg) {
        if ($.trim(element.val()) == "") {
            alert(msg);
            element.select();
            return false;
        }
        return true;
    }

    function isEqual(element1, element2, msg) {
        if ($.trim(element1.val()) != $.trim(element2.val())) {
            alert(msg);
            element2.select();
            return false;
        }
        return true;
    }

    function isDate(element, msg) {
        var date = element.val();
        if (date != "" && date.search(/^((19\d{2})|(20\d{2}))-((0[1-9]{1})|(1[0-2]{1}))-((0[1-9]{1})|([1-2]{1}[0-9]{1})|(3[0-1]{1}))$/) == -1) {
            alert(msg);
            element.select();
            return false;
        }
        return true;
    }

    var checkForm = function (data) {
        var checkResult = true;
        $.each(data, function(num, info) {
            switch (info.rule) {
                case "empty" :
                    checkResult = isEmpty($(info.field), info.msg);
                    break;
                case "eq" :
                    var fileds = info.field.split(",");
                    checkResult = isEqual($(fileds[0]), $(fileds[1]), info.msg);
                    break;
                case "email" :
                    checkResult = isEmail($(info.field), info.msg);
                    break;
                case "int" :
                    checkResult = isValid($(info.field), info.msg, checkNum);
                    break;
                case "alpha" :
                    checkResult = isValid($(info.field), info.msg, checkAlpha);
                    break;
                case "alnum" :
                    checkResult = isValid($(info.field), info.msg, checkAlnum);
                    break;
                case "date" :
                    checkResult = isDate($(info.field), info.msg);
                    break;
                default :
                    checkResult = true;
            }
            if (!checkResult) {
                return false;
            }
        });
        return checkResult;
    };

    $.extend({checkform:checkForm});
})(jQuery);
