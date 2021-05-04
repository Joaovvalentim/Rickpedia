$(document).ready(function(){
    showCharactersFirstPage();
    $(document).on('click', '.read-characters-btn', function(){
    	showCharactersFirstPage();
    });
    $(document).on('click', '.pagination-character li', function(){
        var json_url=$(this).find('a').attr('data-page');
        var keywords=$(this).find('a').attr('data-keywords');
        showCharacters(json_url, keywords);
    });
    $(document).on('click', '.display-search-form-btn', function(){
        changePageTitle("Rickpedia - Buscar personagem");
        showCharactersSearchForm();
    });
    $(document).on('click', '.display-search-results-btn', function(){
        var n = $('#inputName').val();
        var s = $('#selectStatus').val();
        var sp = $('#inputSpecie').val();
        var t = $('#inputType').val();
        var g = $('#selectGender').val(); 

        if (n == "" &&  s == "" && sp == "" && t == ""  && g == "") {
            alert( "Preencha pelo menos um campo!" );

        } else {
            var json_search_url="https://rickandmortyapi.com/api/character/?";
            var q = [];

            if (n.length) q.push("name=" + n);
            if (s.length) q.push("status=" + s);
            if (sp.length) q.push("species=" + sp);
            if (t.length) q.push("type=" + t);
            if (g.length) q.push("gender=" + g);
            
            json_search_url += q.join("&");
            $.getJSON(json_search_url, function(data){
                readCharactersTemplate(data, q.join("&"));
                changePageTitle("Rickpedia - Resultado da busca");
            });
        }
    });
}); 
function showCharactersFirstPage(){
    var json_url="https://rickandmortyapi.com/api/character";
    showCharacters(json_url, "");
}
function showCharacters(json_url, keywords){
    $.getJSON(json_url, function(data){
    	readCharactersTemplate(data, keywords);
        changePageTitle("Rickpedia - Ver personagens");
    });
}
function showCharactersSearchForm(){
    searchCharactersTemplate();
}