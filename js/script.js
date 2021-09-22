$(document).ready(function () {
    $("#btnCadastrar").click(function () {

        //Objeto com as informações do formulário.
        var obj = {
            txtNome: $("#txtNome").val(),
            txtEmail: $("#txtEmail").val(),
            txtTelefone: $("#txtTelefone").val()
        };

        console.log(obj);
        //spResultado
        $.ajax({
            url: "action/UsuarioAction.php?req=1",
            type: "POST",
            dataType: "TEXT",
            //contentType: "application/json",
            data: obj,
            beforeSend: function () {
                $("#spResultado").html("Processando...");
            },
            success: function (data) {
                console.log(data);

                if (data == 1) {
                    $("#spResultado").css("color", "green");
                    $("#spResultado").html("Cadastrado.");
                } else {
                    $("#spResultado").css("color", "red");
                    $("#spResultado").html("Houve um erro ao tentar cadastrar, tente mais tarde.");
                }
            },
            error: function (error) {
                console.log(error);
            },
            complete: function () {

            }
        });

    });

    $("#btnConsultar").click(function () {
        $.ajax({
            url: "action/UsuarioAction.php?req=2",
            type: "GET",
            dataType: "TEXT",
            data: {},
            success: function (data) {
                console.log(data);
                $("#bqResultado").html(data);

                var dt = data.split("|");

                $("#txtNome").val(dt[0].split(":")[1]);
                $("#txtEmail").val(dt[1].split(":")[1]);
                $("#txtTelefone").val(dt[2].split(":")[1]);
            },
            error: function (error) {
                console.log(error);
            }
        });
    });


    $("#txtCep").focusout(function () {
        if ($("#txtCep").val().length >= 5) {

            var cep = $("#txtCep").val().replace("-", "");

            var url = "http://correiosapi.apphb.com/cep/" + cep;
            console.log(url);
            $.ajax({
                url: url,
                type: "GET",
                dataType: "JSONP",
                data: {},
                success: function (data) {
                    console.log(data);
                    if (data != null) {
                        $("#txtLogradouro").val(data.tipoDeLogradouro);
                        $("#txtRua").val(data.logradouro);
                        $("#txtBairro").val(data.bairro);
                        $("#txtCidade").val(data.cidade);
                        $("#txtEstado").val(data.estado);
                    }
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    });
});

//date("Y-m-d H:i:s").txt;