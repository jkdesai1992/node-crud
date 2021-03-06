import React, {Component} from 'react';
import axios from 'axios';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person_name: '',
            business_name: '',
            business_gst_number: ''
        }
    }

    componentDidMount() {
        const {data} = this.props && this.props.location && this.props.location.state
        this.setState({
            person_name: data.data.person_name || "",
            business_name: data.data.business_name || "",
            business_gst_number: data.data.business_gst_number || ""
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = () => {
        const {person_name, business_name, business_gst_number} = this.state
        const {match} = this.props
        const obj = {
            person_name: person_name,
            business_name: business_name,
            business_gst_number: business_gst_number
        };

        axios.put(`http://localhost:4000/api/business/update/${match.params.id}`, obj).then(res => {
            this.props.history.push('/index');
        }).catch(err => {
            console.log("err in deleting version : ", err)
        })
    }

    render() {
        const {person_name, business_name, business_gst_number} = this.state
        return (
            <div style={{marginTop: 10}}>
                <h3 align="center">Update Business</h3>
                <div className="form-group">
                    <label>Person Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        name="person_name"
                        value={person_name}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text"
                           className="form-control"
                           name="business_name"
                           value={business_name}
                           onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text"
                           className="form-control"
                           name="business_gst_number"
                           value={business_gst_number}
                           onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onSubmit={this.onSubmit}>submit</button>
                </div>
            </div>
        )
    }
}

export default Edit