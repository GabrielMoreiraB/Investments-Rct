import './Investment.css'


const Investment = ({array}) => {
    let arrayOrgnized = array.sort((a,b)=> {
        let A = a.month;
        let B = b.month;
        if (A < B) {
            return -1;
        }
        if (A > B) {
            return 1;
        }
        return 0;
    })

    let totInv=(arrayOrgnized[(arrayOrgnized.length-1)].value - arrayOrgnized[0].value)


    let arrayPorcent = []
    for (let i = 0; i < arrayOrgnized.length; i++) {
        if(arrayOrgnized[i-1]){
            arrayPorcent.push((((arrayOrgnized[i].value / arrayOrgnized[i-1].value) - 1)*100).toFixed(2))
        }else {arrayPorcent.push(0.00)}
    }

    return ( 
    <div>
        <div className='rend'>Redinmento total de: <spam className={totInv>=0? 'green' : 'red'} >{totInv.toFixed(2)}</spam> </div>
        {arrayOrgnized.map((month, i) =>{ 
            return(
                <div key={i} className={`investment`}>
                <div className='infos'>
                    <div className="data">{month.month}/{month.year}</div>
                    <div className={`cash ${arrayPorcent[i]>=0? 'green' : 'red'}`}>{(month.value).toFixed(2)}</div>
                </div>
                <div className={`percent ${arrayPorcent[i]>=0? 'green' : 'red'}`}>{arrayPorcent[i]}%</div>
    
            </div>
        )})}
    </div> 
    );
}
 
export default Investment;