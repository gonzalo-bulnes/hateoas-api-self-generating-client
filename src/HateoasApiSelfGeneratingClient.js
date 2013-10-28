HateoasApiSelfGeneratingClient = function() {
  var AppModel = {
      "record": {
          "id": 1,
          "name": ""
      },
      "links": [
          {
              "rel": "next",
              "uri": "/records/2"
          },
          {
              "rel": "index",
              "uri": "/records"
          }
      ]
  };

  // This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
  function AppViewModel() {
      this.raw = ko.computed(function(){
        return AppModel
      });
      this.raw = ko.observable(JSON.stringify(AppModel, null, 4));
      this.resource = ko.observable(JSON.stringify(AppModel, null, 4));
      this.links = ko.observableArray(AppModel.links);
  }

  // Activates knockout.js
  ko.applyBindings(new AppViewModel());
};
