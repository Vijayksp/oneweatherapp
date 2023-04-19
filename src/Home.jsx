import {useState,useEffect} from 'react';
import axios from 'axios';



const Home=()=>{
    const[city,setCity]=useState("");
    const[data,SetData]=useState([]);
    const[text,setText]=useState("");
    const[records,SetRecords]=useState([]);

    const key ='ecdf0d3a10c430f1a90e79bdb3cace1a';

    const handleAdd=()=>
    {

        
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        axios.get(url)
        .then(response=> {          
            console.log(response.data)
            const rcds=[...data];
            rcds.push(response.data);
            SetData(rcds);
            setCity("");

            const i=response.data.id;

        })
        .catch(error=> {         
            console.log(error);
        });



      


       
    }
    // console.log("data",data);

// -------------------------------------------------------------------------------------------

    useEffect(()=>
    {
        axios.post("https://6415691f0412de6d0f922113.mockapi.io/api/user/database",
        {
            data
        })
        .then((response) =>
        {           
            SetRecords(response.data);
            setText("Record Has been Added!!");
            console.log("from useeffect")
            console.log(records);
        })
        .catch((error) =>
        {            
            console.log(error);
        });   

       
    },[])

// --------------------------------------------------------------------------------------------


    const handleDel=(i)=>{
        const rcds=[...data];
        rcds.splice(i,1);
        SetData(rcds);
    }


    return(
    <>
        
        <div className="inputcity">
            
         &nbsp;&nbsp; <input type="text" className='input01' placeholder='Enter City Name...' value={city} onChange={(e)=>setCity(e.target.value)} />
            <input type="button" className='input02' value="Add" title='Click here to fetch Weather' onClick={handleAdd} /> <hr />
            
        </div>

            {
                data.map(row =>
                    {          
                        const icon= row.weather[0].icon;
                        const iconUrl=`https://openweathermap.org/img/wn/${icon}@4x.png`;
                        
                        // console.log(row.name);               
                        return(
                        
                            <div key={row.id} className="box">
                         <div className="parentc">
                                <div className="h2cls">             
                                            <h2>City:&nbsp;&nbsp;{row.name}</h2>
                                            <img src={iconUrl} alt={row.id} /> <br /><br />
                                </div>
                                <p>
                                Description: &nbsp;&nbsp; {row.weather[0].description}<br /><br />
                                Temperature: &nbsp;&nbsp; {row.main.temp}°c<br /><br />
                                {/* Pressure: &nbsp;&nbsp; {row.main.temp}°c<br /><br /> */}



                                Wind: &nbsp;&nbsp; {row.wind.speed}Km/h<br /><br />                                    
                                </p>
                         </div>
                            <input type="button" className='input03' title='Tap to close the box' value="X" onClick={()=>handleDel()} />
                                

                            </div>

                    )}
                )
            }

    </>)
}

export default Home;