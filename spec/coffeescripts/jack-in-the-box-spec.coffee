describe 'jackInTheBox', ->

  beforeEach ->
    loadFixtures 'fragment.html'
    @$element = $( '#fixtures' )

  describe 'plugin behavior', ->
    it 'should be available on the jQuery object', ->
      expect( $.fn.jackInTheBox ).toBeDefined()

    it 'should be chainable', ->
      expect( @$element.jackInTheBox() ).toBe @$element

    it 'should offers default values', ->
      plugin = new $.jackInTheBox( @$element )

      expect( plugin.defaults ).toBeDefined()
