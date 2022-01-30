
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

const square_end_5 = () =>  {
    const randomIntSquareEnd5 = (min, max) => {
        let r = Math.floor((Math.random() * max) + min)
        if (r%2 == 0){
            r = r+1
        }
        return parseInt(r)*5
    }
    const [x, setX] = useState(randomIntSquareEnd5(2,19));
    const [ans, setans] = useState('');
    const [qno, setqno] = useState(1);

    const [timerOn, settimerOn] = useState(false);
    const [timerTime, settimerTime] = useState(1);
    const [btnName, setbtnName] = useState('NEXT');
    const totalQues = 3;
    const Ref = useRef(null)

    const startTimer = (currentDate) => {
        settimerOn(true)
        if(Ref.current) clearInterval(Ref.current)
        const timerId = setInterval(() => {
            settimerTime(Date.now() - currentDate)
        }, 1000);
        Ref.current = timerId
      };

    const stopTimer = () => {
        console.log("stop timer called");
        settimerOn(false)
        clearInterval(Ref.current)
      };


    const handleChange=(e)=> {    
        setans(e.target.value) 
        document.getElementById('answer').classList.remove('greenBorder','redBorder')
     }

    useEffect(() => {
        setans('')
        startTimer(Date.now())
    }, [])


    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  
    
    const getAnswer=()=> {
        console.log(ans)

        const element = document.getElementById('answer')
        if ((x * x) === parseInt(ans)){
            element.classList.add('greenBorder')
            setTimeout(()=>{
                if((qno + 1) <= totalQues){
                    
                    setX(randomIntSquareEnd5(2,19))
                    setans('')
                    setqno(qno + 1)
                    element.classList.remove('greenBorder')
                    if((qno + 1) == totalQues){
                        setbtnName('SUBMIT')
                    }
                    element.focus()
                } else {
                    stopTimer()
                    setbtnName('SUBMITTED')
                    //Final submission logic
                    console.log(Math.floor(timerTime/1000));
                    // TIMESTAMP
                    // NO OF QUESTIONS
                    // TIME TAKEN
                    // CATEGORY OF QUESTION
                }
                
            },1000)
   
        } else {
            element.classList.add('redBorder')
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
                <div className="row">
                    <div className="col-sm-12 ">
                    <div className="h2" style={{float:"left"}}>{qno}/{totalQues}</div>
                    <div className="h2" style={{float:"right"}}>{minutes} : {seconds}</div>
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
                        <button className="form-control btn-primary" onClick={getAnswer}>{btnName}</button>
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



