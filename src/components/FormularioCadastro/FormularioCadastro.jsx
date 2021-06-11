import React, {useState} from 'react';
import {Button, FormControlLabel, Switch, TextField} from "@material-ui/core";

function FormularioCadastro() {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log({nome, sobrenome, cpf, promocoes, novidades});
            }}>

            <TextField
                id="Nome"
                label="Nome"
                value={nome}
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event) => {
                    setNome(event.target.value);
                }}/>

            <TextField
                id="Sobrenome"
                label="Sobrenome"
                value={sobrenome}
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}/>

            <TextField
                id="CPF"
                label="CPF"
                value={cpf}
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event) => {
                    setCpf(event.target.value);
                }}/>

            <FormControlLabel
                label="Promoções"
                control={<Switch
                    checked={promocoes}
                    onChange={(event) => {
                        setPromocoes(event.target.checked);
                    }}
                    name="promoções"
                    color="primary"/>
                }/>

            <FormControlLabel
                label="Novidades"
                checked={novidades}
                control={<Switch
                    onChange={(event) => {
                        setNovidades(event.target.checked);
                    }}
                    name="novidades"
                    color="primary"/>
                }/>

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

        </form>
    )
}

export default FormularioCadastro;
