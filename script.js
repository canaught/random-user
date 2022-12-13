

var data="";

function update_data_box(button) {
    let age = data.results[0].dob.age;
    let email = data.results[0].email;
    let phone = data.results[0].phone;

    switch (button.getAttribute("buttonFor")) {
        case 'age':
            document.getElementById("data_box").innerText = age;
            break;
        case 'email':
            document.getElementById("data_box").innerText = email;
            break;
        default:
            document.getElementById("data_box").innerText = phone;
            break;
    }

    
}

async function fetchdata() {
    try {
        const url = "https://randomuser.me/api/";
        let response = await fetch(url);
        let jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.log("error occcured");
    }
} 


async function refreshRun(){
    
    document.getElementById("data_box").innerText = "";
    data = await fetchdata();
    console.log("data value is = ", data);
    
    document.getElementById("profile").setAttribute("src", `${data.results[0].picture.large}`);
    
    document.getElementById("fullname").innerText = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;

}



refreshRun();


//console.log(data);

