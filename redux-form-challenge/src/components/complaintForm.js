import React from 'react';
import './complaintForm.css';
import{reduxForm, Field} from 'redux-form';
import{required, notEmpty, lengthOfFive, onlyNumbers} from '../validators/validators';
import TrackingNumber from './trackingNumber';
import {reportIssue} from '../actions/index';

class ComplaintForm extends React.Component {
  render() {
    if(this.props.submitSucceeded) {
      return <div>'We have received your report'</div>;
    }
    return (
      <div className="delivery-form">
        <h2>Report a problem with your deliver</h2>
        <form onSubmit={this.props.handleSubmit(values => 
          this.props.dispatch(reportIssue(values))
        )}>
          <label htmlFor="trackingNumber">Tracking Number</label>
          <Field 
            component={TrackingNumber}
            element='input' 
            name="trackingNumber" 
            value 
            id="trackingNumber"
            validate={[required, notEmpty, lengthOfFive, onlyNumbers]} />
          <label htmlFor="issue">What is your issue?</label>
          <Field component='select' name="issue" id="issue">
            <option value="not-delivered">My delivery hasn't arrived.</option>
            <option value="wrong-item">Wrong item delivered.</option>
            <option value="missing-part">Part of my order was missing.</option>
            <option value="damaged">Some of my order arrived damaged.</option>
            <option value="other">Other (give details below).</option>
          </Field>
          <label htmlFor="details">Give more details (optional)</label>
          <Field component='textarea' value name="details" id="details" />
          <button tyle="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'complaint'
})(ComplaintForm);