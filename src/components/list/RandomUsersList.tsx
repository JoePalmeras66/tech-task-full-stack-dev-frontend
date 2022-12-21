import { useAtom } from "jotai";
import { loadableAsyncAllRandomUsersAtom } from "../../services/randomusers-service";

export const RandomUsersList = () => {
  const [loadableData] = useAtom(loadableAsyncAllRandomUsersAtom);
  if (loadableData.state === 'hasError') return <div>Error</div>;
  if (loadableData.state === 'loading')  return <div>Loading...</div>
  return(
    <>
      <ul>
        {loadableData.data.contents.map((r) => (
          <li key={r.email}>
            <p>{r.first} {r.last} {r.email}</p>
          </li>
        ))}
      </ul>
    </>
  )
}