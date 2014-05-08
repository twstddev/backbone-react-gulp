define( function() {
	return {
		menu_items : [
			{
				id : 1,
				title : "Home",
				slug : "/"
			},
			{
				id : 2,
				title : "Gallery",
				slug : "gallery"
			},
			{
				id : 3,
				title : "About",
				slug : "about"
			}
		],
		pages : [
			{
				id : 1,
				title : "Home Page",
				slug : "home",
				template : "home",
				content : "Some of the home page content"
			},
			{
				id : 2,
				title : "Gallery Page",
				slug : "gallery",
				template : "gallery",
				content : "Here goes some sort of gallery"
			},
			{
				id : 3,
				title : "About",
				slug : "about",
				template : "",
				content : "Everything about your app goes here"
			}
		]
	};
} );
