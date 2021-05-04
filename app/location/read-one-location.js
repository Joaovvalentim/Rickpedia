$(document).ready(function(){
    $(document).on('click', '.read-one-location-btn', function(){
    	var id = $(this).attr('data-id');
    	$.getJSON("https://rickandmortyapi.com/api/location/" + id, function(data){
    		var re_list_html = ``;
    		$.each(data.residents, function(key, val){
    			$.getJSON(val, function(data_ch){
    				re_list_html += `
    					<tr>
					        <td>` + data_ch.name + `</td>
					        <td> <img src="` + data_ch.image + `" class="img-thumbnail img-thumbnail-sm/></td>
					        <td>
					        	<button class='btn btn-primary read-one-character-btn' title='Ver' data-id='` + data_ch.url  + `'>
				                    <i class='fas fa-eye'></i>
				                </button>
					        </td>
					    </tr>`;
    			});
    		});
             var read_one_location_html=`
                <div class="row">
                    <div class="col">
                        <div id='read-location' class='btn btn-primary float-right mb-3 read-location-btn'>
                            <i class="fas fa-list"></i> Ver localizações
                        </div>
                    </div>
                </div>
                        <table class='table table-bordered table-hover'>
                            <tr>
                                 <td colspan='2' class='text-center'><h2>Detalhes</h2></td>
                            </tr>
                            <tr>
                                <td class='td-middle'><strong>Nome</strong></td>
                                <td class='td-middle'>` + data.name + `</td>
                            </tr>
                            <tr>
                            <tr>
                                <td class='td-middle'><strong>Tipo</strong></td>
                                <td class='td-middle'>` + data.type + `</td>
                            </tr>
                            <tr>
                                <td class='td-middle'><strong>Dimensão</strong></td>
                                <td class='td-middle'>` + data.dimension + `</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        <h2>Lista de residentes</h2>
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
                            ` + re_list_html + `
                        </table>
                    </div>
                </div>`;
            $("#page-content").html(read_one_location_html);
            changePageTitle("Rickpedia - Detalhes da localização: " + data.name);
        });
    });
 
});