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

      var events = response.data;

      events.sort(function(a, b){
        return Date.parse(a.start_time) - Date.parse(b.start_time);
      });

      html = events.reduce(function(html, val){
        if(Date.parse(val.start_time) > Date.now()) {
          html += "<h3>" + val.name + "</h3>\n";
          html += "<time>";
          html += moment(val.start_time).format("MMMM Do YYYY, h:mma") + " &mdash; ";
          if (moment(val.start_time).format("DD-MM-YY") == moment(val.end_time).format("DD-MM-YY")) {
            html += moment(val.end_time).format("h:mma") + "</time>\n";
          } else {
            html += moment(val.end_time).format("MMMM Do h:mma") + "</time>\n";
          }
          html += "<p>" + val.description + "</p>\n";
        }
        return html;
      }, "");

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
