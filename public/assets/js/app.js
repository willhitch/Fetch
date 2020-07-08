function initMap() {
  //  Example Location
  var uluru = { lat: 39.7555, lng: -105.2211 };
  // Map default View
  var map = new google.maps.Map(document.getElementById("map"), {
    center: uluru,
    zoom: 12,
  });
  // Example Marker
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
$(document).ready(function () {
  initMap()
  $('.tabs').tabs();
  $('.profile-tabs').tabs();
  $('.sidenav').sidenav();
  $('select').formSelect();

});
$("#loginform").on("submit", function (event) {
  console.log("working?")
  event.preventDefault()
  const data = $(this).serializeArray()
  console.log(data)
  return (false)
})