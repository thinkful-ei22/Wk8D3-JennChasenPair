import React from 'react';
import './complaintForm.css';

export default class ComplaintForm extends React.Component {
  render() {
    return (
      <div className="delivery-form">
        <h2>Report a problem with your deliver</h2>
        <form>
          <div>
            <label htmlFor="trackingNumber">Tracking Number</label>
            <input name="trackingNumber" value id="trackingNumber"></input>
          </div>
          <div>
            <label htmlFor="issue">What is your issue?</label>
            <select name="issue" id="issue">
              <option value="not-delivered">My delivery hasn't arrived.</option>
              <option value="wrong-item">Wrong item delivered.</option>
              <option value="missing-item">Part of my order was missing.</option>
              <option value="damaged-item">Some of my order arrived damaged.</option>
              <option value="other">Other (give details below).</option>
            </select>
          </div>
          <div>
            <label htmlFor="details">Give more details (optional)</label>
            <textarea name="details" id="details"></textarea>
          </div>
          <button tyle="submit">Submit</button>
        </form>
      </div>
    );
  }
}