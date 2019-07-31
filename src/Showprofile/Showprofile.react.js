import React from 'react';



class Showprofile extends React.Component {
    url = "http://api.openweathermap.org/data/2.5/forecast?q=Chennai"
    apiKey = "&APPID=cc9f6f60e57645be41685af7d4cba1dc"
    constructor(props) {
        super(props);
        this.state={
            profile:{
                loaded:false
            },
            
        }
    }
    this2(){
        fetch(this.url + this.apiKey).then(data=>data.json()).then(profile=>this.setState({profile:profile,loaded:true}));
        }
    componentDidMount(){

       this.this2();
    }
   
    render() {
        if (!this.state.loaded) {
            return (
                <div className="showprofile_wrapper">
                <h1>Loading...</h1>
    
                </div>)
           
            
        }else{
            
            return (
                <div className="showprofile_wrapper">
                <h1>{this.state.profile.list[2].main.temp}</h1>
    
                </div>)

        }
      
        ;
    }
}

export default Showprofile;