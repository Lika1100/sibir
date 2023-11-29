const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Контакты</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Мы находимся по адресу</h2>
						<p>г. Севастополь, ул. Вакуленчука 29, ТРЦ "Муссон"</p>
						<p>Вход со стороны ледового катка</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p>
							<a href="tel:+79787061010">+7 (978) 706-10-10</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:sibir-sev@yandex.ru">
								sibir-sev@yandex.ru
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;