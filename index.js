import React from 'react';
import ReactDOM from 'react-dom';

class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      num: '',
      data: '',
      males: '',
      females: '',
      population: '',
      found: '',
      error: null,
      list: [],
      hits: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  countryList =(data)=>{
    this.setState({list: data});
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      num: event.target.num,
    });
    let found = this.state.list.find(name => name = this.state.value);
    let items = localStorage.getItem('countries');
    // this.setState({ hits: JSON.parse(items) });
    // console.log(JSON.parse(items));
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8080/countries")
      .then(res => res.json())
      .then(data=>{
        localStorage.setItem('countries', JSON.stringify(data));
        let item = localStorage.getItem('countries');
        let country_list = JSON.parse(item);
        this.countryList(country_list);
      })
      .catch(error => {
        this.setState({error});
      })
  }

  render() {
    // const found = this.state.list.find(name => name = "Afghanistan");
    // console.log(found);
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="country" className="col-sm-2 col-form-label">Country Name :</label>
            <div className="col-sm-10">
              <select className="form-control col-md-4 mb-3" name="country" id="country" value={this.state.value} onChange={this.handleChange} required>
                <option value="0">Please select one Country</option>
                {this.state.list.length > 0 &&
                  this.state.list.map( (item, index) => (
                    <option key={item.name} value={item.name}>{item.name}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Country Name : {this.state.value}</label>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" value="Submit" className="btn btn-primary btn-md">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


// ========================================

ReactDOM.render(
  <Country />,
  document.getElementById('form')
);
