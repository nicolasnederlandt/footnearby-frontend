import { setLayout } from "../utils/render.js";


const HomePage = async () => {
  
  initMap();
};

function initMap(){
  //Map option
  var option = {
      zoom : 12,
      center : {lat:50.8503396,lng:4.3517103},
      mapTypeControl: false,
  }
  //New map
  var map = new google.maps.Map(document.getElementById('map'),option);

  //Array of markers
  var markers = [
    {
    coords:{lat:50.8512205, lng:4.3451959},
    content:'DANSAERT'
    },
    {
    coords:{lat:50.840057373046875, lng:4.39126443862915},
    content:'CINQUENTENAIRE'
    }
  ];

 //Loop trought markers
 for(var i=0; i<markers.length; i++){
   addMarker(markers[i]);
 }

  //function add marker
  function addMarker(props){
      var marker = new google.maps.Marker({
          position : props.coords,
          map : map,
          content : props.content
      });
  }
}

export default HomePage;