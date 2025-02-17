// import { useState } from 'react';
function TicketSelection() {
  // const ticketTypes = [
  //   { id: 'free', price: 'Free', tag: 'REGULAR ACCESS' },
  //   { id: 'vip', price: '$150', tag: 'VIP ACCESS' },
  //   { id: 'vvip', price: '$150', tag: 'VVIP ACCESS' }
  // ];

  // const [selected, setSelected] = useState('free');

  // const handleSelect = (ticketTypes) => {
  //   setSelected(ticketTypes.id);
  //   onselect(ticketTypes);
  // };

  return (
    <div className='container card p-4 col-lg-6 rounded-5 mb-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h3 className='jeju'>Ticket Selection</h3>
        <small>step 1/3</small>
      </div>
      <progress
        className='progress-bar mb-5'
        value={33}
        max={100}></progress>
      <div className='p-3 bi-border-inner rounded-5 align-self-center'>
        <div className='techember rounded-5 text-center p-4'>
          <h1 className='rage display-4'>Techember Fest ”25</h1>
          <p className='roboto-regular'>
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <div className='d-flex text-center justify-content-center techember-date-time'>
            <p className='roboto-regular'>📍 [Event Location]</p>
            <p className='px-2 roboto-regular two-vertical-lines'> || </p>
            <p className='roboto-regular'>March 15, 2025 | 7:00 PM</p>
          </div>
        </div>
        <hr className='divider mt-4' />
        <div className='ticket-type p-3'>
          <label className='roboto-regular'>Select ticket type</label>
          <div className='ticket-inputs row gy-3 rounded-5 mt-2 justify-content-between'>
            <div className='ticket-types free p-3 rounded-4 col-lg-4'>
              <h4 className='roboto-regular'>Free</h4>
              <p className='m-0'>REGULAR ACCESS</p>
              <small>20/52</small>
            </div>
            <div className='ticket-types vip p-3 rounded-4 col-lg-4'>
              <h4 className='roboto-regular'>$50</h4>
              <p className='m-0'>VIP ACCESS</p>
              <small>20/52</small>
            </div>
            <div className='ticket-types vvip p-3 rounded-4 col-lg-4'>
              <h4 className='roboto-regular'>$150</h4>
              <p className='m-0'>VVIP ACCESS</p>
              <small>20/52</small>
            </div>
          </div>
        </div>
        <div className='ticket-number mt-4'>
          <label className='roboto-regular mb-2'>Number of Tickets</label>
          <select className='form-select rounded-3 select-ticket'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <div className='row gx-4 gy-2 justify-content-around mt-3 jeju'>
          <div className='d-grid col-lg-6'>
            <button className='btn rounded-3 btn-outline'>Cancel</button>
          </div>
          <div className='d-grid col-lg-6'>
            <button className='btn rounded-3 btn-fill'>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketSelection;
