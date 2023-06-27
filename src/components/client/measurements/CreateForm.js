import React from 'react'
import Icons from '../../Icons'

export default function CreateForm() {
  return (
    <tr className='create-form'>


      <td>
        <input type="text"/>
      </td>
      <td>
        <input type="text"/>
      </td>
      <td>
        <input type="text"/>
      </td>
      <td>
        <input type="text"/>
      </td>
      <td>
        <input type="text"/>
      </td>
      <td>
        <Icons icon="fa-solid fa-trash-can" className="ms-2 hover-yellow"/>
      </td>

    </tr>
  )
}
