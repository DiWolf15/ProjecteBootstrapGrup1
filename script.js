var salutacions = "hola";
var header = document.getElementById("titol");
header.innerHTML = `
<div class="row">
				<div class="col col-12 col-sm-12">
					<nav class="navbar navbar-expand-lg background p-4">
						<div class="container-fluid">
						  <a class="navbar-brand" href="#">EXERCICIS GYM</a>
						  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						  </button>
						  <div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							  <li class="nav-item">
								<a class="nav-link active background" aria-current="page" href="index.html">Home</a>
							  </li>
							  <li class="nav-item">
								<a class="nav-link background" href="#">Link</a>
							  </li>
							  <li class="nav-item">
								<a class="nav-link disabled background" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
							  </li>
							</ul>
						  </div>
						</div>
					  </nav>
				</div>
			</div>
`;

