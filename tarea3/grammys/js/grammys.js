$.ajax({
    url : "data/grammys.json",
    type : "GET",
    dataType : "json",
    success : function(data) {
        let new_html = "";

        for(let i = 0; i < data.fields.length; i++){
          new_html += `<option value="${data.fields[i].field_id}">${data.fields[i].field}</option>`;
      }
      $("#category_types").append(new_html);
      loadGrammysInfo();
    },
    error : function(error_msg) {
        console.log(error_msg)
    }
});

function loadGrammysInfo() {
    $.ajax({
        url : "data/grammys.json",
        type : "GET",
        dataType : "json",
        success : function(data) {
            $("#category_types").on('change', function(event){
                let id = $(this).val();
                let new_html = "";

                for( let i = 0; i < data.fields.length; i++ ) {
                  if(id == data.fields[i].field_id){
                    new_html += `<h2 value="${data.fields[i].field_id}">${data.fields[i].field}</h2>`;
                    new_html += `<h4>${data.fields[i].description}</h4>`;

                    dataCategories = data.fields[i].categories
                    for (let j = 0; j < dataCategories.length; j++) {
                      new_html += `<h3>${dataCategories[j].category_name}</h3>`;
                      dataNominies = data.fields[i].categories[j].nominees

                      for(let k = 0; k < dataNominies.length; k++){
                        new_html += `<div class="nominados"><h4><ul>`;
                        if(k == dataCategories[j].winner_id){
                          new_html += `<li class="cancionNominada" value="${k}"><h4 class="winner">${dataNominies[k].nominee} </h4> Winner! </li>`
                        }
                        else{
                          new_html += `<li class="cancionNominada" value="${k}" >${dataNominies[k].nominee}</li>`
                        }
                        new_html += `<p>${dataNominies[k].artist}</p>
                                    <p>${dataNominies[k].info}<p>
                                    </h4></ul></div>`;

                      }
                      new_html += `<hr>`;
                    }
                  }
                }
                $("#nominees_section").empty().append(new_html);
            });
        },
        error : function(error_msg) {
            console.log(error_msg)
        }
    })
}
