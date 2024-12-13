import React, { Component} from 'react';

class Expand extends Component {
state ={
  isOpen: false, 
}
toggleContent = () => {
  this.setState((prevState) => ({
    isOpen: !prevState.isOpen, 
  }));
};
  render(){
    const { title, children } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn"
            onClick={this.toggleContent} >
            <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
          </button>
        </div>
        {isOpen && <div className="expand__content">{children}</div>}
      </div>
    );
  }
}


export default Expand;