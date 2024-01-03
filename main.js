
const root = ReactDOM.createRoot( document.getElementById('root'));
root.render(<App/>)


function Counter() {
    return (
        <div className="counter">
            <button>+</button>
            <h2>0</h2>
            <button>-</button>
            <button>C</button>
            <button>X</button>
        </div>
    )
}
function SumInfo(props){
    const styles = {
        // color : "blue",
        // fontSize : "40px"
        color : props.color,
        fontSize : props.Size==='bog'? '50px' : '40px'
    }
    return(
        <div className='suminfo'>
            {/*<h1 style={styles}>Sum = 0</h1> */}
            <h1 style={ { color: props.color, fontSize: '50px'}}>Sum = 0</h1>
        </div>
    )
}
function AddCounter(){
   
    return(
        <div className='addCounter'>
            {/*<h1 style={styles}>Sum = 0</h1> */}
            <button>Add Couter</button>
        </div>
    )
}


function App(){
    return(
        <div className='app'>
        
            <h1 className="title">Today : {(new Date()).toDateString()}</h1><br />
           
            <SumInfo  color="blue" Size="big"/>
            <AddCounter/>
            <Counter/>
        </div>
    )
}


