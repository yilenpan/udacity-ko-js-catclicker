var ViewModel = function (){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTHI4IKefbN94RugdzdQqh77jWjSZULfePrWvPnNW3ysbrlHvpc')
  this.imgAttribution = ko.observable('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTHI4IKefbN94RugdzdQqh77jWjSZULfePrWvPnNW3ysbrlHvpc')

  this.incrementCounter = function() {
      this.clickCount(this.clickCount() + 1);
  };

}

ko.applyBindings(new ViewModel());