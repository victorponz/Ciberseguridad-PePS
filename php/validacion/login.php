<?php
//ini_set( 'session.cookie_httponly', 1 );
session_start();

//En una aplicación real, los usuarios estarían almaenados en la base de datos
$valid_passwords = array ("mario" => "carbonell");
$valid_users = array_keys($valid_passwords);

$ya_registrado = $_SESSION['ya_registrado'] ?? false;


if ($_SERVER['REQUEST_METHOD'] == "POST" && !$ya_registrado){
	$usuario = $_POST['usuario'] ?? "";

	$password = $_POST['password'] ?? "";


	$ya_registrado = (in_array($usuario, $valid_users)) && ($password == $valid_passwords[$usuario]);
	if ($ya_registrado){
		$_SESSION['ya_registrado'] = true;
		$_SESSION['usuario'] = $usuario;
	}
}

if ($ya_registrado){
	// If arrives here, is a valid user.
	echo "<p>Welcome " . $_SESSION['usuario'] . "</p>";
	echo "<p>Congratulations, you are into the system.</p>";
}else{
?>
	
	<form action='login.php' method='post'>
		Usuario: <input type='text' name = "usuario" id="usuario" value=""><br>
		Contraseña: <input type='password' name = "password" id = "password" value=""><br>
		<input type='submit' value='Enviar'>
	</form>
<?php
}
?>
