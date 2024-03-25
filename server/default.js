
import {data} from './constants/data.js';
import News from './model/news-schema.js'

const DefaultData=async()=>{
    try{
        await News.insertMany(data);
        console.log('Data imported succesfully');
    }catch(error){
        console.log('Error', error.message);
    }
}

export default DefaultData;