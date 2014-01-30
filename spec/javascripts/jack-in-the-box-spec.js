(function() {
  describe('jackInTheBox', function() {
    beforeEach(function() {
      loadFixtures('fragment.html');
      return this.$element = $('#fixtures');
    });
    return describe('plugin behavior', function() {
      it('should be available on the jQuery object', function() {
        return expect($.fn.jackInTheBox).toBeDefined();
      });
      it('should be chainable', function() {
        return expect(this.$element.jackInTheBox()).toBe(this.$element);
      });
      return it('should offers default values', function() {
        var plugin;
        plugin = new $.jackInTheBox(this.$element);
        return expect(plugin.defaults).toBeDefined();
      });
    });
  });

}).call(this);
