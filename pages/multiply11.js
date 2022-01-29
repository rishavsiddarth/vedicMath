
import { useEffect, useState } from "react"
import Image from "next/image"

const multiply11 = () =>  {
    const randomIntMultiply11 = (min, max) => {
        const r = Math.floor((Math.random() * max) + min)
        console.log(r)
        return parseInt('1'.repeat(r))
    }
    const [x, setX] = useState(Math.floor((Math.random() * 500) + 1));
    const [y, setY] = useState(randomIntMultiply11(1,3));
    const [ans, setans] = useState('');

    const handleChange=(e)=> {    
        setans(e.target.value) 
     }

    useEffect(() => {
        // document.getElementById('answer').value = '';
        setans('')
    }, [])
    
    const getAnswer=()=> {
        console.log(ans)
        if ((x * y) === parseInt(ans)){
            document.getElementById('answer').classList.add('greenBorder')
            setTimeout(()=>{
                document.getElementById('answer').classList.remove('greenBorder')
                setX(Math.floor((Math.random() * 500) + 1))
                setY(randomIntMultiply11(1,3))
                setans('')
            },2000)

            

            
            
        }

    }

    return (
        <>
        <div className="container mt-3 text-center" id="middlecontent">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Multiplied by 111...</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <h2 id="question">{`${x} x ${y}`}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <input id="answer" className="form-control answer" value={ans} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-12">
                        <button className="form-control btn-primary" onClick={getAnswer}>NEXT</button>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-12">
                        <Image src="/img/11.jpg" alt="Avatar Logo"  className="rounded-pill" width="1200" height="350"/>
                    </div>
                </div>
        </div> 

            
        </>
    )
}

export default multiply11



