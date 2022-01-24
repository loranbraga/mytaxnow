function App() {
  return (
    <>
     <a class="menu-toggle rounded" href="#"><i class="fas fa-bars"></i></a>
        <nav id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand"><a href="#page-top">Start Bootstrap</a></li>
                <li class="sidebar-nav-item"><a href="#page-top">Home</a></li>
                <li class="sidebar-nav-item"><a href="#about">About</a></li>
                <li class="sidebar-nav-item"><a href="#services">Services</a></li>
                <li class="sidebar-nav-item"><a href="#portfolio">Portfolio</a></li>
                <li class="sidebar-nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <header class="masthead d-flex align-items-center">
            <div class="container px-4 px-lg-5 text-center">
                <h1 class="mb-1">My Tax Now</h1>
                <h3 class="mb-5"><em>Faça seu imposto com a gente</em></h3>
                <a class="btn btn-primary btn-xl" href="#about">Saiba mais</a>
            </div>
        </header>
        <section class="content-section bg-light" id="about">
            <div class="container px-4 px-lg-5 text-center">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-10">
                        <h2>My Tax Now</h2>
                        <p class="lead mb-5">
                            Time altamente capacitado em resolver seus problemas.
                        </p>
                        <a class="btn btn-dark btn-xl" href="#services">Serviços</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="content-section bg-primary text-white text-center" id="services">
            <div class="container px-4 px-lg-5">
                <div class="content-section-heading">
                    <h3 class="text-secondary mb-0">Serviços</h3>
                    <h2 class="mb-5">O que temos a oferecer</h2>
                </div>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-doc"></i></span>
                        <h4><strong>Tax</strong></h4>
                        <p class="text-faded mb-0">Experiência com tax</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-speedometer"></i></span>
                        <h4><strong>Rapidez</strong></h4>
                        <p class="text-faded mb-0">Freshly redesigned for Bootstrap 5.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-wallet"></i></span>
                        <h4><strong>Custo Benefício</strong></h4>
                        <p class="text-faded mb-0">
                            Millions of users
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-star"></i></span>
                        <h4><strong>Exclusividade</strong></h4>
                        <p class="text-faded mb-0">I mustache you a question...</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="callout">
            <div class="container px-4 px-lg-5 text-center">
                <h2 class="mx-auto mb-5">
                    Entre em contato
                    agora
                    e encomende seu tax!
                </h2>
                <a class="btn btn-primary btn-xl" href="https://api.whatsapp.com/send?phone=55+1%20(508)%20361-3183&text=Quero%20encomendar%20meu%20Tax">Whatsapp</a>
            </div>
        </section>
       
        <section class="content-section bg-primary text-white">
            <div class="container px-4 px-lg-5 text-center">
                <h2 class="mb-4">The buttons below are impossible to resist...</h2>
                <a class="btn btn-xl btn-light me-4" href="#!">Click Me!</a>
                <a class="btn btn-xl btn-dark" href="#!">Look at Me!</a>
            </div>
        </section>
        <div class="map" id="contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.11767470678!2d-71.42308338454369!3d42.361331379186836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e38f1983fd39af%3A0xeb6ce09ad47665c8!2sRossini&#39;s%20Pizzeria!5e0!3m2!1spt-BR!2sbr!4v1643063932318!5m2!1spt-BR!2sbr"></iframe>
            <br />
            <small><a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a></small>
        </div>
        <footer class="footer text-center">
            <div class="container px-4 px-lg-5">
                <ul class="list-inline mb-5">
                    <li class="list-inline-item">
                        <a class="social-link rounded-circle text-white mr-3" href="#!"><i class="icon-social-facebook"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a class="social-link rounded-circle text-white mr-3" href="#!"><i class="icon-phone"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a class="social-link rounded-circle text-white" href="#!"><i class="icon-social-instagram"></i></a>
                    </li>
                </ul>
                <p class="text-muted small mb-0">Copyright &copy; MyTaxNow 2022</p>
            </div>
        </footer>
        <a class="scroll-to-top rounded" href="#page-top"><i class="fas fa-angle-up"></i></a>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
    </>

       

  );
}

export default App;
