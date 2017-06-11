// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
  //material: true
});
 
// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
 
// Add view
var mainView = myApp.addView('.view-main');
 
// Now we need to run the code that will be executed only for About page.
 
// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('index', function (page) {
  // Do something here for "about" page
  
  $$('.x').click(function(e){
      myApp.alert("sahur sahur");
  });
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page sksks');
})
myApp.onPageInit('register', function (page) {
  // Do something here for "about" page
    //myApp.alert("zong zong");
    $$('.test').on('click', function(e){
      mainView.load({pageName:'about'});
      myApp.alert('dorr');
      //mainView.router.loadPage({url:'profile.html', ignoreCache:true, reload:true });
      console.log("busa");
    });
})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
  // Get page data from event data
  var page = e.detail.page;


  if (page.name === 'index') {
    // Following code will be executed for page with data-page attribute equal to "about"
    $$(page.container).find('.button').on('click', function () {
      myApp.alert('Here comes About page sksks');
      mainView.router.loadPage({url:'profile.html', ignoreCache:true, reload:true });
    });
  }
  else if(page.name === 'register')
  {

    $$(page.container).find('.test').on('click', function(e){
      mainView.load({pageName:'about'});
      myApp.alert('dorr');
      //mainView.router.loadPage({url:'profile.html', ignoreCache:true, reload:true });
      console.log("busa");
    });
  }
})
 
// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
  myApp.alert('Here comes About page');
})
/* ===== Generate Content Dynamically ===== */
var dynamicPageIndex = 0;
function createContentPage() {
    mainView.router.loadContent(
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-content" class="page">' +
        '    <!-- Top Navbar-->' +
        '    <div class="navbar">' +
        '      <div class="navbar-inner">' +
        '        <div class="left"><a href="#" class="back link icon-only"><i class="icon icon-back"></i></a></div>' +
        '        <div class="center">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '      </div>' +
        '    </div>' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '        <p>Go <a href="#" class="back">back</a> or generate <a href="#" class="ks-generate-page">one more page</a>.</p>' +
        '      </div>' +
        '    </div>' +
        '  </div>'
    );
    return;
}
$$(document).on('click', '.ks-generate-page', createContentPage);