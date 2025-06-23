const Navigation = () => {

    return(
        <nav className="container">
            <div className="logo">
               <img src="/images/brand_logo.png" alt="logo"/> 
            </div>

            <ul>
              <a href="https://www.nike.com/in/men"> MENU </a>
              <a href="https://jobs.nike.com/locations"> LOCATION </a>
              <a href="https://nikecompanyblog.wordpress.com/about-us/"> ABOUT </a>
              <a href="https://nikekm.wordpress.com/contact/"> CONTACT </a>
            </ul>

           <a href="https://accounts.nike.com/lookup?client_id=4fd2d5e7db76e0f85a6bb56721bd51df&redirect_uri=https://www.nike.com/auth/login&response_type=code&scope=openid%20nike.digital%20profile%20email%20phone%20flow%20country&state=3d8acecd918b498f9e994d52d6b00e08&code_challenge=sPESQ2qKSL-89ENVCBGRnYUmVxey5BLqi2u5GC4m5v0&code_challenge_method=S256"><button>login</button></a> 
        </nav>
    );
};

export default Navigation;