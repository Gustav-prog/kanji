


export const register = async (username, password, email) => { //can pass access too
        await fetch("http://localhost:8080/user/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: username,
                email: email,
                password: password
            })
        }).then(res => {
            if (res.status === 201) {
                alert('Användare skapad')
                window.location.href="/login"
            } else {
                alert('Användare kunde inte skapas')
            }

        }).catch(e => console.log(e))
    };


    export const TryLogin = async (username, password) => {
        
            let response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify({
                'username': username,
                'password': password
            }),
        });


            console.log(response.status);
            if (response.status === 200) {
                let reader = response.body.getReader();
                let decoder = new TextDecoder('utf-8');
            
                const result_2 = await reader.read();
                let token = decoder.decode(result_2.value);
                localStorage.setItem('token', token);
                console.log(token);
                return response;
            } else {
                alert('Invalid username or password')
            }
            
    };


    export const getCurrentUsersToken = () => {
        return localStorage.getItem('token');
    }

    export const logout = () => {
        localStorage.removeItem('token');
    };

    export const isUserAuth = () => {

        if(localStorage.getItem('token') !== null) {
            return true;
        } else {
            return false;
        }
    }
