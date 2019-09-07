function clickTable() {
    let t = document.getElementById('newTable');
    let popUp = document.getElementById('popUp');
    if (t.style.display === 'block') {
        t.style.display = 'none';
        popUp.style.display = 'none';

    } else {
        t.style.display = 'block';
    }
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 50; i++) {
                // let newtr = document.createElement('tr');
                // let tr = document.getElementsByTagName(newtr)[0];
                // tr.appendChild('<td>' + data[i].id + '</td>' +

                let table_body = document.getElementsByTagName('tbody')[0];
                table_body.innerHTML += '<td>' + data[i].id + '</td>' +
                    '<td>' + data[i].name + '</td>' +
                    '<td>' + data[i].email + '</td>' +
                    '<td class="dtlBtn" data-detail="' + data[i].body + '" onclick="clickDetail(this)">Click for Detail</td>'
            }
        })
}
function clickDetail(btn) {
    console.log(btn.getAttribute("data-detail"))
    let detail = btn.getAttribute("data-detail");

    let popUp = document.getElementById('popUp');
    popUp.style.display = 'block';
    popUp.innerHTML = detail + '<br/><br/><button onclick="clearPop()">clear</button>';
}

function clearPop() {
    let popUp = document.getElementById('popUp');
    popUp.style.display = 'none';
}
