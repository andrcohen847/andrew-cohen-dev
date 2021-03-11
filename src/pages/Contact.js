import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.png';
import pic2 from '../assets/images/pic02.png';
import pic3 from '../assets/images/pic03.png';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import banner from '../assets/images/banner.jpg';
const IndexPage = () => <Layout fullMenu>
	<article id="main">
		<header>
			<h2>Contact</h2>
			<p>Feel free to reach out and I'll get back to you as soon as I can!</p>
		</header>
		<section className="wrapper style5">
			<div className="inner">
				<section>
					<h4>Form</h4>
					<form method="post" action="#">
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall">
								<input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" />
							</div>
							<div className="col-6 col-12-xsmall">
								<input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" />
							</div>
							<div className="col-12">
								<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
							</div>
							<div className="col-12">
								<ul className="actions">
									<li><input type="submit" value="Send Message" className="primary" /></li>
								</ul>
							</div>
						</div>
					</form>
				</section>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
