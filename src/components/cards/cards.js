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
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: '#ff80ab'
  },
  card: {
    backgroundColor: "secondary",
    color: 'blue',
    '&:hover': {
      color: '#004d4',
      'box-shadow': '2px 2px 4px 4px #00b0ff'
    }
  },
  CardHeader: {
    color: 'red',
  }
})

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: { photos: [], comments: [], albums: [], todos: [] },
      // commentData: [],
      // albumsData: [],
      // todoData: [],
      data: [
        { data: 'Image Information', title: 'JOSN Placeholder', parameter: 'photos', fun: this.getImageData },
      { data: 'Comments Information', title: 'JOSN Placeholder', parameter: 'comments', fun: this.getImageData },
      { data: 'Albums Information', title: 'JOSN Placeholder', parameter: 'albums', fun: this.getImageData },
      { data: 'ToDo Information', title: 'JOSN Placeholder', parameter: 'todos', fun: this.getImageData },
      ],
    }

  }
  getImageData = (parameter) => {
    this.props.myProgress(true);
    axios({
      method: 'get',
      url: `https://jsonplaceholder.typicode.com/${parameter}`
    }
    )
      .then(response => {
        let newData = this.state.imageData;
        newData[parameter] = []
        newData[parameter].push(...response.data);
        this.setState({
          imageData: newData,
        }

        // ,()=>{
        //   this.props.callbackFromParent(response.data) //passing data to parent component by callBackFunction
        // }
        )
    this.props.myProgress(false);

        console.log("Image Data",this.state.imageData);
      }
      );
  }

  // getCommentData = () => {
  //   axios({
  //     method: 'get',
  //     url: 'https://jsonplaceholder.typicode.com/comments'
  //   }
  //   )
  //     .then(response => {
  //       this.setState({
  //         commentData: response.data,
  //       }
  //       )
  //     }
  //     );
  // }

  // getAlbumsData = () => {
  //   axios({
  //     method: 'get',
  //     url: 'https://jsonplaceholder.typicode.com/albums'
  //   }
  //   )
  //     .then(response => {
  //       this.setState({
  //         albumsData: response.data,
  //       }
  //       )
  //     }
  //     );
  // }

  // getToDoData = () => {
  //   axios({
  //     method: 'get',
  //     url: 'https://jsonplaceholder.typicode.com/todos'
  //   }
  //   )
  //     .then(response => {
  //       this.setState({
  //         todoData: response.data,
  //       }
  //       )
  //     }
  //     );
  // }


  componentDidMount() {
    {this.state.data.map(value => 
      this.getImageData(value.parameter));}
    // this.getCommentData();
    // this.getAlbumsData();
    // this.getToDoData();
  }

  render() {
    const { imageData,  data } = this.state;
    const { classes } = this.props;
    // debugger


    return (
      <div className={classes.root} >
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          fun={this.state}
        >
          {data.map(elem => (
            <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)} 
            onClick={() => elem.fun(elem.parameter)} 
            onClick={() => this.props.callbackFromParent(this.state.imageData[elem.parameter])}
            >
              <Card className={classes.card}>
                <CardHeader
                  title={elem.data}
                  subheader={elem.title}
                />
                <CardContent>
                  <Typography variant="h3" gutterBottom >
                    {imageData[elem.parameter].length}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Cards);