import styled from 'styled-components'

export default function Contracts() {
    return (
        <Container>
            <div id='title'>
                <img/>
                <h1>PAGAMENTO DE FORNECEDOR</h1>
            </div>
            <div id='data'>
                <h2 id='company-name'>
                    Razão Social:
                </h2>
                <h2 id='commercial-name'>
                    Nome Fantasia:
                </h2>
                <h2 id='number'>
                    CNPJ:
                </h2>
            </div>
            <div id='contracts'>
                <h2 id='title'>
                    Contratos Vinculados
                </h2>
                <div id='table'>
                    <table>
                        <tr>
                            <th>Nome do Contrato</th>
                            <th>Código do Contrato</th>
                            <th>Retenção Técnica</th>
                            <th>Detalhes</th>
                        </tr>
                        <tr>
                            <td>Título do Primeiro Contrado de exemplo</td>
                            <td>11002200-01</td>
                            <td>5%</td>
                            <td>detalhes</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id='footer'>
                <img/>
                <button>Anterior</button>
                <button>Próximo</button>
                <h5>© 2022-2022 Construindo Patrimônios</h5>
            </div>
        </Container>
    )   
}

const Container = styled.div`
    width: 93vw;
    height: 90vh;
    background-color: #FFFFFF;
`