<?php

function Gravar(string $texto, string $arquivo) {
    $fp = fopen($arquivo, "a+");
    fwrite($fp, "{$texto} <br>\r\n");
    fclose($fp);
}

?>