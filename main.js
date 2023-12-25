const root = ReactDOM.createRoot(document.getElementById('root'));
let count = 0;

function App() {
    return (
        <div>
            <Sumcount />
            <Addcounter/>
            <Counter />
        </div>
    );
}

function Sumcount(){
    return(
        <div className="sumcount">
            <h1 id="sum">Sum = 0</h1>
        </div>
    )
}
function Addcounter(){
    return(
        <div className="sumcount">
            <button>Addcounter</button>
        </div>
    )
}
function Counter(){
    return(
        <div className="counter">
            <button onClick={buttonplusClick}>+</button>
            <h2 id="num">{0}</h2>
            <button onClick={buttondeleteClick}>-</button>
            <button onClick={buttonclearClick}>0</button>
            <button>X</button>
        </div>
    )
}

function buttonplusClick(){
    count +=1;
    document.getElementById('num').innerHTML = count;
}

function buttondeleteClick(){
    count -=1;
    if(count < 0){
        count = 0;
    }
    document.getElementById('num').innerHTML = count;
}
function buttonclearClick(){
    if(count > 0){
        count = 0;
    }
    document.getElementById('num').innerHTML = count;
}


root.render(<App />);

