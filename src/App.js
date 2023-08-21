

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <!-- ======= Top Bar ======= --> */}
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex justify-content-center justify-content-md-between">

            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
              <i className="bi bi-clock d-flex align-items-center ms-4"><span> Mon-Sat: 11AM - 23PM</span></i>
            </div>

            <div className="languages d-none d-md-flex align-items-center">
              {/* <ul>
                <li>En</li>
                <li><a href="#">De</a></li>
              </ul> */}
            </div>
          </div>
        </div>
       
       <header id="header" className="fixed-top d-flex align-items-cente">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

        <h1 className="logo me-auto me-lg-0"><a href="index.html">Restaurantly</a></h1>
        {/* <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
            <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
            <li><a className="nav-link scrollto" href="#events">Events</a></li>
            <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li>
            <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
            <li className="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a href="#book-a-table" class="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>

      </div>
    </header>

    <section id="hero" classname="d-flex align-items-center">
    <div classname="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div classname="row">
        <div classname="col-lg-8">
          <h1>Welcome to <span>Restaurantly</span></h1>
          <h2>Delivering great food for more than 18 years!</h2>

          <div classname="btns">
            <a href="#menu" class="btn-menu animated fadeInUp scrollto">Our Menu</a>
            <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Book a Table</a>
          </div>
        </div>
        <div classname="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" classname="glightbox play-btn"></a>
        </div>

      </div>
    </div>
  </section>
  
       

    </div>
  );
}

export default App;
