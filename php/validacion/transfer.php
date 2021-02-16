<?php
session_start();
if (!$_SESSION['ya_registrado']){
	header('Location: login.php');
}
print_r($_SESSION);
$from = $_SESSION['usuario'];
echo $from;
$to = $_GET['to'];
$quantity = $_GET['quantity'];
$BD = "Transferencia realizada de $from a $to; cantidad: $quantity\n";
$fichero = 'transfers.txt';
// Abre el fichero para obtener el contenido existente
$actual = file_get_contents($fichero);
// Escribe el contenido al fichero
file_put_contents($fichero, $BD, FILE_APPEND);
