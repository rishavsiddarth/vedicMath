
import { useEffect, useState } from "react"

const tablequiz = () =>  {
    const [x, setX] = useState(Math.floor((Math.random() * 20) + 1));
    const [y, setY] = useState(Math.floor((Math.random() * 10) + 1));
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
                setX(Math.floor((Math.random() * 20) + 1))
                setY(Math.floor((Math.random() * 10) + 1))
                setans('')
            },2000)

            

            
            
        }

    }

    return (
        <>
        <div className="container mt-3 text-center" id="middlecontent">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Quiz</h2>
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
        </div> 

            
        </>
    )
}

export default tablequiz



