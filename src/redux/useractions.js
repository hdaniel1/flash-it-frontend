function addUser(user) {
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST", 
            headers: {
                "accepts": "application/json",
                "content-type": "application/json"      
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
    }
}

export {
    addUser
}