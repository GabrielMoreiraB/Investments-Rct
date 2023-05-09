import './Investments.css'
import {allInvestments} from '../../investments-2023'


const investments = ({title, id}) => {

    const arrayInvest =allInvestments.reports.filter(invest =>invest.investmentId== id)
    console.log(arrayInvest)


    return ( 
    <div className="investiments">
        <h3>{title}</h3>
        <div className='rend'>Redinmento total de</div>
        <span>{id}</span>
    </div> 
    );
}
 
export default investments;