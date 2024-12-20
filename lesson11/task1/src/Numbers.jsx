import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Numbers extends PureComponent{
    render(){
        return(
         
            <div className="number">
            <span className="number__title">{this.props.title}</span>
            <span className="number__value">{this.props.number}</span>
          </div>
        
        )
    }
};
Numbers.propTypes = {
    title: PropTypes.string,
    number: PropTypes.number.isRequired,
};

Number.defaultProps = {
    tytle: 'Some number',
}

export default Numbers;