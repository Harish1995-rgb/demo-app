import React, { Component } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios';

const styles = theme => ({
  root:{
    backgroundColor:'#84ffff',
  },
  card:{
    color:'#00695c',
    '&:hover':{
      boxShadow:'2px 2px 4px 4px gray'
    }
  }
})

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: [],
    }

  }
  getImageData = () => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/photos'
    }
    )
      .then(response => {
        this.setState({
          imageData: response.data
        }
        )
      }
      );
  }

  componentDidMount() {
    this.getImageData();
  }

  render() {
    const { imageData} = this.state;
    const { classes } =this.props;

    return (

      <div >
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          className = { classes.root }
        >
          {imageData.filter((elem, index) => index < 24).map((elem)=>{
              
            return <Grid item xs={12} sm={6} md={2} key={imageData.indexOf(elem)}>
              <Card className = { classes.card }>
                <CardHeader 
                subheader={"Alumb id: " + elem.albumId}/>
                <CardContent align='center'>
                 <img src={elem.thumbnailUrl}/>
                </CardContent>
                <Typography  gutterBottom align="center">
                  Image id { elem.id }
                </Typography>
              </Card>
            </Grid>
            
          })}
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles) (Cards);