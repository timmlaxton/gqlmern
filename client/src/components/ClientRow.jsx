import React from 'react'
import {FaTrash} from 'react-icons/fa'
import {useMutation} from '@apollo/client'
import {DELETE_CLIENT} from '../mutations/ClientMutations'
import { GET_CLIENTS } from '../queries/ClientQueries'

const ClientRow = ({client}) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: {id: client.id},
    refetchQueries: [{query: GET_CLIENTS}]
  })


  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
     <td>
       <button onClick={deleteClient} className='btn btn-danger btn-sm'>
         <FaTrash/>
       </button>
     </td>
    </tr>
  )
}

export default ClientRow