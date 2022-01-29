
import { useEffect, useState } from "react"
import Image from "next/image"

const ekadiken_purven = () =>  {
    const randomIntUnitDigit10 = (min, max) => {
        const r = Math.floor((Math.random() * max) + min)
        return parseInt(r)
    }
    let temp = randomIntUnitDigit10(1,20)
    let temp1 = randomIntUnitDigit10(1,9)
    const [x, setX] = useState(temp.toString() + temp1.toString());
    const [y, setY] = useState(temp.toString()+(10- temp1).toString())
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
                temp = randomIntUnitDigit10(1,20)
                temp1 = randomIntUnitDigit10(1,9)
                setX(temp.toString() + temp1.toString())
                setY(temp.toString()+(10- temp1).toString())
                setans('')
            },2000)

            

            
            
        }

    }

    return (
        <>
        <div className="container mt-3 text-center" id="middlecontent">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Unit Digit sum 10 and remaining number same</h2>
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
                        <Image src="/img/unit_sum_10.jpg" alt="Avatar Logo"  className="rounded-pill" width="500" height="300"/>
                    </div>
                </div>
        </div> 

            
        </>
    )
}

export default ekadiken_purven



