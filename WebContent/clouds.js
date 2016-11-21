//getIdXML(1);
//getIdXML(2);

//alert(window.location.href);

urlAPI = window.location.href + "rest/clouds/";
var atribs = ["cloudId", "nome", "numCPU", "tamanhoMem", "tamanhoArmLocal", "custoPorHora", "suporteCUDA", "suporte32bits", "suporte64bits", "status"];

window.onload = function comeca(){
//	var tamanho = 0;
//	var xmlGeral = "";
	
	getXML();
	
//	document.getElementById("show").innerHTML = tamanho;
}

function getIdXML(id) {

    jQuery.ajax({
        type: "GET",
        url: urlAPI + id,
        contentType: "text/xml; charset=utf-8",
        dataType: "xml",
        success: function (data, status, jqXHR) {
        	cloudToTable(data);
        },
        error: function (jqXHR, status) {
       	 alert("Erro getIdXML");
            // error handler
        }
    });
}


function getXML() {

    jQuery.ajax({
        type: "GET",
        url: urlAPI,
        contentType: "text/xml; charset=utf-8",
        dataType: "xml",
        success: function (data, status, jqXHR) {
            cloudsToTable(data);
        },
        error: function (jqXHR, status) {
       	 alert("Erro getXML");
            // error handler
        }
    });
}

function cloudsToTable(xml) {
	  var i;
	  var x = xml.getElementsByTagName("cloudInstance");
	  //alert(x.length);
	  for (i = 0; i < x.length; i++) {
		  cloudToTable(x[i]);
	  }
//	  tamanho = x.length;
//	  xmlGeral = xml;
}

function addXML(xml) {

    jQuery.ajax({
        type: "POST",
        url: urlAPI,
        contentType: "text/xml; charset=utf-8",
        dataType: "xml",
        data: xml,
        success: function (data, status, jqXHR) {
        	cloudToTable(data);
        },

        error: function (jqXHR, status) {
       	 alert("Erro addXML");
            // error handler
        }
    });
}

function addNewRow(){
	// Adiciona uma nova cloud no servidor e na tabela.
	var xml = "<cloudInstance>";
	xml += "<cloudId>" + 0 + "</cloudId>";
	xml += "</cloudInstance>";
	addXML(xml);
}

function tableToXML(id){
	// Transforma uma linha da tabela em uma entrada XML.
	var row = document.getElementById('demo').rows[id].cells;
	var xml = '<cloudInstance>';
	
	for(var i=0; i<row.length; i++){
		xml += '<' + atribs[i] + '>' + row[i].innerHTML + '</' + atribs[i] + '>';
	}
	xml += '</cloudInstance>';
	return(xml);
}

function updateXML(clicked_id){
	// Usar botão na tabela para alterar.
	var btn = document.getElementById(clicked_id);
	var id = clicked_id.split("btn")[1];
	
	btn.disabled = true;
	var xml = tableToXML(id);
    jQuery.ajax({
        type: "PUT",
        url: urlAPI+id+"/",
        contentType: "text/xml; charset=utf-8",
        //contents: "text/plain",
        //dataType: "xml",
        data: xml,
        success: function (data, status, jqXHR) {
        	alert(data);
        	//cloudToTable(data);
        },

        error: function (jqXHR, status) {
       	 alert("Erro updateXML" + jqXHR + " " + status);
            // error handler
        }
    });
	btn.disabled = false;
}

function cloudToTable(xml) {
	// Inserir elementos do xml na tabela html.
	var table = document.getElementById("demo");
	var sizeRow = table.rows[0].cells.length;
	var row = table.insertRow(table.rows.length);
	var cell;
	var id = xml.getElementsByTagName(atribs[0])[0].childNodes[0].nodeValue;

	row.setAttribute('id', id);
	for(var i=0; i<sizeRow-1; i++){
		cell = row.insertCell(i);
		if(i<2)	cell.setAttribute('contentEditable', 'false');
		else	cell.setAttribute('contentEditable', 'true');
		cell.innerHTML = xml.getElementsByTagName(atribs[i])[0].childNodes[0].nodeValue; 
	}
	cell = row.insertCell(sizeRow-1);
	cell.setAttribute('contentEditable', 'false');
	cell.innerHTML = '<button id="btn'+ id + '" type="button" onclick="updateXML(this.id)">Enviar</button>';
}


