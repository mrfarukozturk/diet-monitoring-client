import React, {useState, useEffect, useRef, useContext} from 'react'
import Icons from '../../Icons'
import measurementService from '../../../services/measurementsService';
import dateForm from '../../../services/dateForm';
import { UserContext } from '../../../contexts/UserContext'

export default function MeasurementRow( { client, measurements, getMeasurements } ) {
  const {loginUser} = useContext(UserContext)

  const [ measurement, setMeasurement ] = useState( {...measurements, ...{ measurements : JSON.parse( measurements.measurements )}} );

  const updateMeasurement = async () => {
    try {
      await measurementService.updateMeasurement( { ...measurement , ...{ measurements : JSON.stringify( measurement.measurements )} } ) 
      getMeasurements()
    } catch (error) {
      console.log(error);
    }
  }

  const deleteMeasurement = async (measurementId) => {
    try {
      await measurementService.deleteMeasurement(measurementId) 
      getMeasurements();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    //console.log(measurement)
  }, [ measurement ]); 

  return (
    <tr className='create-form'>
      <td scope="row">        
        {dateForm(measurements?.measureAt).getDate()}.
        {dateForm(measurements?.measureAt).getMonth()}.
        {dateForm(measurements?.measureAt).getFullYear()}
      </td>
      <InputCell measurement= {measurement} setMeasurement = {setMeasurement} updateMeasurement = {updateMeasurement} type = "kilo"/>
      <InputCell measurement= {measurement} setMeasurement = {setMeasurement} updateMeasurement = {updateMeasurement} type = "hip"/>
      <InputCell measurement= {measurement} setMeasurement = {setMeasurement} updateMeasurement = {updateMeasurement} type = "waist"/>
      <InputCell measurement= {measurement} setMeasurement = {setMeasurement} updateMeasurement = {updateMeasurement} type = "navel"/>
      <td>
        {loginUser.role === "client" && <Icons onClick= {()=>deleteMeasurement( measurement.id)} icon="fa-solid fa-trash-can" className="ms-2 hover-yellow"/>}
      </td>
    </tr>
  )
}


function InputCell( props ) {
  const {loginUser} = useContext(UserContext)

  const [ isEdit, setIsEdit ] = useState( false );

  const deFocus = () =>{
    props.updateMeasurement()
    setIsEdit( false )
  }

  const setCellVall = ( val ) =>{

    props.setMeasurement( { ...props.measurement, ...{ measurements: {...props.measurement.measurements, ...{ [props.type]:val }}  }})

  }  

  return (
    <>
      <td onClick={()=>{ loginUser.role === "client" && setIsEdit( true ); }}>
        { 
        isEdit ? 
          <FInput 
              setIsEdit = {setIsEdit} 
              deFocus = {deFocus}
              setCellVall = {setCellVall}
          >
            {props.measurement.measurements[props.type]}

          </FInput> 

        : 
        
        props.measurement.measurements[props.type]
        
        }
      </td>
    </>
  )
}


function FInput(props) {

  const myRefname= useRef();

  useEffect(() => {
    myRefname.current.focus();
  }, []); 

  return (
    <input type="text" onChange={(e)=>props.setCellVall(e.target.value)} defaultValue={props.children}  ref={myRefname}  onBlur={()=>{ props.deFocus(); }} />
  )
}

