import { useState } from 'react';
import axios from 'axios';

function CreateUser() {

    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    function createUser(event) {

        event.preventDefault();

        let user = JSON.stringify({name:name, job:job});
        console.log(user); 


        //AXIOS AQUI!
        axios.post('https://reqres.in/api/users', user)
            .then((response)=> {
                console.log(response);
                // alert(response)
            })
            .catch((error)=> {
                console.log(error);
                // alert(error)
            });
    }

    return (
    <form onSubmit={createUser} className='form'>
            <h1>FORMULÁRIO DE CADASTRO</h1>

            <input
                type='text'
                placeholder='DIGITE AQUI SEU NOME'
                value={name}
                onChange={(event) =>{setName(event.target.value)}}
            />

            <input
                type='text'
                placeholder='DIGITE AQUI SUA PROFISSÃO'
                value={job}
                onChange={(event) =>{setJob(event.target.value)}}
            />

            <button type='submit'>CADASTRAR</button>
    </form>
)};

export default CreateUser;