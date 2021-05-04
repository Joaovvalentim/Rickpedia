$(document).ready(function(){
    $(document).on('click', '.read-one-character-btn', function(){
    	var id = $(this).attr('data-id');
    	$.getJSON("https://rickandmortyapi.com/api/character/" + id, function(data){
    		var ep_list_html = ``;
    		$.each(data.episode, function(key, val){
    			$.getJSON(val, function(data_ep){
    				ep_list_html += `
    					<tr>
					        <td>` + data_ep.episode + `</td>
					        <td>` + data_ep.name + `</td>
					        <td>
					        	<button class='btn btn-primary read-one-episode-btn' title='Ver' data-id='` + data_ep.url  + `'>
				                    <i class='fas fa-eye'></i>
				                </button>
					        </td>
					    </tr>`;
    			});
    		});
    		var origin_array =  data.origin.url.split("/");
    		var location_array = data.location.url.split("/");
            var read_one_character_html=`
            	<div class="row">
            		<div class="col">
		    		    <div id='read-characters' class='btn btn-primary float-right mb-3 read-characters-btn'>
		    		        <i class="fas fa-list"></i> Ver personagens
		    		    </div>
		    		</div>
	    		</div>
    		    <div class="row my-2">
    		    	<div class="col-md-4 col-12 m-auto text-center">
    		    		<img src="` + data.image + `" class="img-fluid"/>
    		    	</div>
    		    	<div class="col-md-8 col-12 m-auto">
    		    		<table class='table table-bordered table-hover'>
    		    			<tr>
    		    				 <td colspan='2' class='text-center'><h2>Detalhes</h2></td>
    		    			</tr>
						    <tr>
						        <td class='td-middle'><strong>Nome</strong></td>
						        <td class='td-middle'>` + data.name + `</td>
						    </tr>
						    <tr>
						        <td class='td-middle'><strong>Status</strong></td>
						        <td class='td-middle' colspan="2">` + t_status(data.status) + `</td>
						    </tr>
						    <tr>
						        <td class='td-middle'><strong>Espécie</strong></td>
						        <td class='td-middle'>` + data.species + `</td>
						    </tr>
						    <tr>
						        <td class='td-middle'><strong>Tipo</strong></td>
						        <td class='td-middle'>` + data.type + `</td>
						    </tr>
						    <tr>
						        <td class='td-middle'><strong>Gênero</strong></td>
						        <td class='td-middle'>` + t_gender(data.gender) + `</td>
						    </tr>
						</table>
    		    	</div>
    		    </div>
    		    <div class="row text-center">
    		    	<div class="col">
    		    		<h2>Localização</h2>
					</div>
				</div>
				<div class="row text-center">
    		    	<div class="col-md-6 col-12">
    		    		<table class='table table-bordered table-hover'>
    		    			<tr>
    		    				 <td colspan='3' class='text-center'><h2>Original</h2></td>
    		    			</tr>
						    <tr>
						        <td class='td-middle'><strong>Nome</strong></td>
						        <td class='td-middle'>` + data.origin.name + `</td>
						        <td class='td-middle'>
						        	<button class='btn btn-primary read-one-location-btn' title='Ver' data-id='` + origin_array[origin_array.length -1]  + `'>
					                    <i class='fas fa-eye'></i>
					                </button></td>
						    </tr>
    		    		</table>	
					</div>
					<div class="col-md-6 col-12">
    		    		<table class='table table-bordered table-hover'>
    		    			<tr>
    		    				 <td colspan='3' class='text-center'><h2>Última conhecida</h2></td>
    		    			</tr>
						    <tr>
						        <td class='td-middle'><strong>Nome</strong></td>
						        <td class='td-middle'>` + data.location.name + `</td>
						        <td class='td-middle'>
						        	<button class='btn btn-primary read-one-location-btn' title='Ver' data-id='` + location_array[location_array.length -1]   + `'>
					                    <i class='fas fa-eye'></i>
					                </button></td>
						    </tr>
    		    		</table>
					</div>
				</div>
				<div class="row text-center">
    		    	<div class="col">
    		    		<h2>Lista de episódios</h2>
					</div>
				</div>
				<div class="row text-center">
    		    	<div class="col-12">
    		    		<table class='table table-bordered table-hover'>
    		    			<tr>
						        <th scope='col' class='text-center'>Episódio</th>
						        <th scope='col' class='text-center'>Nome</th>
						        <th scope='col' class='text-center'>Ações</th>
						    </tr>
						    ` + ep_list_html + `
    		    		</table>
    		    	</div>
    		    </div>`;
	    	$("#page-content").html(read_one_character_html);
	    	changePageTitle("Rickpedia - Detalhes do personagem: " + data.name);
    	});
    });
 
});