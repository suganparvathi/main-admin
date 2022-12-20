import { Bar } from "react-chartjs-2"; 
import { Link } from 'react-router-dom'
import {Chart,LinearScale,CategoryScale,BarElement} from 'chart.js';
Chart.register(
    LinearScale,CategoryScale,BarElement 
)

const labels =['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
 
const options ={
    Plugins:{
        legend:{
            position:'top'
        },
        title:{
            display:true,
            text:"Expense Tracker"
        }
    }
}
const data = {
    labels,
    datasets: [ 
        {
            label: 'Expenditure',
            data : [1500,12000,12000,14000,1000,11000,17000],
            backgroundColor:'#24D199',
            color :'black'
        },
        {
            label: 'profit',
            data: [21000,22000,23000,24000,25000,26000,27000],
            backgroundColor:'#7338E2'  
        }
    ]
}

function MonthlyChart(){
    return(
        <div style={{'height':300, 'width':500,'margin':'auto',}}>
            <Bar data ={data} />
        </div>
    )
} 
export default MonthlyChart;