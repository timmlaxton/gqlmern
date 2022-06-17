import {gql, useQuery} from '@apollo/client'
import ClientRow from './ClientRow'
import Spinner from './Spinner'
import { GET_CLIENTS } from '../queries/ClientQueries'



const Clients = () => {
  const {loading, error, data} = useQuery(GET_CLIENTS)

  if (loading) return <p><Spinner/></p>
  if (error) return <p>Bugger...</p>


  return (
    <>
    {!loading && !error && (
      <table className='table table-hover mt-3'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.clients.map(client => (
            <ClientRow key={client.id} client={client}/>
          ))}
        </tbody>
      </table>
    )}
    </>
  )
}

export default Clients