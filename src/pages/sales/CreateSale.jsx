import React, { useContext, useState } from 'react';
import salesAPI from '../../apis/salesAPI';
import Swal from 'sweetalert2';
import { SalesContext } from '../../state/SalesContextProvider';

const CreateSale = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [clientName, setClientName] = useState('');
  const [receivedPerson, setReceivedPerson] = useState('');
  const [directOrder, setDirectOrder] = useState('');

  const { setUpdate } = useContext(SalesContext);

  const handleCreateSale = async (event) => {
    event.preventDefault();

    /*
    if (!type) {
      Swal.fire({
        icon: 'error',
        title: 'Type is Missing.',
        text: 'Must choose a Type!',
      });
      return;
    }

    await salesAPI.createSale({
      amount,
      date,
      type,
      receivedPerson,
      clientName,
      directOrder,
    });

    setAmount('');
    setDate('');
    setType('');
    setClientName('');
    setReceivedPerson('');
    setDirectOrder('');
    event.target.reset();
    setUpdate((p) => !p);

    Swal.fire({
      icon: 'success',
      title: 'New Sales Added!',
    });
    */
  };
  return (
    <div className="flex justify-content-center align-items-center mt-5">
      <form className="createSale" onSubmit={handleCreateSale}>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Client Name
          </span>
          <input
            type="text"
            name="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            class="form-control"
            placeholder="Client Name"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Received Person
          </span>
          <input
            type="text"
            name="receivedPerson"
            value={receivedPerson}
            onChange={(e) => setReceivedPerson(e.target.value)}
            class="form-control"
            placeholder="Received Person"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Direct Order
          </span>
          <select
            name="directOrder"
            value={directOrder}
            onChange={(e) => setDirectOrder(e.target.value)}
            class="form-control"
          >
            <option value="" selected>
              Choose One...
            </option>
            <option value="yes">Yes</option>
            <option value="nope">Nope</option>
          </select>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Amount
          </span>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            class="form-control"
            placeholder="Amount"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Date
          </span>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            class="form-control"
            placeholder="Date"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Type
          </span>
          <select
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            class="form-control"
          >
            <option value="" selected>
              Choose One...
            </option>
            <option value="sales">Sales</option>
          </select>
        </div>
        <div>
          <button className="btn btn-primary px-5" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSale;
