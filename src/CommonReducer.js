import axios from 'axios';
import { createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';




export const inputAction = (temperatureData,cityName,status)=>{

  
    return{
        type:'GET_INPUT',
        payLoadData:temperatureData,
        payloadCityName:cityName,
        isLoaded:status
        
    }
    
}

 const getDataAction = (temperatureData,cityName,status)=>{

    return{
        type:'GET_DATA_FROM_API',
        payloadCityName:cityName,
        payLoadData:temperatureData,
        isLoaded:status
    }

}




export function OnEnterChangeState(cityName){
    
    combineStore.dispatch(inputAction({},cityName,false))
}


export function getListFromServer(){
    console.log(combineStore.getState())
    return function(){
        axios.get("http://api.openweathermap.org/data/2.5/forecast?q="+combineStore.getState().payloadCityName+"&APPID=cc9f6f60e57645be41685af7d4cba1dc")
        .then(resp=>combineStore.dispatch(getDataAction(resp.data,'chennai',true)))

    }
}



export const CommonReducer = (state ={
    temperatureData:{},
    cityName:'',
    status:false
} , action) => {
    switch (action.type) {
        case 'GET_INPUT':
            return Object.assign({},action)
        case 'GET_DATA_FROM_API':
            return Object.assign({},action)
        default:
            return state
    }
}

let combineStore = createStore(CommonReducer,applyMiddleware(thunk));
export default combineStore;