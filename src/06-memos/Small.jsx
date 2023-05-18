import React from 'react'

//memo cuando es muy grande el app
//solo se redibuja cuando cambia el value
export const Small = React.memo(({ value }) => {
    console.log("rebuild")
  return (
    <small>{value}</small>
  )
}
)
