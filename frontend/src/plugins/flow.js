import React from 'react';
import PropTypes from "prop-types";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

class Flow extends React.Component {
    render() {
        return(
            <li className={this.props.isActive ? 'active' : 'inActive'}>
                <div className='a'>
                    <div className="circle">
                        <h3 className="num">
                        {
                            this.props.isCompleted
                            ?
                            <CheckCircleOutlineIcon  />
                            :
                            this.props.flowNumber
                        }
                        </h3>
                    </div>
                    <h3 className='title'>{this.props.title}</h3>
                </div>
            </li>
        )
    }
}

Flow.propTypes = {
    flowNumber: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
};

export default Flow;