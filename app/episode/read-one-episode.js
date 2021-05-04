$(document).ready(function(){
    $(document).on('click', '.read-one-episode-btn', function(){
    	var id = $(this).attr('data-id');
    	$.getJSON("https://rickandmortyapi.com/api/episode/" + id, function(data){
    		var ch_list_html = ``;
    		$.each(data.characters, function(key, val){
    			$.getJSON(val, function(data_ch){
    				ch_list_html += `
    					<tr>
					        <td>` + data_ch.name + `</td>
					        <td> <img src="` + data_ch.image + `" class="img-thumbnail img-thumbnail-sm/></td>
					        <td>
					        	<button class='btn btn-primary read-one-episode-btn' title='Ver' data-id='` + data_ch.url  + `'>
				                    <i class='fas fa-eye'></i>
				                </button>
					        </td>
					    </tr>`;
    			});
    		});
             var read_one_episode_html=`
                <div class="row">
                    <div class="col">
                        <div id='read-episode' class='btn btn-primary float-right mb-3 read-episodes-btn'>
                            <i class="fas fa-list"></i> Ver episódios
                        </div>
                    </div>
                </div>
                        <table class='table table-bordered table-hover'>
                            <tr>
                                 <td colspan='2' class='text-center'><h2>Detalhes</h2></td>
                            </tr>
                            <tr>
                                <td class='td-middle'><strong>Episódio</strong></td>
                                <td class='td-middle'>` + data.episode + `</td>
                            </tr>
                            <tr>
                            <tr>
                                <td class='td-middle'><strong>Nome</strong></td>
                                <td class='td-middle'>` + data.name + `</td>
                            </tr>
                            <tr>
                                <td class='td-middle'><strong>Data</strong></td>
                                <td class='td-middle'>` + data.air_date + `</td>
                            </tr>>
                        </table>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        <h2>Lista de personagens que aparecem no episódio</h2>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-12">
                        <table class='table table-bordered table-hover'>
                            <tr>
                                <th scope='col' class='text-center'>Imagem</th>
                                <th scope='col' class='text-center'>Nome</th>
                                <th scope='col' class='text-center'>Ações</th>
                            </tr>
                            ` + ch_list_html + `
                        </table>
                    </div>
                </div>`;
            $("#page-content").html(read_one_episode_html);
            changePageTitle("Rickpedia - Detalhes dos episódios: " + data.name);
        });
    });
 
});