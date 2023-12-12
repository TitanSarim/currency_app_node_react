import React, { useState } from 'react'
import axios from 'axios'
import './createRecord.css'

const CreateRecord = () => {

  const [name, setName] = useState("")
  const [cnic, setCnic] = useState("")
  const [currency, setCurrency] = useState("")
  const [amount, setAmount] = useState("")
  const [totalamount, setTotalAmount] = useState("")
  const [error, setError] = useState(null)

  const createRecord = async () => {

    if (!name || !cnic || !currency || !amount || !totalamount) {
      setError('All fields are required');
      return
    }

    const data = {
      name: name,
      cnic: cnic,
      currency: currency,
      amount: amount,
      totalamount: totalamount
    }

    try {
      await axios.post(`http://localhost:3800/api/v1/createCurrey`, data);
      window.location.reload()
    } catch (error) {
        setError(error.message || 'An error occured')
    }

  }

  const handleTotalChange = (e) => {
    
    const inputValue = e.target.value;

    setAmount(inputValue)

    if(currency === 'USD'){
      setTotalAmount(inputValue * 280)
    }else if(currency === 'EUR'){
      setTotalAmount(inputValue * 250)
    }else if(currency === 'SAR'){
      setTotalAmount(inputValue * 75)
    }

  }

  return (
    <div className='home-container'>

      <div className='create-record-container'>

        <div className='create-record-wrapper'>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
          <input type='number' value={cnic} onChange={(e) => setCnic(e.target.value)} placeholder='CNIC'/>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option>USD</option>
            <option>EUR</option>
            <option>SAR</option>
          </select>
          <input type='number' value={amount} onChange={handleTotalChange} placeholder='Amount' />
          <input type='number' value={totalamount} placeholder='Total Amount' disabled />
          {name && cnic && currency && amount && totalamount ? null : <p>{error}</p>}
          <button onClick={createRecord}>
            Create
          </button>
        </div>

      </div>

    </div>
  )
}

export default CreateRecord