import React from 'react'
import PropTypes from 'prop-types'

class BaseComponent extends React.Component {
  // this is the base component that has the store context available, you want to always extend all your components from Comp instead of React.Component to be able to render changes
}

BaseComponent.contextTypes = { store: PropTypes.object }

export default BaseComponent
