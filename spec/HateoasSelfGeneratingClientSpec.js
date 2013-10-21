describe("HateoasSelfGeneratingClient", function() {
  var app;

  beforeEach(function() {
    app = new HateoasSelfGeneratingClient();
    rootUrl = 'http://api.somedomain.tld'
  });

  it("should be able to set a root URL", function() {
    app.setRootUrl(rootUrl);
    expect(app.rootUrl).toEqual(rootUrl);
  });
});