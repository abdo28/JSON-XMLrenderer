let request = new XMLHttpRequest();
request.open('GET', 'data.xml', true);

request.onreadystatechange = function() {
    if (request.status >= 200 && request.status < 400) {
        let data = request.responseXML;
        let table = document.getElementById("main-table");
        let table_content='<tr> <th>from</th> <th>to</th> <th>subject</th>  <th>body</th></tr>';
        data = data.getElementsByTagName('inbox')[0];
        for(var i=0; i<data.getElementsByTagName("message").length;i++){
            let message = data.getElementsByTagName("message")[i];
            table_content+='<tr><td>'+message.getElementsByTagName("from")[0].childNodes[0].nodeValue+'</td><td>'+message.getElementsByTagName("to")[0].childNodes[0].nodeValue+'</td><td>'+message.getElementsByTagName("subject")[0].childNodes[0].nodeValue+'</td><td>'+message.getElementsByTagName("body")[0].childNodes[0].nodeValue+'</td></tr>';
        }
        table.innerHTML = table_content;
    } else {
        console.log("err");
    }
}

request.send();