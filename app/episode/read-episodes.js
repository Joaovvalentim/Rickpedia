$(document).ready(function(){
    $(document).on('click', '.read-episodes-btn', function(){
    	showEpisodesFirstPage();
    });
    $(document).on('click', '.pagination-episode li', function(){
        var json_url=$(this).find('a').attr('data-page');
        showEpisodes(json_url);
    });
}); 
function showEpisodesFirstPage(){
    var json_url="https://rickandmortyapi.com/api/episode";
    showEpisodes(json_url);
}
function showEpisodes(json_url){
    $.getJSON(json_url, function(data){
    	readEpisodesTemplate(data, "");
        changePageTitle("Rickpedia - Ver episódios");
    });
}
