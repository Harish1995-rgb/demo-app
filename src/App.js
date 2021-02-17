import React, { Component } from 'react';
import './App.css';
import Card from './components/cards/cards';
import Table from './components/table/table';
import Grid from './components/grids/grids'
import LinearProgress from '@material-ui/core/LinearProgress';

class App extends Component {
  constructor(props) {
    super(props);
          this.state = {
            isDataLoading:false,
            listDataFromChild: [{TableHeader:'TableData'}]
    };    
}

myProgress = (state) =>{
  if(this.state.isDataLoading!=false)
  this.setState({
    isDataLoading:state
  })
}
    myCallback = (dataFromChild) => {   //callBackFunction
      
    this.setState({ listDataFromChild: dataFromChild, isDataLoading:true });
    console.log(Object.keys(dataFromChild))
}

  render() {
    return (
      <React.Fragment>
        <Card callbackFromParent={this.myCallback} myProgress={this.myProgress}/>
        {this.state.isDataLoading&&<LinearProgress/>}
        <Table tableData={this.state.listDataFromChild} myProgress={this.myProgress}/>
        <Grid />
      </React.Fragment>
    );
  }
}

export default App; 