var fotoGoods = ["url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTSB_DSzhHIuTFz1Y1Xq8WTicndeo8THsBq9tPHZ2FXW4IvBmYA')"],
	charactGoods = ["Футбольный мяч Динамо, сделаный из натуральной кожи. Специально покрытый полиуретановым покрытием для того, чтобы мяч меньше впитывал влагу.", "Это прекрасный подарок фанатам футбольного клуба Динамо Киев."],
	prices = ["500 грн."],
	elGoodsBall = document.getElementById("ball"),
	elPrgDescription1 = document.getElementsByClassName("pdescr")[0],
	elPrgDescription2 = document.getElementsByClassName("pdescr")[1],
	elPriceBall = document.getElementsByClassName("amount")[0];



	elGoodsBall.style.background = fotoGoods[0];
	elPrgDescription1.innerHTML = charactGoods[0];
	elPrgDescription2.innerHTML = charactGoods[1];
	elPriceBall.innerHTML = prices[0];

var goods = {
	code: "AP0374",
	model: "FINALE",
	size:	"РАЗМЕР №5",
	weight:	"от 405 до 440 грамм",
	produce:	"Adidas"
};
	var elInfoGoods1 = document.getElementsByClassName("info")[0],
		elInfoGoods2 = document.getElementsByClassName("info")[1],
		elInfoGoods3 = document.getElementsByClassName("info")[2],
		elInfoGoods4 = document.getElementsByClassName("info")[3],
		elInfoGoods5 = document.getElementsByClassName("info")[4];

function addDescription(Object){
	elInfoGoods1.innerHTML = goods.code;
	elInfoGoods2.innerHTML = goods.model;
	elInfoGoods3.innerHTML = goods.size;
	elInfoGoods4.innerHTML = goods.weight;
	elInfoGoods5.innerHTML = goods.produce;
};

addDescription(goods);



