import React,{Component} from 'react';
import { connect } from 'react-redux';
import setProgresss from '../actions/setProgress';
import setTime from '../actions/setTime';
import setSampai from '../actions/setSampai';
import "../assets/styles/date.scss";
import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css'
import { TimePicker } from 'react-ios-time-picker';


class Tgl extends Component {
    state = {
        pickupDate: '',
        pickupTime: '',
        dropoffDate: '',
        dropoffTime: ''
    }

    componentDidMount(){
        this.setDefaultDate();
        this.setDefaultTime();
    }

    setDefaultDate = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 3);
        const date = currentDate.toISOString().substr(0,10);
        this.setState({
            pickupDate: date,
            dropoffDate: date
        });
    }

    setDefaultTime = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 3);
        const currentTime = currentDate.toTimeString().split(" ")[0];
        this.setState({
            pickupTime: currentTime,
            dropoffTime: currentTime
        })
    }

    pickupDateChange = event => {
        const date = event.target.value;
        this.setState({
            pickupDate: date
        });
    }

    dropoffDateChange = event => {
        const date = event.target.value;
        this.setState({
            dropoffDate:date
        });
    }

    pickupTimeChange = event => {
        const time = event.target.value;
        this.setState({
            pickupTime: time
        });
    }

    dropoffTimeChange = event => {
        const time = event.target.value;
        this.setState({
            dropoffTime: time
        });
    }
    render(){
        
    
        return(
            <div className="date">
                
                <div className="row">
               <h3>{this.props.nama}</h3>
    
                    <label>
                        Tanggal Sewa
                        <input
                            className="input"
                            type="date"
                            value={this.state.pickupDate}
                            onChange={this.pickupDateChange}
                        />
                    
                  
                    </label>
                        <input
                            className="input"
                            type="time"
                            value={this.state.pickupTime}
                            onChange={this.pickupTimeChange}
                        />
                    <label>
                        Sampai Tanggal
                        <input
                            className="input"
                            type="date"
                            value={this.state.dropoffDate}
                            onChange={this.dropoffDateChange}
                        />
                    </label>
                        <input
                            className="input"
                            type="time"
                            value={this.state.dropoffTime}
                            onChange={this.dropoffTimeChange}
                        />
                    
                    <button class="btn orange" type="button" onClick={ () => {
                        this.props.setProgress(3);
                        this.props.setTime(this.state.pickupDate);
                        this.props.setSampai(this.state.dropoffDate);
                        
                    }}>
                            <span>Pilih Mobil</span>
                    </button>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    setProgress: (payload) => dispatch(setProgresss(payload)),
    setTime: (payload) => dispatch(setTime(payload)),
    setSampai: (payload) =>dispatch(setSampai(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Tgl);