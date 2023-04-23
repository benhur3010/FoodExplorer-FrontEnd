import { Container } from "./styles";

export function ListRequests ({ title, data, color, details, onChange, children, ...rest }) {

  return (
    <Container
    {...rest}
    >

      <div className="status">
      <p color={color}>•</p>
      <select onChange={onChange} value={data.status}>
      <option className="pendent" value="Pendente">Pendente</option>
      <option className="preparing" value="Preparando">Preparando</option>
      <option className="delivered" value="Entregue">Entregue</option>
      </select>
      </div>

      <li className="code">
      {data.code}
      </li>

        <li className="details">
      {details}
        </li>

      <li className="date">
      {data.created_at}
      </li>
    </Container>
  )
}