import { useEffect } from "react"
import { api } from "../services/api";
import { Container } from "./styles"

export function TransactionsTable() {
    useEffect(() =>{
        api.get('/transactions')
        .then(response => console.log(response.data))
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td className="deposit">R$12.000</td>
                        <td>Dev</td>
                        <td>20/02/2011</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td className="withdraw">- R$12.000</td>
                        <td>Dev</td>
                        <td>20/02/2011</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}