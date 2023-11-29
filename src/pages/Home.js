import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Новости</h2>
							<p>
								Мы запустили новое меню.
								Скорей приходи пробовать. Большой выбор блюд европейской и азиатской кухни.
								С нетерпением ждём в гости
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Акции</h2>
							<p>Стань нашим постоянным гостем, зарегестрируйся в программе лояльности.
							   Получай кешбэк от 5% и списывай до 20% процентов бонусов.
							</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;