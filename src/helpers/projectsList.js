import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";

import project02 from "./../img/projects/02.jpg";

import cheese from "../img/projects/cheese.jpg";
import assorty from "../img/projects/assorty.jpg";
import fishAss from "../img/projects/fishAss.jpg";
import seld from "../img/projects/seld.jpg";
import hamsa from "../img/projects/hamsa.jpg";
import pivnoyMix from "../img/projects/pivnoyMix.jpg";
import zakuska from "../img/projects/zakuskaVodka.jpg";
import salo from "../img/projects/salo.jpg";
import defaultImg from "../img/projects/default.jpg";
import grech from "../img/projects/greshesky.jpg";
import greenS from "../img/projects/greenS.jpg";
import nisuaz from "../img/projects/nisuaz.jpg";
import salatTunez from "../img/projects/salatTunez.jpg";
import salatSemga from "../img/projects/salatSemga.jpg";
import salatKalmar from "../img/projects/salatKalmar.jpg";
import cezarKur from "../img/projects/CazarKur.jpg";
import cezarKrev from "../img/projects/CazarKrev.jpg";
import salatMore from "../img/projects/salatMoreprod.jpg";
import salatSkum from "../img/projects/salatSkumbr.jpg";
import olivePer from "../img/projects/olivePerep.jpg";
import oliveSemga from "../img/projects/oliveSemga.jpg";
import salatSteyk from "../img/projects/salatSteyk.jpg";
import salatParma from "../img/projects/salatParma.jpg";
import salatDerev from "../img/projects/salatDerev.jpg";
import tartar from "../img/projects/tartar.jpg";
import pashtet from "../img/projects/pashtet.jpg";
import midii from "../img/projects/midii.jpg";
import krevetki from "../img/projects/krevetka.jpg";
import kamamber from "../img/projects/kamamber.jpg";
import kalmar from "../img/projects/kalmar.jpg";
import krylya from '../img/projects/krylya.jpg';
import bliny  from "../img/projects/blyny.jpg";
import borch from "../img/projects/borch.jpg";
import slivochSup from "../img/projects/slivochniySup.jpg";
import tykvaSup from "../img/projects/tykvaSup.jpg";
import tomyam from "../img/projects/tomyam.jpg";
import kartSup from "../img/projects/kartofelSup.jpg";
import hashlama from "../img/projects/hashlamaSup.jpg";
import kurBul from "../img/projects/bulion.jpg";
import solyanka from "../img/projects/solyanka.jpg";
import setMyasa from "../img/projects/setMyasa.jpg";
import setKolbas from "../img/projects/setKolbasok.jpg";
import setPivM from "../img/projects/setMalenkiy.jpg";
import setPivB from "../img/projects/setBolshoy.jpg";
import steyk from "../img/projects/steikFon.jpg";
import pastaBolon from "../img/projects/boloneze.jpg";
import pastaKarabon from "../img/projects/karbonara.jpg";
import pastaMore from "../img/projects/morePasta.jpg";
import pasta4Sira from "../img/projects/4sira.jpg";
import nioky from "../img/projects/niokky.jpg";
import pizzaMar from "../img/projects/margarita.jpg";
import pizza4sira from "../img/projects/4siraPizza.jpg";
import pizzaPepperoni from "../img/projects/pepperoniPizza.jpg";
import pizzaKrev from "../img/projects/krevetkaPizza.jpg";
import pizzaMyaso from "../img/projects/myasnayaPizza.jpg";
import pizzaGavay from "../img/projects/gavayskaya.jpg";
import kolbasGov from "../img/projects/govyagKolbas.jpg";
import rebra from "../img/projects/rebra.jpg";
import beafStr from "../img/projects/beafStrogan.jpg";
import vareniki from "../img/projects/vareniki.jpg";
import kolbasKur from "../img/projects/KurKolbasa.jpg";
import zharkoe from "../img/projects/zharkoe.jpg";
import rulkaBar from "../img/projects/RulkaBaran.jpg";
import perepelGril from "../img/projects/PerepelGril.jpg";
import skovoroda from "../img/projects/skovorodaMyasa.jpg";
import pelmeny from "../img/projects/pelmeny.jpg";
import kolbasSvin from "../img/projects/sbinKolbasky.jpg";
import kurSteak from "../img/projects/KurSteyk.jpg";
import svinRulka from "../img/projects/svinRulka.jpg";
import konfi from "../img/projects/utinayaKonfi.jpg";
import tabaka from "../img/projects/CipaTabaka.jpg";
import lososSteak from "../img/projects/lososSteyk.jpg";
import chizMarak from "../img/projects/chizMarak.jpg";
import napaleon from "../img/projects/naapoleon.jpg";
import shtrud from "../img/projects/shtrudel.jpg";
import beyliz from "../img/projects/beyliz.jpg";
import chizNY from "../img/projects/chizNY.jpg";
import trayf from "../img/projects/trayflSnik.jpg";
import grysha from "../img/projects/Grusha.jpg";

const projects = [
	{
		title: 'Холодные закуски',
		skills: 'React, Node.js, MongoDB',
		img: project01,
		imgBig: project01Big,
		gitHubLink: 'https://github.com',
		children: [
			{
				title: "Ассорти солений",
				price: 350,
				img: assorty
			},
			{
				title: "Сырное ассорти",
				price: 750,
				img: cheese
			},
			{
				title: "Рыбное ассорти",
				price: 330,
				img: fishAss
			},
			{
				title: "Тартар из говядины",
				price: 530,
				img: tartar
			},
			{
				title: "Паштет из куриной печени",
				price: 320,
				img: pashtet
			},
			{
				title: "Сельдь с картофелем",
				price: 330,
				img: seld
			},
			{
				title: "Хамса с картофелем",
				price: 330,
				img: hamsa
			},
			{
				title: "Пивной микс",
				price: 420,
				img: pivnoyMix
			},
			{
				title: "Сало солёное",
				price: 290,
				img: salo
			},
			{
				title: "Закуска к водке",
				price: 1200,
				img: zakuska
			},
			{
				title: "Шампиьоны маринованные",
				price: 230,
				img: defaultImg
			},
			{
				title: "Свиные уши острые",
				price: 250,
				img: defaultImg
			},
		]
	},
	{
		title: 'Салаты',
		img: project02,
		imgBig: grech,
		skills: 'React, PHP, MySql',
		children: [
			{
				title: "Греческий",
				price: 330,
				img: grech
			},
			{
				title: "Грин салат",
				price: 330,
				img: greenS
			},
			{
				title: "Нисуаз по-крымски",
				price: 260,
				img: nisuaz
			},
			{
				title: "Салат с тунцом",
				price: 330,
				img: salatTunez
			},
			{
				title: "Салат с сёмгой",
				price: 560,
				img: salatSemga
			},
			{
				title: "Салат с кальмаром",
				price: 490,
				img: salatKalmar
			},
			{
				title: "Цезарь с курицей и беконом",
				price: 490,
				img: cezarKur
			},
			{
				title: "Цезарь с креветкой",
				price: 520,
				img: cezarKrev
			},
			{
				title: "Салат с морепродуктами",
				price: 560,
				img: salatMore
			},
			{
				title: "Салат с копчёной скумбрией",
				price: 330,
				img: salatSkum
			},
			{
				title: "Оливье с перепёлкой",
				price: 330,
				img: olivePer
			},
			{
				title: "Оливье с сёмгой",
				price: 350,
				img: oliveSemga
			},
			{
				title: "Салат со стейком",
				price: 540,
				img: salatSteyk
			},
			{
				title: "Салат с пармой",
				price: 490,
				img: salatParma
			},
			{
				title: "Деревенский салат",
				price: 330,
				img: salatDerev
			},
		],
		gitHubLink: 'https://github.com',
	},
	{
		title: 'Горячие закуски',
		img: midii,
		imgBig: midii,
		skills: '',
		children: [
			{
				title: "Тигровые креветки гриль",
				price: 790,
				img: krevetki
			},
			{
				title: "Камамбер с ягодным соуосм",
				price: 450,
				img: kamamber
			},
			{
				title: "Кальмар фри",
				price: 290,
				img: kalmar
			},
			{
				title: "Мидии в створках с соусом на выбор (блю чиз или томатно-базиликовый)",
				price: 490,
				img: midii
			},
			{
				title: "Куриные крылья в соусе на выбор (терияки или кимчи)",
				price: 450,
				img: krylya
			},
			{
				title: "Блины с олениной",
				price: 450,
				img: bliny
			},
			{
				title: "Наггетсы с горчичным соусом",
				price: 250,
				img: defaultImg
			},
			{
				title: "Луковые кольца с соусом спайси",
				price: 250,
				img: defaultImg
			},
			{
				title: "Бородинские гренки с соусом блю чиз",
				price: 210,
				img: defaultImg
			},
			{
				title: "Сулугуни фри с ягодным соусом",
				price: 390,
				img: defaultImg
			},
		],
		gitHubLink: 'https://github.com',
	},
	{
		title: 'Супы',
		img: borch,
		imgBig: borch,
		skills: '',
		children: [
			{
				title: "Рыбный сливочный суп",
				price: 460,
				img: slivochSup
			},
			{
				title: "Тыквенный крем-суп",
				price: 350,
				img: tykvaSup
			},
			{
				title: "Том ям с морепродуктами",
				price: 520,
				img: tomyam
			},
			{
				title: "Картофельный крем-суп",
				price: 240,
				img: kartSup
			},
			{
				title: "Хашлама",
				price: 420,
				img: hashlama
			},
			{
				title: "Куриный бульон",
				price: 220,
				img: kurBul
			},
			{
				title: "Красный борщ с говядиной",
				price: 390,
				img: borch
			},
			{
				title: "Солянка мясная",
				price: 350,
				img: solyanka
			},
		]
	},
	{
		title: 'Сеты',
		img: setMyasa,
		imgBig: setMyasa,
		skills: '',
		children: [
			{
				title: "Сет мяса",
				price: 2900,
				img: setMyasa
			},
			{
				title: "Сет колбасок на гриле",
				price: 920,
				img: setKolbas
			},
			{
				title: "Сет маленький к пиву",
				price: 820,
				img: setPivM
			},
			{
				title: "Сет большой к пиву",
				price: 950,
				img: setPivB
			},
		]
	},
	{
		title: 'Мясо на гриле',
		img: steyk,
		imgBig: steyk,
		skills: '',
		children: [
			{
				title: "Стейк Рибай за 100 гр",
				price: 650,
				img: steyk
			},
			{
				title: "Стейк фланк за 100 гр",
				price: 350,
				img: defaultImg
			},
			{
				title: "Стейк из свиной шеи",
				price: 180,
				img: defaultImg
			},
		]
	},
	{
		title: 'Пасты',
		img: pastaMore,
		imgBig: pastaMore,
		skills: '',
		children: [
			{
				title: "Паста болоньезе",
				price: 420,
				img: pastaBolon
			},
			{
				title: "Паста карбонара",
				price: 420,
				img: pastaKarabon
			},
			{
				title: "Паста с морепродукатами",
				price: 520,
				img: pastaMore
			},
			{
				title: "Паста 4 сыра",
				price: 520,
				img: pasta4Sira
			},
			{
				title: "Ньокки в сливочно-грибном соусе",
				price: 490,
				img: nioky
			},
		]
	},
	{
		title: 'Пиццы',
		img: pizzaMyaso,
		imgBig: pizzaMyaso,
		skills: '',
		children: [
			{
				title: "Пицца Маргарита",
				price: 390,
				img: pizzaMar
			},
			{
				title: "Пицца пепперони",
				price: 450,
				img: pizzaPepperoni
			},
			{
				title: "Пицца с креветкой и ананасом",
				price: 530,
				img: pizzaKrev
			},
			{
				title: "Пицца гавайская",
				price:  450,
				img: pizzaGavay
			},
			{
				title: "Пицца 4 сыра",
				price: 560,
				img: pizza4sira
			},
			{
				title: "Пицца мясная",
				price: 630,
				img: pizzaMyaso
			},
		]
	},
	{
		title: 'Основные блюда',
		img: rulkaBar,
		imgBig: rulkaBar,
		skills: '',
		children: [
			{
				title: "Жаркое из свинины в горшочке",
				price: 450,
				img: zharkoe
			},
			{
				title: "Колбаски говяжьи с луком криспи",
				price: 520,
				img: kolbasGov
			},
			{
				title: "Утиная ножка конфи с ягодным соусом",
				price: 690,
				img: konfi
			},
			{
				title: "Рёбра свиные в соусе на выбор (барбекю или медово-горчичный)",
				price:  590,
				img: rebra
			},
			{
				title: "Куриные колбаски со сливками",
				price: 520,
				img: kolbasKur
			},
			{
				title: "Баранья рулька с картофельным пюре",
				price: 950,
				img: rulkaBar
			},
			{
				title: "Колбаски свиные с пепперони",
				price: 520,
				img: kolbasSvin
			},
			{
				title: "Цыплёнок табака",
				price: 590,
				img: tabaka
			},
			{
				title: "Стейк из куриного филе с брюссельской капустой",
				price: 450,
				img: kurSteak
			},
			{
				title: "Свиная рулька томлённая в пиве",
				price: 950,
				img: svinRulka
			},
			{
				title: "Бефстроганов из говядины",
				price: 420,
				img: beafStr
			},
			{
				title: "Вареники со шкварками",
				price: 330,
				img: vareniki
			},
			{
				title: "Перепелка гриль с ягодным соусом",
				price: 520,
				img: perepelGril
			},
			{
				title: "Пельмени по-сибирски с бульоном",
				price: 370,
				img: pelmeny
			},
			{
				title: "Стейк из лосося с печёными овощами",
				price: 920,
				img: lososSteak
			},
			{
				title: "Сковородка с говядиной и овощами",
				price: 490,
				img: skovoroda
			},
		]
	},
	{
		title: 'Десерты',
		img: grysha,
		imgBig: grysha,
		skills: '',
		children: [
			{
				title: "Чизкейк манго-маракуйя",
				price: 290,
				img: chizMarak
			},
			{
				title: "Груша",
				price: 290,
				img: grysha
			},
			{
				title: "Трайфл сникерс",
				price: 260,
				img: trayf
			},
			{
				title: "Шоколадный бейлис",
				price:  290,
				img: beyliz
			},
			{
				title: "Чизкейк Нью-Йорк",
				price: 260,
				img: chizNY
			},
			{
				title: "Напалеон",
				price: 290,
				img: napaleon
			},
			{
				title: "Штрудель яблочный",
				price: 260,
				img: shtrud
			},
		]
	},
];

export {projects}