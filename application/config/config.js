host = "http://msn-rd.com/eservicios/";
var cnf = {
	services: {
		path : host+'json/',
		menu : host+'json/menu',
		blog : host+'json/blog/',
		premiums: host+'json/premiums/',
		standards: host+'json/standards/',
		products: host+'json/premiums/productos/',
		node: host+'json/node/'
	},
	holders:{
		blogCnt: "blogContent",
		stdCnt: "stdContent",
		prmCnt: "prmContent",
		nodeCnt: "#nodeContent",
	},
	views:{
		menuVw: 'application/views/home/menu.html',
		menuBigVw: 'application/views/home/menubig.html',
		parallaxVw: 'application/views/home/parallax.html',
		floorVw:'application/views/home/floor.html',
		blogVw: 'application/views/home/blog.html',
		stdVw: 'application/views/home/standards.html',
		prmVw: 'application/views/home/premiums.html',
		standardNd: 'application/views/node/standard.html',
		premiumNd: 'application/views/node/premium.html',
		premiumProductNd: 'application/views/node/premiumProduct.html'
	},
	images:{
		homeBackground:"assets/images/back_complto_01.jpg"
	}
}

 