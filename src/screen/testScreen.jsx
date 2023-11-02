import { useEffect, useState } from 'react';
import FooterComponent from '../components/footer.jsx'
import NavBar from '../components/navbar.jsx';
import fetchApi from '../utils/fetchApi.js';

function TestScreen() {
    const [count,setCount] = useState(0)
    const [data,setData] = useState()

    useEffect(() => {
        fetchApi({temp : 'people', id : 1}).then((response) => response.json()).then((data) => setData(data.results)).catch(error => console.log(error))
    },[])
    return (
        <>
            <NavBar/>
            <div className='bg-orange-50 flex flex-col text-black'>
                <h1>Test Screen 2</h1>      
            </div>
            <div className='flex justify-center'>
                <p className='text-white text-5xl'>Count Number : <span>{count}</span></p>
                <button onClick={(e) => {
                    e.preventDefault(),
                    setCount(count+1)
                }}>Increment</button>
                <button onClick={(e) => {
                    e.preventDefault(),
                    setCount(count-1)
                }}>Decrement</button>
            </div>
            <div>
                {data ? <>                
                {data.map((item,index) => {
                    return <p key={index}>{item.name}</p>
                })}
                </> : <></>}
                <p></p>
            </div>
            <FooterComponent/>
        </>
    )
}

export default TestScreen;