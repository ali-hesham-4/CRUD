// HTML     Elements

siteName = document.getElementById("siteName")
siteUrl = document.getElementById("siteUrl")
tBody = document.getElementById("tBody")




// App      Variables

var sitesList = []





// Functions

function submite() {
    var site = {
        name : siteName.value,
    
        url :  siteUrl.value
    }
    sitesList.push(site)
    clear()
    display()

    localStorage.setItem ("sitesList",JSON.stringify(sitesList))
}


function clear() {
    siteName.value = ""
    siteUrl.value = ""
}

function display() {
    var row = ``
    for( var i=0 ; i < sitesList.length ; i++ ){
        row += `
        <tr>
            <td>${i+1}</td>
            <td>${sitesList[i].name}</td>
            <td><a href='${sitesList[i].url}' target="_blank"><button class="btn-visit ps-3 pe-3 pt-2 pb-2 rounded-2 border-0 fw-medium text-white"><i class="fa-solid fa-eye pe-2"></i>Visite</button></a></td>
            <td><button onclick = "deleteSite(${i})"  class="btn-delete ps-3 pe-3 pt-2 pb-2 rounded-2 border-0 fw-medium text-white"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
        </tr>`
    }
    document.getElementById("tBody").innerHTML = row
}


if(localStorage.getItem("sitesList") == null) {
    sitesList = [];
}else{
    sitesList = JSON.parse(localStorage.getItem("sitesList"));
    display(sitesList);
}


function deleteSite(index) {
    sitesList.splice(index,1)
    localStorage.setItem ("sitesList",JSON.stringify(sitesList))
    display()
}