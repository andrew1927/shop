var	products = [ 
				{
					image:  "images/ball2.jpg",
					description: {
						shortDescription: "<p>Мяч для футзала Adidas Euro 2016 Sala 65 - это модель профессионального уровня предназначенная для игры на жестки игровых покрытиях.Каркас мяча имеет классическую конструкцию из 18-х панелей, соединенных прочным ручным швом.</p><p>Adidas Euro 2016 Sala 65 - это высокое качество по приемлемой цене, поэтому данная модель пользуется большим спросом среди посетителей нашего магазина. Поторопитесь оформить заказ, пока модель есть в наличии.</p>",
						table: { 
							code: "AP0374",
							model: "FINALE",
							size:	"РАЗМЕР №5",
							weight:	"от 405 до 440 грамм",
							produce:	"Adidas"
						},
					},
					price: 2500
				},
				{
					image:  "images/ball3.jpg",
					description: {
						shortDescription: "<p>Футбольный мяч Динамо, сделаный из натуральной кожи.Специально покрытый полиуретановым покрытием для того, чтобы мяч меньше впитывал влагу.</p><p>Это прекрасный подарок фанатам футбольного клуба Динамо Киев.</p>",
						table: { 
							code: "AP0500",
							model: "EURO 2016",
							size:	"РАЗМЕР №4",
							weight:	"от 400 до 450 грамм",
							produce:	"Adidas"
						},
					},
					price: 900
				},
				{
					image:  "images/ball4.jpg",
					description: {
						shortDescription: "<p>Футбольный мяч Динамо, сделаный из натуральной кожи.Специально покрытый полиуретановым покрытием для того, чтобы мяч меньше впитывал влагу.</p><p>Это прекрасный подарок фанатам футбольного клуба Динамо Киев.</p>",
						table: { 
							code: "AP0500",
							model: "EURO 2016",
							size:	"РАЗМЕР №4",
							weight:	"от 400 до 450 грамм",
							produce:	"Nike"
						},
					},
					price: 700
				}
				];

var elWrapper = document.getElementsByClassName("wrapper")[0];

	initProduct();

	function compareRandom(a, b) {
	  return Math.random() - 0.5;
	}	

	function initProduct(){
		products.sort(compareRandom);
		products.forEach(function(item){
			createProduct(item);
		});
	}			
				
	function createProduct(item){
		var elDivImg = document.createElement("div");
			elDivImg.classList.add("wrap");
			
		elDivImg.innerHTML = '<img class="ball" src=' + item.image + ' alt="ball" />'+
		'<div class="description">' + 
		'<h1>Описание:</h1>' +
		'<hr/>' +
		'<div class="shortdescr">' + item.description.shortDescription + '</div>' +
		'<table>' +
		'<tr><th>Мячи</th></tr>' +
		'<tr><td>Артикул:</td><td>' + item.description.table.code + '</td></tr>' +
		'<tr><td>Модель:</td><td>' + item.description.table.model + '</td></tr>' +
		'<tr><td>Размер:</td><td>' + item.description.table.size + '</td></tr>' +
		'<tr><td>Вес:</td><td>' + item.description.table.weight + '</td></tr>' +
		'<tr><td>Производитель:</td><td>' + item.description.table.produce + '</td></tr>' +
		'</table>' +
		'</div>' +
		'<div class="price">Цена:' +
		'<span class="amount">' + item.price + ' грн.' + '</span>' +
		'</div>' +
		'<button>В корзину</button>';
		elWrapper.appendChild(elDivImg);
	}





	


