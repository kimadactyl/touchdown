window.fbAsyncInit = function() {
  FB.init({
    appId      : '587228301483312',
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.AppEvents.logPageView();
  FB.api(
    '/touchdowndance/events?fields=ticket_uri,name,start_time,end_time,id,description',
    'GET',
    {
      access_token: "587228301483312|JxoFGvGJGnvSe6kXlgfChkP_sDw"
    },
    function(response) {

      var events = response.data;


      events.sort(function(a, b){
        return moment(a.start_time) - moment(b.start_time);
      });

      var html = events.reduce(function(html, val){
        if(moment(val.start_time) > Date.now()) {
          html += "<div class='grid__item'>";
          html += "<div class='event__wrapper'>";
          html += "<div class='event__info'>";
          html += "<h3>" + val.name + "</h3>\n";
          html += "<p><time>";
          html += moment(val.start_time).format("MMMM Do YYYY, h:mma") + " &mdash; ";
          if (moment(val.start_time).format("DD-MM-YY") == moment(val.end_time).format("DD-MM-YY")) {
            html += moment(val.end_time).format("h:mma") + "</time>\n";
          } else {
            html += moment(val.end_time).format("MMMM Do h:mma") + "</time></p>\n";
          }
          html += "</div>";
          html += "<div class='event__more'><a href='http://facebook.com/events/" + val.id + "' class='btn btn--alt'>More info</a></div>";
          html += "<div class='event__book'>";
          if(val.ticket_uri) {
            html += "<a href='" + val.ticket_uri + "' class='btn'>Book now</a>"
          }
          html += "</div>";
          html += "</div>";
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
