$(document).ready(function(){
    //collapsible menu
    var collapseIcon = $('<span class="collapse-toggle"></span>');
    //note that location search is spared
    var toggleSections = $('.sidebar-group').not('#pref_location');
    var prefTitles = toggleSections.find('h4');
    prefTitles.closest('div').addClass('collapseable').end().append(collapseIcon);
    toggleSections.on('click', 'h4', function(){
      $(this).toggleClass('open').siblings('.section').slideToggle(function(){
       $(this).css('overflow', 'visible');
      });
    });
});