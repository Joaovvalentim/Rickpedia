$(document).ready(function(){
    $(document).on('click', '.read-locations-btn', function(){
    	showLocationsFirstPage();
    });
    $(document).on('click', '.pagination-location li', function(){
        var json_url=$(this).find('a').attr('data-page');
        showLocations(json_url);
    });
}); 
function showLocationsFirstPage(){
    var json_url="https://rickandmortyapi.com/api/location";
    showLocations(json_url);
}
function showLocations(json_url){
    $.getJSON(json_url, function(data){
    	readLocationsTemplate(data, "");
        changePageTitle("Rickpedia - Ver localizações");
    });
}
$(document).on('click', '.read-location-btn', function(){
        showLocationsFirstPage();
    });
