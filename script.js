var result = document.getElementById("content");

async function searchUser(){
    var userId = document.getElementById("search-user").value
    console.log(userId)
    ShowUser(userId);
    document.getElementById("search-user").value = '';
}

function GetUser(user) {
    return fetch(`https://reqres.in/api/users/${user}`)
        .then((data) => data.json())
        .catch((err) => console.log(err))
}

async function ShowUser(user){
    try {
        let userInfo= await GetUser(user)
        console.log(userInfo)

        let info = [
            `id: ${userInfo.data.id}`,
            `email: ${userInfo.data.email}`,
            `first_name: ${userInfo.data.first_name}`,
            `last_name: ${userInfo.data.last_name}`,
            `avatar: ${userInfo.data.avatar}`
        ]
        console.log(info)
        result.innerHTML = ""

        for (var i = 0; i < info.length; i++) {
            if(info[i] != `avatar: ${userInfo.data.avatar}`){
                let item = document.createElement("p")
                item.textContent = info[i]
                result.appendChild(item)
            } else{
                console.log(`${userInfo.data.avatar}`)
                let item = document.createElement("img")
                item.src = `${userInfo.data.avatar}`
                result.appendChild(item)
            }
        }
    } catch (err) {
        console.log(`Erro : ${err}`)
    }
}
