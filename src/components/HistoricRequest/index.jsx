import { Container } from "./styles";

export function HistoricRequest ({ title, data, color, details, children, ...rest }) {

  return (
    <Container
    {...rest}
    >

      <div className="status">
        <p color={color}>
        •
        </p>
        <span>
        {data.status}
        </span>
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