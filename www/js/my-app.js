// Initialize your app
var myApp = new Framework7({
  material : true
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    //dynamicNavbar: true
});

$$('#btn-signin-home').on('click', function(page){
  myApp.closeModal();
})
$$('#btn-reg-home').on('click', function(page){
  myApp.closeModal();
  mainView.router.loadPage('register.html');
})

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('services', function (page) {
    // run createContentPage func after link was clicked
      mainView.router.loadPage('login.html');
    $$('.create-page').on('click', function () {
        myApp.alert("dummy");
        mainView.router.loadPage('register.html');
    });
    $$('.x').on('click', function () {
        myApp.alert("dummy");
      mainView.router.loadPage('login.html');
    });
});
// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('register', function (page) {
    // run createContentPage func after link was clicked
    $$('#btn-signin-reg').on('click', function () {
        mainView.router.loadPage('index.html');
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}