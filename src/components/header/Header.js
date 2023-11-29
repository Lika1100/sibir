import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Ресторан 
						<br/><em>Сибирь</em>
					</strong>
					<br />дико вкусное место
				</h1>
				<div className="header__text">
					<p></p>
				</div>
				{/* <a href="#!" className="btn">
					Download CV
				</a> */}
			</div>
		</header>
	);
}

export default Header;