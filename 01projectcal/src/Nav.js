export default function main(){
    return (
        <>
        <div className="main-div">
            <div className="calheader">
            <h3>Calculator</h3> 
            </div>
            <div className="header-box">
            <input placeholder="Enter Numbers" style={{width:300,height:30}}></input>
                <div className="header">
                    <h2>AC</h2>
                    <h2>Del</h2>
                    <h2>%</h2>
                    <h2>/</h2>
                    <h2>x</h2>
                    <h2>-</h2>
                    <h2>+</h2>
                </div>
            <div className="numbers">
                <p>9</p>
                <p>8</p>
                <p>7</p>
                <p>6</p>
                <p>5</p>
                <p>4</p>
                <p>3</p>
                <p>2</p>
                <p>1</p>
                <p>0</p>
                <p>.</p>
                <p>=</p>
            </div>
            </div>
        </div>
        </>
    )
}