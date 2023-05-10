import './Investments.css'
import {allInvestments} from '../../investments-2023'
import Investment from '../Investment'
import { useState } from 'react'



const investments = ({title, id}) => {

    const arrayInvest =allInvestments.reports.filter(invest =>invest.investmentId== id)
    /* console.log(arrayInvest) */


    return ( 
    <div className="investiments">
        <h3>{title}</h3>
        <Investment 
        array={arrayInvest}/>
    </div> 
    );
}
 
export default investments;