import React from 'react'

export default function DateView({children}) {

    const now = Date.now()
    const dateMilliseconds = new Date(children).getTime()
    const passingTime = now - dateMilliseconds;
    const diff = {};

    diff.seconds = Math.floor(passingTime / 1000);
    diff.minutes = Math.floor(diff.seconds / 60);
    diff.hours   = Math.floor(diff.minutes / 60);
    diff.days    = Math.floor(diff.hours / 24);
    diff.months  = Math.floor(diff.days / 30);
    diff.years   = Math.floor(diff.days / 365);
    
    diff.seconds %= 60;
    diff.minutes %= 60;
    diff.hours %= 24;
    diff.days %= 30;
    diff.months %= 12;
    
    let text = [];
    if ( diff.years !== 0 ) {
      text.push( `${diff.years} years` )
    }

    if ( diff.months !== 0 ) {
      text.push( `${diff.months} months` )
    }
    
    if ( diff.days !== 0 ) {
      text.push( `${diff.days} days` )
    }

    if ( diff.hours !== 0 ) {
      text.push( `${diff.hours} hours` )
    }

    if ( diff.minutes !== 0 ) {
      text.push( `${diff.minutes} minutes` )
    }
    //a few seconds ago
    //console.log(text.length)

  return (
    <>
    { text.length > 0 && `${text.slice(0, 2).join( " " )} ago.` }
    { text.length == 0 && `A few seconds ago.` }
    </>
  )
}
