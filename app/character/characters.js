function readCharactersTemplate(data, keywords){
	var info = data.info;
	var cur_page;
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
    var read_characters_html=`
        <table class='table table-sm table-bordered table-hover'>
		    <tr>
		        <th scope='col' class='text-center'>Imagem</th>
		        <th scope='col' class='text-center'>Nome</th>
		        <th scope='col' class='text-center'>Status</th>
		        <th scope='col' class='text-center'>Espécie</th>
		        <th scope='col' class='text-center'>Tipo</th>
		        <th scope='col' class='text-center'>Gênero</th>
		        <th scope='col' class='text-center'>Ações</th>
		    </tr>`;
    $.each(data.results, function(key, val) {
		read_characters_html+=`
	        <tr>
	            <td class='text-center td-middle'><img src="` + val.image + `" class="img-thumbnail img-thumbnail-sm"/></td>
	            <td class='text-center td-middle'>` + val.name + `</td>
	            <td class='text-center td-middle'>` + t_status(val.status) + `</td>
	            <td class='text-center td-middle'>` + val.species + `</td>
	            <td class='text-center td-middle'>` + val.type + `</td>
	            <td class='text-center td-middle'>` + t_gender(val.gender) + `</td>
	            <td class='text-center td-middle'>
	                <button class='btn btn-primary read-one-character-btn' title='Ver' data-id='` + val.id + `'>
	                    <i class='fas fa-eye'></i>
	                </button>
	            </td>
	        </tr>`;
    	});
    	read_characters_html+=`</table>`;
    	if(info.pages > 1){
    		read_characters_html+=`<div class="row"><div class="col-10"><nav aria-label='Navegação'>` +
    				`<ul class='pagination pagination-character float-left m-0 pb-3'>`;
    			read_characters_html+=`<li class='page-item'><a class='page-link' data-page='https://rickandmortyapi.com/api/character/`
    			if (keywords != "") read_characters_html+= `?`+ keywords + `' data-keywords='`+ keywords;
    			read_characters_html+=`'>Primeira</a></li>`;
    	        if(info.prev != null){
    	        	read_characters_html+=`<li class='page-item'><a class='page-link' data-page='` + info.prev + `' data-keywords='`+ keywords +`'>Anterior</a></li>`;
    	        }
    	        // read_characters_html+=`<li class='page-item' class='active'><a class='page-link disabled'>página x de ` + info.pages + `</a></li>`;
    	        if(info.next != null){
    	        	read_characters_html+=`<li class='page-item'><a class='page-link' data-page='` + info.next + `' data-keywords='`+ keywords +`'>Próxima</a></li>`;
    	        }
    	        read_characters_html+=`<li class='page-item'><a class='page-link' data-page='https://rickandmortyapi.com/api/character/?page=` + info.pages;
    	        if (keywords != "") read_characters_html+= `&`+keywords + `' data-keywords='` + keywords;
    	        read_characters_html+=`'>Última</a></li>`;
    	    read_characters_html+=`</ul></nav></div><div class="col-2 float-rigth">página ` + cur_page + ` de ` + info.pages + `</div></div>`;
    	}
    	$("#page-content").html(read_characters_html);
    	window.scrollTo(0, 0);
};
function t_gender(gender) {
	switch(gender){
		case "Female":
			return "Feminino";
		break;
		case "Male":
			return "Masculino";
		break;
		case "Genderless":
			return "Sem gênero";
		break;
		case "unknown":
		default:
			return "desconhecido";
		break;
	}
}
function t_status(status) {
	switch(status){
		case "Alive":
			return "Vivo";
		break;
		case "Dead":
			return "Morto";
		break;
		case "unknown":
		default:
			return "desconhecido";
		break;
	}
}