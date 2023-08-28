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
  	 			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      
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
  	 				<li><a href="#"><i class="fa-solid fa-phone"></i>9578299777</a></li>
					<li><a href="#">9788852165</a></li>
					<li><a href="#">9962577109</a></li>
  	 				<li><a href="#">contact@rkricemill.com</a></li>
  	 				
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  );
}

export default Footer;
