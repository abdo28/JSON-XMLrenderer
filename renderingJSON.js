let request = new XMLHttpRequest();
request.open('GET', 'data.json', true);

request.onreadystatechange = function() {
    if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText);
        let table = document.getElementById("main-table");
        let table_content='<tr> <th>from</th> <th>to</th> <th>subject</th>  <th>body</th></tr>'
        for(var i=0; i<data.inbox.length;i++){
            let message = data.inbox[i].message;
            table_content+='<tr><td>'+message.from+'</td><td>'+message.to+'</td><td>'+message.subject+'</td><td>'+message.body+'</td></tr>';
        }
        table.innerHTML = table_content;
    } else {
        console.log("err");
    }
}

request.send();