App = null;

describe( "MenuItemsView", function() {
	var menu_items_view = null;
	var menu_items = null;
	var fixtures = [
		{
			id : 1,
			title : "Home",
			slug : "/"
		},
		{
			id : 2,
			title : "Contact",
			slug : "contact"
		}
	];

	before( function( done ) {
		require( [ "marionette" ], function() {
			App = new Backbone.Marionette.Application();
			App.vent.trigger = sinon.spy();

			done();
		} );
	} );

	beforeEach( function( done ) {
		require( [
			"js/include/navigation/views/menu_items",
			"js/include/navigation/collections/menu_items"
			], function( View, Collection ) {
			var menu_items = new Collection( fixtures );

			menu_items_view = new View( {
				collection : menu_items
			} );

			menu_items_view.render();

			done();
		} );
	} );

	it( "represents ul list", function() {
		expect( menu_items_view.tagName ).to.eq( "ul" );
	} );

	it( "represents passed collection", function() {
		expect( menu_items_view.$el.find( "li" ).length ).to.eq( 2 );
	} );

	it( "sends event on menu item click", function() {
		menu_items_view.$el.find( "a" ).eq( 0 ).click();

		expect( App.vent.trigger.calledOnce ).to.be.true;
	} );

	afterEach( function() {
		menu_items_view = null;
		menu_items = null;
	} );
} );
