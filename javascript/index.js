$( document ).ready(function() {

    $("#my-calendar").zabuto_calendar({
      language: "en",
      nav_icon: {
                  prev: '<',
                  next: '>'
                },
      data: eventData
    });
});

var eventData = [
    {"date":"2017-06-12","badge":false,"title":"Example 1"},
    {"date":"2017-06-13","badge":true,"title":"Example 2"}
];
