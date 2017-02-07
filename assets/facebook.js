window.fbAsyncInit = function() {
  FB.init({
    appId      : '587228301483312',
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.AppEvents.logPageView();
  FB.api(
    '/touchdowndance/events',
    'GET',
    {
      access_token: "587228301483312|JxoFGvGJGnvSe6kXlgfChkP_sDw"
    },
    function(response) {
      var html = "";
      events = response.data;
      events.sort(function(a, b){
        return Date.parse(a.start_time) - Date.parse(b.start_time);
      });
      $.each(events, function(i, val) {
        if(Date.parse(val.start_time) > Date.now()) {
          html += "<h3>" + val.name + "</h3>\n";
          html += "<time>" + val.start_time + " &mdash; " + val.end_time + "</time>\n";
          html += "<p>" + val.description + "</p>\n";
        }
      })
      $('.events').html(html);
    }
  );

};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
