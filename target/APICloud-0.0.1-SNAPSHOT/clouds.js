//getIdXML(1);
//getIdXML(2);

window.onload = function comeca(){
//	var tamanho = 0;
//	var xmlGeral = "";
	
	getXML();
	
//	document.getElementById("show").innerHTML = tamanho;
}

function getIdXML(id) {

    jQuery.ajax({
        type: "GET",
        url: "http://localhost:8080/Teste/rest/clouds/" + id,
        contentType: "text/xml; charset=utf-8",
        dataType: "xml",
        success: function (data, status, jqXHR) {
       	 	getCloud(data);
        },
        error: function (jqXHR, status) {
       	 alert("Erro");
            // error handler
        }
    });
}

function cloudToTable(xml) {
	var table = document.getElementById("demo");
	var row = table.insertRow(table.rows.length);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	cell1.setAttribute('contentEditable', 'false');
	cell2.setAttribute('contentEditable', 'true');
	cell3.setAttribute('contentEditable', 'true');
	cell4.setAttribute('contentEditable', 'true');
	cell5.setAttribute('contentEditable', 'true');
	cell6.setAttribute('contentEditable', 'true');
	cell7.setAttribute('contentEditable', 'true');
	cell8.setAttribute('contentEditable', 'true');
	cell9.setAttribute('contentEditable', 'true');
	cell1.innerHTML = xml.getElementsByTagName("cloudId")[0].childNodes[0].nodeValue;
	cell2.innerHTML = xml.getElementsByTagName("nome")[0].childNodes[0].nodeValue;
	cell3.innerHTML = xml.getElementsByTagName("numCPU")[0].childNodes[0].nodeValue;
	cell4.innerHTML = xml.getElementsByTagName("tamanhoMem")[0].childNodes[0].nodeValue;
	cell5.innerHTML = xml.getElementsByTagName("tamanhoArmLocal")[0].childNodes[0].nodeValue;
	cell6.innerHTML = xml.getElementsByTagName("custoPorHora")[0].childNodes[0].nodeValue;
	cell7.innerHTML = xml.getElementsByTagName("suporteCUDA")[0].childNodes[0].nodeValue;
	cell8.innerHTML = xml.getElementsByTagName("suporte32bits")[0].childNodes[0].nodeValue;
	cell9.innerHTML = xml.getElementsByTagName("suporte64bits")[0].childNodes[0].nodeValue;
}

function getXML() {

    jQuery.ajax({
        type: "GET",
        url: "http://localhost:8080/Teste/rest/clouds",
        contentType: "text/xml; charset=utf-8",
        dataType: "xml",
        success: function (data, status, jqXHR) {
            cloudsToTable(data);
        },
        error: function (jqXHR, status) {
       	 alert("Erro");
            // error handler
        }
    });
}

function cloudsToTable(xml) {
	  var i;
	  var x = xml.getElementsByTagName("cloudInstance");
	  for (i = 0; i < x.length; i++) {
		  cloudToTable(x[i]);
	  }
//	  tamanho = x.length;
//	  xmlGeral = xml;
}

/*function setXML(xml) {

    jQuery.ajax({
        type: "PUT",
        url: "http://localhost:8080/Teste/rest/clouds",
        contentType: "text/xml; charset=utf-8",
        dataType: "xml",
        data: xml,
        success: function (data, status, jqXHR) {
        	alert(data);
        },

        error: function (jqXHR, status) {
       	 alert("Erro");
            // error handler
        }
    });
}*/

/*function addNewRow(){
	var table = document.getElementById("demo");
	var row = table.insertRow(table.rows.length);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	cell1.setAttribute('contentEditable', 'false');
	cell2.setAttribute('contentEditable', 'true');
	cell3.setAttribute('contentEditable', 'true');
	cell4.setAttribute('contentEditable', 'true');
	cell5.setAttribute('contentEditable', 'true');
	cell6.setAttribute('contentEditable', 'true');
	cell7.setAttribute('contentEditable', 'true');
	cell8.setAttribute('contentEditable', 'true');
	cell9.setAttribute('contentEditable', 'true');
	var xml = "<cloudInstance>";
	xml += "<cloudId>" + 0 + "</cloudId>";
	xml += "</cloudInstance>";
	setXML(xml);
}*/
