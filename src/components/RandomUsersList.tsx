import { IRandomUser } from "../services/randomuser-service"

export const RandomUsersList = (props: {list: IRandomUser[]}) => {
  return(
    <>
      <ul>
        {props.list.map((r) => (
          <li key={r.email}>
            <p>{r.first} {r.last} {r.email}</p>
          </li>
        ))}
      </ul>
    </>
  )
}