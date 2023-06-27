import React from 'react'

export default function dateForm( theDate = null ) {
  
    const nowDate = new Date();

    if ( theDate == null ){
        theDate = new Date()
    }else{
        theDate = new Date( theDate )
    }
    const obj = {}
    obj.now = ()=>{
        return new Date()
    }
    
    obj.startOfDay = ()=>{
        theDate.setHours(0,0,0,0)
        return theDate;
    }

    obj.finishOfDay = ()=>{
        theDate.setHours(23,59,59,999)
        return theDate;
    }
    
    obj.firstDayOfWeek = ()=>{
        theDate.setDate( theDate.getDate() - (theDate.getDay() -1) )
        theDate.setHours(0,0,0,0)
        return theDate;
    }

    obj.lastDayOfWeek = ()=>{
        theDate.setDate( theDate.getDate() + (7 - theDate.getDay() ) )
        theDate.setHours(23,59,59,999)
        return theDate;
    }

    obj.firstDayOfMonth = ()=>{
        theDate.setDate(1)
        theDate.setHours(0,0,0,0)
        return theDate
    }

    obj.lastDayOfMonth = ()=>{
        theDate.setMonth( theDate.getMonth() + 1 )
        theDate.setDate(0)
        theDate.setHours(23,59,59,999)
        return theDate;
    }

    obj.getMonth = ()=>{
        return theDate.getMonth()+1;
    }

    obj.getDate = ()=>{
        return theDate.getDate();
    }

    obj.getFullYear = ()=>{
        return theDate.getFullYear();
    }
    
    obj.toString = ()=>{
        return `${theDate.getFullYear()}-${theDate.getMonth()+1}-${theDate.getDate()} ${theDate.getHours()}:${theDate.getMinutes()}:${theDate.getSeconds()}`
    }

    return obj;
}
