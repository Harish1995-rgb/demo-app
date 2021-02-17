import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root:{
    backgroundColor:'#f3e5f5',
  },
  rows:{
    color:'white',
    '&:hover':{
      'box-shadow':'2px 2px 2px 2px #2979ff'
    }
  },
  progress:{
    display:'fixed'
  }
})

class Tables extends Component{
    constructor(props){
      super(props);
      this.state={
        recivedData:props.tableData,
      }
    }
    componentDidUpdate(){
      
    }
  //   getData = () => {
  //     axios({
  //         method: 'get',
  //         url: 'https://jsonplaceholder.typicode.com/users'
  //     }
  //     )
  //         .then(response => {
  //             this.setState({
  //               recivedData: response.data
  //             }
  //             )
  //              console.log(this.state.recivedData)
  //         }
  //         );
  // }


  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.tableData!=this.state.tableData  ){
      this.setState({
        recivedData:nextProps.tableData,
      })
  }
}
  
  

    componentDidMount() {
      
    }
  componentDidUpdate(prevProps,prevState){
      //  this.props.myProgress();
    
  }

    componentWillUnmount() {
      console.log('will mount')
  
    }
    renderRows=()=>{
      const {recivedData}=this.state;
      const {classes}=this.props; 
      return recivedData && recivedData.map(row => (
      <TableRow className = { classes.rows }>
         {Object.values(row).map(elem => <TableCell>{ elem }</TableCell>)}
      </TableRow>
    ))
  }
    render(){
        const {recivedData}=this.state;
        // debugger
        const {classes} = this.props;
        // debugger
      return(
        
        <TableContainer className= { classes.root }>

        <Table aria-label="simple table">
       

          <TableHead>
         
              <TableRow className = { classes.rows }>
            { 
            recivedData[0] && Object.keys(recivedData[0]).map(elem => ( 

                <TableCell>{ elem }</TableCell>
             ))}

            </TableRow>

            {/* <TableRow className = { classes.rows }>
            <TableCell>User Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Zipcode</TableCell>
            <TableCell>Website</TableCell>
            </TableRow> */}
          </TableHead>
         

          <TableBody >
            {this.renderRows()}
          </TableBody>
        </Table>
      </TableContainer>
      );
    }
  }
  export default withStyles(styles) (Tables);