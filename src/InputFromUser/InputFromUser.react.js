import React from 'react';
import {connect} from 'react-redux';
import './InputFromUser.css';
import UserFields from '../UserFields/UserFields.react';
import {getListFromServer,OnEnterChangeState} from '../CommonReducer';


class InputFromUser extends React.Component {
    
   FilteredData={data:[]}
   isdataFiltered=''

    FilterData=()=>{
        
        var x=[];
        var z=[]
        this.props.temperatureData.list.filter((e)=>{

           var tempDateValue =new Date(e.dt_txt);
            if((z.indexOf(tempDateValue.getDay())) === -1 ){
                x.push(e.main)
                z+=[tempDateValue.getDay()]
              
            }
             return x;    
        })

        this.FilteredData = {x};
        console.log(this.FilteredData)
        this.isdataFiltered=true;
    }

  
    render() {
        if(!this.props.isLoaded){
            return (
           
                <div className='inputfromuser_wrapper'>
                    <div className="jumbotron">
                    <input  onChange={e=>this.props.getInput(e.target.value)}></input>
                    </div>
    <UserFields action={this.props.getData} status={this.isdataFiltered} data={this.FilteredData}></UserFields>
                </div>
            );
        }
        else{
            this.FilterData()
            return (
           
                <div className='inputfromuser_wrapper'>
                     <div className="jumbotron">
                    <input  onChange={e=>this.props.getInput(e.target.value)}></input>
                    </div>
            <UserFields  status={this.isdataFiltered} data={this.FilteredData}></UserFields>
                </div>
            );
        }
       
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.payloadCityName,
        temperatureData: state.payLoadData,
        isLoaded: state.isLoaded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => {
            dispatch(getListFromServer())
        },

       getInput:(cityName)=>{
        OnEnterChangeState(cityName)
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputFromUser)