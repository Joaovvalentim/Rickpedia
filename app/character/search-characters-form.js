function searchCharactersTemplate(){
    var search_characters_form_html = `
    <form>
	  <div class="form-group">
	    <label for="inputName">Nome</label>
	    <input type="text" class="form-control" id="inputName" placeholder="Digite um nome..." minlength="3">
	  </div>
	  <div class="form-group">
	    <label for="selectStatus">Status</label>
	      <select class="form-control" id="selectStatus">
	        <option value="">Todos</option>
	        <option value="alive">Vivo</option>
	        <option value="dead">Morto</option>
	        <option value="unknown">Desconhecido</option>
	      </select>
	  </div>
	  <div class="form-group">
	    <label for="inputSpecie">Espécie</label>
	    <input type="text" class="form-control" id="inputSpecie" placeholder="Digite uma espécie..." minlength="3">
	  </div>
	  <div class="form-group">
	    <label for="inputType">Tipo</label>
	    <input type="text" class="form-control" id="inputType" placeholder="Digite um tipo..." minlength="3">
	  </div>
	  <div class="form-group">
	    <label for="selectGender">Gênero</label>
	      <select class="form-control" id="selectGender">
	        <option value="">Todos</option>
	        <option value="female">Feminino</option>
	        <option value="male">Masculino</option>
	        <option value="genderless">Sem gênero</option>
	        <option value="unknown">Desconhecido</option>
	      </select>
	  </div>
	  <button type="button" class="btn btn-primary display-search-results-btn">Pesquisar</button>
	</form>`;
    $("#page-content").html(search_characters_form_html);
    window.scrollTo(0, 0);
};