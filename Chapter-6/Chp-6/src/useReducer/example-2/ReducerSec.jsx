import React, { useReducer } from 'react'

const fun = (state,action) => {
       switch(action.type){
        case 'fetch_data':
            return {...state,loading:true};
        case 'fetch_succful': 
            return{loading:false,error:null,data:action.payload};
        case 'fetch_error': 
            return{loading:false,error:action.payload}
        case 'remove':
            return {...state,data:state.data.filter((item) => {
                  return   (item.id !== action.payload);
            })} 
            
        case 'addData':
            return {...state,data:[...state.data,action.payload]}    

       }
}

const initial = {
    data:[],
    loading:false,
    error:null
}
const ReducerSec = () => {
    const [state,dispatch] = useReducer(fun,initial)

    const fetchData = async () => {
        try {
            dispatch({type:'fetch_data'})
            const responce = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await responce.json();
            dispatch({type:'fetch_succful',payload:data});
            console.log(data)
        } catch (error) {
           dispatch({type:'fetch_error',payload:error.message}); 
        }
    }

    const remove = (id) => {
        dispatch({type:'remove',payload:id})

    }

    const addData = (item) => {
       dispatch({type:'addData',payload:item})
    }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
       {state.loading && <h1>Loading....</h1>}
       {state.error && <h1>{state.error}</h1>}
       <ul>
       {
        state.data.map((el) => {
         return    <li key={el.id}>{el.name}
                    <button onClick={() => remove(el.id)} style={{marginLeft:'30px'}}>Remove Item</button>
                      </li>
                    
        })
       }
       </ul>
       <form onSubmit={(e) => {
            e.preventDefault();
            addData({
                id:Date.now(),
                name:e.target.title.value,
            })
       }}>
       <input type='text' name='title' placeholder='Enter Details' />
       <button type='submit'>Add Data</button>
       </form>

    </div>
  )
}

export default ReducerSec




