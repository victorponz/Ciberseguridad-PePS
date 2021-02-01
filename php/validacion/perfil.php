<?php
session_start();
if (!$_SESSION['ya_registrado']){
	header('Location: login.php');
}
if ($_SESSION['ROL'] != "USER"){
	header('Location: no-autorizado.php');
}
?>
<h1>Página de perfil del usuario.</h1>
