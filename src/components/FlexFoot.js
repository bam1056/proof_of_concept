// Higher order component example
import React from 'react'
import { withReflex } from 'reflexbox'
import { Footer } from 'rebass'

const FlexFoot = (props) => {
  return <Footer {...props} />
}

export default withReflex()(FlexFoot)
