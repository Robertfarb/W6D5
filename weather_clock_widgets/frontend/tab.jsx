import React from 'react';

class Tab extends React.Component{
  constructor(info){
    super();
    this.state = {
      index: 0,
      info: info
    };

  }
  render(){
    return (
      <div className="tab-container">
        <ul className="tab-list">
          {this.props.tabInfo.map(tab => <h3 className="tab-header">{tab.title}</h3>)}
        </ul>
      </div>
    );
  }


}

export default Tab;
