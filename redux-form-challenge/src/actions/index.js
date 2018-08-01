
const API_BASE_URL = 'https://us-central1-delivery-form-api.cloudfunctions.net/'

export const report = values => dispatch => {
  return fetch(`${API_BASE_URL}api/report`,{
    method: 'POST',
    body: JSON.stringify(values),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if(!res.ok){
      if(
      res.headers.has('content-type')&&
      res.headers
        .get('content-type')
        .startsWith('application/json')
      ){
          return res.json().then(err => Promise.reject(err));
      }
      return Promise.reject({
        code: res.status,
        message: res.statusText
      });
    }
    return;
  })
  .then(() => console.log('Submitted report', report))
  .catch(error =>
    Promise.reject(
      new SubmissionError({
        [error.location]: error.message
      })
    )  
  )
  

}