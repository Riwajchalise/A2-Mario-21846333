import { useState } from 'react'

function NewPhone(props) {
  const { contact, phones, setPhones } = props
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  async function createPhone(e) {
    e.preventDefault()

    const response = await fetch(
      'http://localhost/api/contacts/' + contact.id + '/phones',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: number,
          phone_type: name,
        }),
      }
    )

    const data = await response.json()

    if (data.id) {
      setPhones([...phones, data])
    }

    setNumber('')
    setName('')
  }

  return (
    <form
      onSubmit={createPhone}
      onClick={(e) => e.stopPropagation()}
      className='new-phone'
    >
      <select onChange={(e) => setName(e.target.value)} value={name}>
        <option value='' disabled>
          Select Name
        </option>
        <option value='Phone Type 1'>Phone Type 1</option>
        <option value='Phone Type 2'>Phone Type 2</option>
        <option value='Phone Type 3'>Phone Type 3</option>
        <option value='Phone Type 4'>Phone Type 4</option>
      </select>
      <input
        type='text'
        placeholder='Phone Number'
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <button className='button green' type='submit'>
        Add Choiru’s Phone
      </button>
    </form>
  )
}

export default NewPhone
