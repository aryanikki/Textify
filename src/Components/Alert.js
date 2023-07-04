import React from 'react'

function Alert(props) {
    const capitalize =(word)=>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
     props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {/*this "propss.alert && " syntax means if props.alert is null the statements after && are not evaluated or if it is null
        it will return those statements*/}
       <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
</div>
  )
}

export default Alert


