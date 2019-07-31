import React from 'react';



class ApiFetchDataCall extends React.Component {
    
    apiURL = "http://api.openweathermap.org/data/2.5/forecast?q="   //APIURL
    apiKEY = "&APPID=cc9f6f60e57645be41685af7d4cba1dc"  //APIKEY
    constructor(props) {
        super(props);
        this.state = {
            temperatureData:{
                loaded:false,  //CHECK FOR LOADED DATA
            },
            cityName:"",
              
        }
    }


     onClickSubmit=()=>{
         
        fetch(this.apiURL + this.state.cityName +this.apiKEY).then(data=>data.json())
        .then(temperatureData=>this.setState({temperatureData:temperatureData,loaded:true}));
     }
     onChangeofInputField =(event)=>{
       this.setState({cityName: event.target.value})
     }


    render() {


       if(!this.state.loaded){
        return (
            <div >
                    <input onChange={this.onChangeofInputField} placeholder="ENTER VALUE HERE" value={this.state.cityName}></input>
                    <button onClick={this.onClickSubmit}>Search</button>      
            </div>
        );
       }
       else{
        return (
            <div >
                    
                   <h2> {this.state.temperatureData.city.id}</h2>
            </div>
        );
       }
    }
}

export default ApiFetchDataCall;