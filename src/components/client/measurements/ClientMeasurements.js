import React, {useState, useEffect, useContext} from 'react'
import Icons from '../../Icons'
import { useOutletContext } from 'react-router-dom'
import MeasurementRow from './MeasurementRow'
import measurementsService from '../../../services/measurementsService'
import dateForm from '../../../services/dateForm';
import { UserContext } from '../../../contexts/UserContext'

export default function ClientMeasurements() {
  const {loginUser} = useContext(UserContext)

  const {client} = useOutletContext();


  const [measurements, setMeasurements] = useState([]);
  const [order,setOrder] = useState('asc')

  const getMeasurements = async () => {
    const measurements = await measurementsService.getMeasurementsByClientId( client.id );
    setMeasurements(measurements)
  }
  
  const createMeasurement = async () => {

    const measurements = await measurementsService.createMeasurement( { 
      clientId:client.id,
      measurements:"{}", 
      createdAt:dateForm().toString(), 
      measureAt:dateForm().toString(),
    
    } );
    getMeasurements()
  }

  useEffect(() => {
    getMeasurements()
  }, []);
  
  return (
    <div className="card client-tabs measurements">
      <div className="card-header">
        <Icons icon="fa-solid fa-clock-rotate-left" /> Measurements
      </div>
      <div className="card-body">
        <table className="table">
          { loginUser.role === "client" && <caption className='new-measurements' onClick={()=>{ createMeasurement(); }}>+ New Measurements</caption>}
          <thead>
            <tr>
              <td>Date</td>
              <td>Kilo</td>
              <td>Hip</td>
              <td>Waist</td>
              <td>Navel</td>
              <td></td>
            </tr>
          </thead>
          <tbody>

            {measurements.length > 0 ? measurements.map((measurement) => (

              <MeasurementRow client={client} key={measurement.id} measurements = {measurement} getMeasurements= { getMeasurements }/>
            )):
              <tr>
                <td colSpan={6}>
                  <h6 className='text-warning'>No measurements yet!</h6>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
