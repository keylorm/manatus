(function( $ ){
  $(document).ready(function() {

    //first date range picker
    updateConfig();

    function updateConfig() {
      var options = {
        locale: {
            format: 'DD/MM/YYYY'
        },
        "startDate": "20/09/2015",
        "endDate": "26/09/2015",
      };

      $('#checkin-checkout').daterangepicker(options, function(start, end, label) { 
        console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')'); 
      });
    }

    //second date range picker

  });
})(jQuery);