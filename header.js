const header = `
<!-- HEADER -->
	<div class="header header-1">
		<!-- TOP BAR -->
		<div class="topbar d-none d-md-block">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-sm-6 col-md-6">
						<p class="mb-0">Leaders for electrical, instrumentation and mechanical materials</p>
					</div>

					<div class="col-sm-6 col-md-6">
						<div class="sosmed-icon d-inline-flex pull-right">
							<a class="pl-2 pr-2 " href="tel: +966 54 743 7065"
								style="width: auto; display: flex; flex-direction: row; align-items: center;"><i
									class="fa fa-phone mr-2"> </i>+966 54 743 7065</a>
						</div>
					</div>


				</div>
			</div>
		</div>

		<!-- NAVBAR SECTION -->
		<div class="navbar-main">
			<div class="container">
				<nav id="navbar-example" class="navbar navbar-expand-lg">
					<a class="navbar-brand" href="index.html">
						<img src="images/logo-dark.png" alt="">
					</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNavDropdown">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item">
								<a id="home" class="nav-link" href="/" data-toggle="dropdown" aria-haspopup="true"
									aria-expanded="false">
									HOME
								</a>
							</li>

							<li class="nav-item">
								<a id="aboutus" class="nav-link" href="about-company.html">
									ABOUT US
								</a>
							</li>

							<li class="nav-item dropdown">
								<a id="service" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
									aria-haspopup="true" aria-expanded="false">
									SERVICES
								</a>
								<div class="dropdown-menu">
									<a id="conduit" class="dropdown-item" href="services-1-conduit.html">Conduit</a>
                                    <a id="conduit-fittings" class="dropdown-item" href="services-2-conduit-fittings.html">Conduit Fittings</a>														                                                        
                                    <a id="cable-accessories-management-system" class="dropdown-item" href="services-3-cable-accessories-management-system.html">Cable Accessories Management System</a>
                                    <a id="tools-accessories" class="dropdown-item" href="services-4-tools-accessories.html">Tools Accessories</a>
								    <a id="pvc-pipes-and-fittings" class="dropdown-item" href="services-5-pvc-pipes-and-fittings.html">PVC Pipes And Fittings</a>
                                    <a id="cable-termination-accessories" class="dropdown-item" href="services-6-cable-termination-accessories.html">Cable Termination Accessories</a>
                                    <a id="pvc-coated-explosion-proof-materials" class="dropdown-item" href="services-7-pvc-coated-explosion-proof-materials.html">PVC-Coated / Explosion-Proof Materials</a>
                                    <a id="weatherproof-boxes" class="dropdown-item" href="services-8-weatherproof-boxes.html">Weatherproof Boxes</a>
                                </div>
							</li>

							<li class="nav-item">
								<a id="contact" class="nav-link" href="contact.html">CONTACT</a>
							</li>

						</ul>
					</div>
				</nav> <!-- -->
			</div>
		</div>

	</div>
    `
    document.getElementById('header').innerHTML = header;

    switch (window.location.pathname) {
        case '/':
            document.getElementById('home').className = 'nav-link active';
            break;
        case '/about-company.html':
            document.getElementById('aboutus').className = 'nav-link active';
            break;
        case '/contact.html':
            document.getElementById('contact').className = 'nav-link active';
            break;
        
        case '/services-1-conduit.html':
            document.getElementById('service').className = 'nav-link dropdown-toggle active';
            document.getElementById('conduit').className = 'dropdown-item active';
            break;
        case '/services-2-conduit-fittings.html':
            document.getElementById('service').className = 'nav-link dropdown-toggle active';
            document.getElementById('conduit-fittings').className = 'dropdown-item active';
            break;
        case '/services-3-cable-accessories-management-system.html':
            document.getElementById('service').className = 'nav-link dropdown-toggle active';
            document.getElementById('cable-accessories-management-system').className = 'dropdown-item active';
            break;
        case '/services-4-tools-accessories.html':
            document.getElementById('service').className = 'nav-link dropdown-toggle active';
            document.getElementById('tools-accessories').className = 'dropdown-item active';
            break;
        case '/services-5-pvc-pipes-and-fittings.html':
            document.getElementById('service').className = 'nav-link dropdown-toggle active';
            document.getElementById('pvc-pipes-and-fittings').className = 'dropdown-item active';
            break;
        case '/services-6-cable-termination-accessories.html':
            document.getElementById('service').className = 'nav-link dropdown-toggle active';
            document.getElementById('cable-termination-accessories').className = 'dropdown-item active';
            break;
        case '/services-7-pvc-coated-explosion-proof-materials.html':
            document.getElementById('service').className = 'nav-link dropdown-toggle active';
            document.getElementById('pvc-coated-explosion-proof-materials').className = 'dropdown-item active';
            break;
        case '/services-8-weatherproof-boxes.html':
            document.getElementById('service').className = 'nav-link dropdown-toggle active';
            document.getElementById('weatherproof-boxes').className = 'dropdown-item active';
            break;
    
        default:
            break;
    }