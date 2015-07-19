/**
 * FloodWatch 
 *
 * Smartwatch Flood Alerts @ PetaJakarta.org
 * 
 * Tomas Holderness 2015
 *
 * version 0.1
 */

// Library imports
var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

// Load reports into menu
var loadReports = function(data){
  // No reports
};

// Splash Window
var splashWindow = new UI.Window({
  backgroundColor:'white'
});

// App Title
var titleText = new UI.Text({
  position: new Vector2(0, 46),
  size: new Vector2(144, 168),
  text:'FloodWatch',
  font:'GOTHIC_28_BOLD',
  color:'black',
  textOverflow:'wrap',
  textAlign:'center'
});
splashWindow.add(titleText);

// Subtitle
var subtitleText = new UI.Text({
  position: new Vector2(10,74),
  size: new Vector2(144,168),
  text: 'PetaJakarta.org',
  font: 'GOTHIC_18',
  color: 'darkGray',
  textAlign:'center'
});
splashWindow.add(subtitleText);

// Show the splash screen
splashWindow.show();

// Loading text
var loadingText = new UI.Text({
  position: new Vector2(0,130),
  size: new Vector2(144,168),
  text: 'loading...',
  font: 'GOTHIC_14',
  color: 'lightGray',
  textAlign: 'center'
});

// Call server
splashWindow.add(loadingText);

// Make request to PetaJakarta.org
ajax(
  {
    url:'http://petajakarta.org/banjir/data/api/v1/reports/confirmeds',
    type:'json'
  },
  function(data) {
    if (data.features === null) {
      var noreportsCard = new UI.Card({
        title:'No reports now'
      });
    noreportsCard.show();
    splashWindow.hide();
    }
    else {  
      loadReports(data);
    }
  },
  function(error) {
    console.log('Download error: ' + error);
    
    var errorCard = new UI.Card({
    title: 'Download Error',
    subtitle: '@ PetaJakarta.org:',
    body: error,
    style: 'small',
    scrollable: true
    });
    
    errorCard.show();
    splashWindow.hide();
  }
);


/*
var main = new UI.Card({
  title: 'FloodWatch',
  subtitle: 'Hati Hati!',
  body: '', //Jakarta 12 laporan banjir jam terakhir
  scrollable: false
});

main.banner('IMAGES_RAIN_BW_PNG');

main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});*/
