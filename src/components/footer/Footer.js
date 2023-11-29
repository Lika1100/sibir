import "./style.css";

import vk from './../../img/icons/vk.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="https://vk.com/sibir_sev" target="_blank">
								<img src={vk} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2023</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;