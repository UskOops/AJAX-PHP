<?php

$req = filter_input(INPUT_GET, "req", FILTER_SANITIZE_NUMBER_INT);
$arquivo = "usuario.txt";

switch($req){
    case 1:
        $nome = filter_input(INPUT_POST, "txtNome", FILTER_SANITIZE_STRING);
        $email = filter_input(INPUT_POST, "txtEmail", FILTER_SANITIZE_STRING);
        $telefone = filter_input(INPUT_POST, "txtTelefone", FILTER_SANITIZE_STRING);

        $str = "Nome: {$nome}|E-mail: {$email}|Telefone:{$telefone}";

        $fp = fopen($arquivo, "w");
        if(fwrite($fp, "{$str}")){
            echo "1";
        }else{
            echo "0";
        }
        fclose($fp);
    break;

    case 2:
        $fp = fopen($arquivo, "r");
        $texto = fread($fp, filesize($arquivo));
        fclose($fp);
        echo $texto;
    break;

    default:
        echo "nada";
    break;
}