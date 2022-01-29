
import { useEffect, useState } from "react"
import Image from "next/image"

const division_fraction_end_with_9 = () =>  {
    const getrandomInt = (min, max) => {
        const r = Math.floor((Math.random() * max) + min)
        return parseInt(r)
    }
    // let temp = randomIntUnitDigit10(1,20)
    let temp1 = getrandomInt(1,9)
    const [x, setX] = useState(getrandomInt(1,9));
    const [y, setY] = useState((temp1*10)+9)
    const [ans, setans] = useState('');

    const handleChange=(e)=> {    
        setans(e.target.value) 
     }

    useEffect(() => {
        setans('')
    }, [])

    const getdigit8=(flnum1)=> {
        let flnum = flnum1.toString();
        let num = flnum.split('.')
        let deci;
        if(num.length > 0){
            if(num[1].length > 8){
                deci = num[1].substring(0,8);  
            } 
            else {
                deci = num[1];  
            }
        }
        return parseFloat(flnum[0]+"." + deci);
    }
    const getAnswer=()=> {
        let finalnumber = getdigit8(ans);
        let actualAns = getdigit8((x/y));
        if (actualAns === finalnumber){
            document.getElementById('answer').classList.add('greenBorder')
            setTimeout(()=>{
                document.getElementById('answer').classList.remove('greenBorder')
                temp1 = getrandomInt(1,9)
                setX(getrandomInt(1,9))
                setY((temp1*10)+9)
                setans('')
            },2000)

            

            
            
        }

    }

    return (
        <>
        <div className="container mt-3 text-center" id="middlecontent">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Fraction Division Denominator ending with 9</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <h2 id="question">{`${x} / ${y}`}</h2>
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
        </div> 

            
        </>
    )
}

export default division_fraction_end_with_9



