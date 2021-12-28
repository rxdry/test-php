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
<nav class="navbar navbar-expand-lg navbar-light bg-light py-3 px-md-5">
	<img src="img/logo.png" alt="Logo Portal Recargas">
	<a class="navbar-brand" href="#">Recarga Fácil</a>
</nav><div class="header">
	<h1>Recarga Movistar</h1>
</div>
<form action="step4movistar.php" method="POST">
<div class="container-fluid">
	<div class="row d-flex justify-content-center">
		<div class="col-md-6 col-10 contenedor_recarga">
			<h1>Rellena el número telefónico</h1>
			<h2>El móvil será recargado directamente.</h2>
			<div class="row d-flex justify-content-center align-items-center flex-column">
				<div class="col-md-6 col-12">
					<label for="cellphone">Número telefónico</label>
				</div>
				<div class="col-md-6 col-12">
					<div class="inputphone row">
						<div class="col-md-2 col-3 d-flex flex-row">
							<img src="img/arg.png" alt="Argentina" class="pr-1">
							+54
						</div>
						<div class="col-md-10 col-9">
							<input type="text" id="cellphone" name="cellphone" required>
						</div>
					</div>
				</div>
			</div>
			<button>Siguiente</button>
		</div>
	</div>
</div>
<input type="hidden" name="price" value="555">
</form>
<script src="js/jquery.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/custom.js"></script></body>
</html>