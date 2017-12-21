import Head from './head'

const Nav = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-shrink" id="mainNav">
       <div className="container">
         <a className="navbar-brand js-scroll-trigger" href="/#top">Nextjs in Firebase with Bootstrap</a>
         <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
           Menu
           <i className="fa fa-bars"></i>
         </button>
         <div className="collapse navbar-collapse" id="navbarResponsive">
           <ul className="navbar-nav ml-auto">
             <li className="nav-item">
               <a className="nav-link js-scroll-trigger" href="/#use">How to use?</a>
             </li>
             <li className="nav-item">
               <a className="nav-link js-scroll-trigger" href="/#refs">References</a>
             </li>
             <li className="nav-item">
               <a className="nav-link js-scroll-trigger" href="https://github.com/ananddayalan/nextjs-in-firebase-with-bootstrap/issues">Issues</a>
             </li>
             <li className="nav-item">
               <a className="nav-link js-scroll-trigger" href="https://github.com/ananddayalan/nextjs-in-firebase-with-bootstrap/">Github</a>
             </li>
           </ul>
           <form className="nav-item">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          </form>
         </div>
       </div>
       <style jsx>{`

         #mainNav {
           background-color: #fff;
           border-bottom: 1px solid;
           z-index: 1000;
         }
           #mainNav .navbar-toggler {
             font-size: 1em;
             right: 0;
             padding: 1em;
             color: white;
             border: 0;
             font-family:  "Noto Serif",Georgia,Times New Roman,serif;
           }
           #mainNav .navbar-brand {
             color: #53c4cc;
             font-family:  "proxima-nova", Helvetica, Arial, sans-serif;
           }
             #mainNav .navbar-brand.active, #mainNav .navbar-brand:active, #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {
               color: #53c4cc;
             }
           #mainNav .navbar-nav .nav-item .nav-link {
             font-size: 80%;
             font-weight: 400;
             padding: 0.75em 0;
             letter-spacing: 1px;
             color: #ccc;
             font-family: "Noto Serif",Georgia,Times New Roman,serif; }
             #mainNav .navbar-nav .nav-item .nav-link.active, #mainNav .navbar-nav .nav-item .nav-link:hover {
               color: #53c4cc;
             }

         .navbar-nav{
           display: table;
         }
         .navbar-nav > li{
           display: table-cell;
         }

         @media (min-width: 992px) {
           #mainNav {
             padding-top: 0.5em;
             padding-bottom: 0.5em;
             -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
             -moz-transition: padding-top 0.3s, padding-bottom 0.3s;
             transition: padding-top 0.3s, padding-bottom 0.3s;
             border: none;
             background-color: transparent;
             border-bottom: 1px solid;
             border-color: #27a5af;
           }
             #mainNav .navbar-brand {
               font-size: 1.2em;
               -webkit-transition: all 0.3s;
               -moz-transition: all 0.3s;
               transition: all 0.3s; }
             #mainNav .navbar-nav .nav-item .nav-link {
               padding: 1.1em 1em !important; }
             #mainNav.navbar-shrink {
               padding-top: 0;
               padding-bottom: 0;
               background-color: #212529; }
               #mainNav.navbar-shrink .navbar-brand {
                 font-size: 1em;
                 padding: 12px 0; }
         }
         .navbar {
           min-height: 4em;
         }
         .navbar-brand: {
           color: #27a5af;
           font-size: 1em;
         }
       `}</style>
  </nav>
)

export default Nav
