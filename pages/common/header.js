export function loadHeader() {
    const headerHTML = `
         <nav class="navbar navbar-expand-xl navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#intro">
                    <img src="./pics/lomdei_logo.png" alt="Lomdei Logo" id="navbar-logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-ul">
                        <div class="dropdown">
                            <a class="dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                About Lomdei
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item nav-link" href="./pages/lomdei/about-lomdei.html">About
                                        Lomdei</a></li>
                                <li><a class="dropdown-item nav-link" href="./pages/lomdei/our-team.html">Our Team</a>
                                </li>
                                <li><a class="dropdown-item nav-link" href="./pages/lomdei/grants.html">Title
                                    Dollars</a>
                                </li>
                                <li><a class="dropdown-item nav-link" href="./pages/lomdei/gallery.html">Gallery</a>
                                </li>
                                <li><a class="dropdown-item nav-link" href="./pages/lomdei/schools.html">Schools Using
                                        Lomdei Services</a></li>
                                <li><a class="dropdown-item nav-link" href="./pages/lomdei/contact.html">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <a class="dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Learning Platform Division
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item nav-link" href="./pages/platform/about-platform.html">About
                                        the Learning Platform</a></li>
                                <li><a class="dropdown-item nav-link" href="./pages/platform/benefits.html">Benefits of
                                        the Learning Platform</a></li>
                                <li><a class="dropdown-item nav-link" href="./pages/platform/packages.html">Platform
                                        Software Package</a></li>
                                <li><a class="dropdown-item nav-link" href="./pages/platform/features.html">Features of
                                        the Learning Platform</a></li>
                                <li><a class="dropdown-item nav-link" href="./pages/platform/kosher-devices.html">Use of
                                        the Learning Platform on Kosher Devices</a></li>
                                <li><a class="dropdown-item nav-link" href="./pages/platform/services.html">Lomdei
                                        Platform Services</a></li>
                                <li><a class="dropdown-item nav-link" href="./pages/platform/video.html">Video
                                        Tutorials</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <a class="dropdown-toggle nav-link" href="#" role="button" id="dropdownMenuLink"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                PD and Coaching Division
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item nav-link" href="./pages/BPL/about-BPL.html">Lomdei’s PD & Coaching Advantage</a></li>
                                <li><a class="dropdown-item nav-link" href="./pages/BPL/pd-program.html">About the PD & Coaching Program</a></li>
                                <li><a class="dropdown-item nav-link" href="./pages/BPL/packages.html">PD & Coaching Packages</a>
                                </li>
                                <li><a class="dropdown-item nav-link" href="./pages/BPL/benefits.html">Benefits of BPL </a></li>
                                <li><a class="dropdown-item nav-link"
                                        href="./pages/BPL/examples-resources.html">Examples and Resources for BPL</a>
                                </li>
                                <li><a class="dropdown-item nav-link"
                                        href="https://sites.google.com/view/thebplclassroom/home" target="_blank">Lomdei
                                        Learning Lab</a></li>
                            </ul>
                        </div>
                        <li class="nav-item">
                            <a class="nav-link" id="login" href="https://app.lomdei.net/">Log in to
                                Learning Platform</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }
  