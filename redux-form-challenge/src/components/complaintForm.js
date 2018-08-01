import React from 'react';
import './complaintForm.css';
import{reduxForm, Field} from 'redux-form';
import{required, notEmpty, lengthOfFive, onlyNumbers} from '../validators/validators';
import TrackingNumber from './trackingNumber';

class ComplaintForm extends React.Component {
  render() {
    return (
      <div className="delivery-form">
        <h2>Report a problem with your deliver</h2>
        <form>
          <div>
            <label htmlFor="trackingNumber">Tracking Number</label>
            <Field 
              component={TrackingNumber}
              element='input' 
              name="trackingNumber" 
              value 
              id="trackingNumber"
              validate={[required, notEmpty, lengthOfFive, onlyNumbers]} />
          </div>
          <div>
            <label htmlFor="issue">What is your issue?</label>
            <Field component='select' name="issue" id="issue">
              <option value="not-delivered">My delivery hasn't arrived.</option>
              <option value="wrong-item">Wrong item delivered.</option>
              <option value="missing-item">Part of my order was missing.</option>
              <option value="damaged-item">Some of my order arrived damaged.</option>
              <option value="other">Other (give details below).</option>
            </Field>
          </div>
          <div>
            <label htmlFor="details">Give more details (optional)</label>
            <Field component='textarea' name="details" id="details" />
          </div>
          <button tyle="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'complaint'
})(ComplaintForm);