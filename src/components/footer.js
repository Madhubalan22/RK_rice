// Footer.js

import React from 'react';
import '../styles/footer.css'; // Create this CSS file for styling if needed

function Footer() {
  return (
    <footer className="footer">
  	 <div className="container-footer">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>About</h4>
				<p>RK Rice Mill, a trusted name in rice processing, delivers premium quality rice products. With state-of-the-art technology, we offer a wide range of processed rice over decades.
          </p>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Address</h4>
				<h3>RK Ricemill</h3>
				<p>K.Rajendran<br></br>Main Road<br/>Bhujankarayanallur<br/>Ariyalur<br/>621713</p>
  	 			
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contact</h4>
  	 			<ul>
  	 				<li><a href="tel:9578299777"><i class="fa-solid fa-phone"> </i>  9578299777</a></li>
					<li><a href="tel:9788852165"><i class="fa-solid fa-phone"> </i>  9788852165</a></li>
					<li><a href="tel:9962577109"><i class="fa-solid fa-phone"> </i>  9962577109</a></li>
  	 				<li><a href="mailto:contact@rkricemill.com">contact@rkricemill.com</a></li>
  	 				
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="https://www.facebook.com/yugendranrajendran.r"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="https://twitter.com/madhubalan22_"><i className="fab fa-x-twitter"></i></a>
  	 				<a href="mailto:contact@rkricemill.com"><i class="fa-regular fa-envelope"></i></a>
  	 				<a href="https://wa.me/+919788852165"><i class="fa-brands fa-whatsapp"></i></a>
  	 			</div>
			    <p>&copy;2023 RK Ricemill</p>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  );
}

export default Footer;
