
import { useEffect, useState } from "react"
import Image from "next/image"

const square_end_5 = () =>  {
    const randomIntSquareEnd5 = (min, max) => {
        const r = Math.floor((Math.random() * max) + min)
        if (r%2 == 0){
            r = r+1
        }
        return parseInt(r)*5
    }
    const [x, setX] = useState(randomIntSquareEnd5(2,19));
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
        if ((x * x) === parseInt(ans)){
            document.getElementById('answer').classList.add('greenBorder')
            setTimeout(()=>{
                document.getElementById('answer').classList.remove('greenBorder')
                setX(randomIntSquareEnd5(2,19))
                setans('')
            },2000)

            

            
            
        }

    }

    return (
        <>
        <div className="container mt-3 text-center" id="middlecontent">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Square of numbers ending with 5</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <h2 id="question">{`${x} x ${x}`}</h2>
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
                        <Image src="/img/unit_sum_10.jpg" alt="Avatar Logo"  className="rounded-pill" width="596" height="426"/>
                    </div>
                </div>
        </div> 

            
        </>
    )
}

export default square_end_5



