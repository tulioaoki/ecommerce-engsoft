import axios from 'axios';
localStorage.setItem("token", '2d35fc6f3726696a55b2e11bc68ec253e829e84d'); // para testar, deve ser setado no login

module.export = {
    fetchCart: async () => {
        let headers = {
            'content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`} //deve ser passa

        axios.get(`${process.env.BASE_URL}/cart`,headers)
            .then(res=>res.json)
            .then(body=>{
                console.log(body);
            });
    } 
}



    
    