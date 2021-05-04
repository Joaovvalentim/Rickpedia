function readEpisodesTemplate(data, keywords){
	var info = data.info;
    var cur_page;
    var cur_season = 0;
    if (info.prev == null) {
        cur_page = 1;
    } else {
        var parts = info.prev.split('?')[1].split("&");
        var data_parts = {};
        parts.forEach(function (p) {
            var kv = p.split('='); // page=2
            var k = kv[0]; //page
            var v = kv[1];// 2
            data_parts[k] = v;// data_parts[page]
        });

        cur_page = parseInt(data_parts["page"])+1;
    }
    var read_episodes_html=`
        <table class='table table-sm table-bordered table-hover'>
		    <tr>
		        <th scope='col' class='text-center'>Episódio</th>
		        <th scope='col' class='text-center'>Nome</th>
		        <th scope='col' class='text-center'>Exibido em</th>
		        <th scope='col' class='text-center'>Ações</th>
		    </tr>`;
    $.each(data.results, function(key, val) {
        var season = parseInt(val.episode.split("E")[0].split("S")[1]);
        if (cur_season != season) {
            cur_season = season;
            read_episodes_html+=`
                <tr>
                    <td class='text-center td-middle' colspan='4'><strong>Temporada ` + season + `</strong></td>
                </tr>`;
        }
		read_episodes_html+=`
	        <tr>
	            <td class='text-center td-middle'>` + val.episode + `</td>
	            <td class='text-center td-middle'>` + val.name + `</td>
	            <td class='text-center td-middle'>` + val.air_date + `</td>
	            <td class='text-center td-middle'>
	                <button class='btn btn-primary read-one-episode-btn' title='Ver' data-id='` + val.id + `'>
	                    <i class='fas fa-eye'></i>
	                </button>
	            </td>
	        </tr>`;
    	});
    	read_episodes_html+=`</table>`;
    	if(info.pages > 1){
    		read_episodes_html+="<div class='row'><div class='col-10'><nav aria-label='Navegação'>" +
    				"<ul class='pagination pagination-episode float-left m-0 pb-3'>";
    			read_episodes_html+="<li class='page-item'><a class='page-link' data-page='https://rickandmortyapi.com/api/episode'>Primeira</a></li>";
    	        if(info.prev != null){
    	        	read_episodes_html+="<li class='page-item'><a class='page-link' data-page='" + info.prev + "'>Anterior</a></li>";
    	        }
    	        if(info.next != null){
    	        	read_episodes_html+="<li class='page-item'><a class='page-link' data-page='" + info.next + "'>Próxima</a></li>";
    	        }
    	        read_episodes_html+="<li class='page-item'><a class='page-link' data-page='https://rickandmortyapi.com/api/episode/?page=" + info.pages + "'>Última</a></li>";
    	    read_episodes_html+=`</ul></nav></div><div class="col-2 float-rigth">página ` + cur_page + ` de ` + info.pages + `</div></div>`;
    	}
    	$("#page-content").html(read_episodes_html);
    	window.scrollTo(0, 0);
};
