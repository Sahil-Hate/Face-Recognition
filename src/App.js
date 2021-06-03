import './App.css';
import { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

//api ke liye key and declaring the app keyword
const app = new Clarifai.App({
  apiKey: '5363619953fd40d29a5c14475d826a87'
 });

 //Particles ke parameters
const particlesOption = {
  particles: {
    number:{
      value: 95,
      density:{
        enable: true,
        value_area: 750
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover:{
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable:true,
        mode: "push"
      }
    }
  }
}

// class App starts here
class App extends Component{
  constructor(){
    super()
    this.state ={
      input: '',
      imageURL: '',
      box: {},
      route: 'Signin'
    }
  }

  calculateFaceLocation = (data1) => {
    const coordinates = data1.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const height = Number(image.height);
    const width = Number(image.width);
    return{
      leftCol: coordinates.left_col * width,
      topRow: coordinates.top_row * height,
      rightCol: width - (coordinates.right_col* width),
      bottomRow: height - (coordinates.bottom_row*height)
    }
  }

  displayFaceBox = (box) =>{
    console.log(box);
    this.setState({box: box})
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () =>{
    this.setState({imageURL: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response))).catch(err => console.log(err));
  }

  onRouteChange = (route) =>{
    this.setState({route: route})
  }

  render(){
    return (
      <div className="App">
        <Particles className="particles"
              params={particlesOption}
            />
        <Navigation onRouteChange={this.onRouteChange}/>
        {
          this.state.route === 'home'
          ?<div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange = {this.onInputChange}  onSubmit = {this.onButtonSubmit}/>
            <FaceRecognition imageURL={this.state.imageURL} box={this.state.box}/>
          </div>
          :(
            this.state.route === 'Signin'
            ?<Signin onRouteChange={this.onRouteChange}/>
            :<Register onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }
  
}

export default App;
