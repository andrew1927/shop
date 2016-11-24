var products =	[
					{
						image:  'url("images/ball2.jpg")',
						characteristics: {
							shortDescription: {
								p1: "Футбольный мяч Динамо, сделаный из натуральной кожи.Специально покрытый полиуретановым покрытием для того, чтобы мяч меньше впитывал влагу.",
								p2: "Это прекрасный подарок фанатам футбольного клуба Динамо Киев."
							},
							table: { 
								code: "AP0374",
								model: "FINALE",
								size:	"РАЗМЕР №5",
								weight:	"от 405 до 440 грамм",
								produce:	"Adidas"
							},
						},
						price: 2500,
						mainDescription: "Мяч футбольный Adidas Finale 16 Top Training AP0373 FIFA размер 5"
					},
					{
						image:  'url("images/ball3.jpg")',
						characteristics: {
							shortDescription: {
								p1: "Футбольный мяч Динамо, сделаный из натуральной кожи.Специально покрытый полиуретановым покрытием для того, чтобы мяч меньше впитывал влагу.",
								p2: "Это прекрасный подарок фанатам футбольного клуба Динамо Киев."
							},
							table: { 
								code: "AP0100",
								model: "EURO",
								size:	"РАЗМЕР №5",
								weight:	"от 400 до 450 грамм",
								produce:	"NIKE"
							},
						},
						price: 900
					}
				]

	elImgBall = document.getElementsByClassName("ball")[0],
	elShortDescr1 = document.getElementsByClassName("shortdescr")[0],
	elShortDescr2 = document.getElementsByClassName("shortdescr")[1],
	elTableInfo1 = document.getElementsByClassName("info")[0], 
	elTableInfo2 = document.getElementsByClassName("info")[1], 
	elTableInfo3 = document.getElementsByClassName("info")[2], 
	elTableInfo4 = document.getElementsByClassName("info")[3], 
	elTableInfo5 = document.getElementsByClassName("info")[4],
	elPrice = document.getElementsByClassName("amount")[0],
	elImgBallMain = document.getElementsByClassName("mainball")[0],
	elAbout = document.getElementsByClassName("about")[0];


	function addDescription(product){
		elImgBall.style.background =  product.image;
		elShortDescr1.innerHTML = product.characteristics.shortDescription.p1;
		elShortDescr2.innerHTML = product.characteristics.shortDescription.p2;
		elTableInfo1.innerHTML = product.characteristics.table.code;
		elTableInfo2.innerHTML = product.characteristics.table.model;
		elTableInfo3.innerHTML = product.characteristics.table.size;
		elTableInfo4.innerHTML = product.characteristics.table.weight;
		elTableInfo5.innerHTML = product.characteristics.table.produce;
		elPrice.innerHTML = product.price;
		elImgBallMain.style.backgroundImage = product.image;

		elAbout.innerHTML = product.mainDescription;
	}


	// function compareRandom(a, b) {
	//   return Math.random() - 0.5;
	// }	

	// function initProduct(){
	// 	products.sort(compareRandom);
	// 	addDescription(products[0]);
	// }			

	// initProduct();

	addDescription(products[0]);

	var elAnchor = document.getElementsByClassName("todescription")[0];

	elAnchor.addEventListener("click", function(){

	})





	








	


