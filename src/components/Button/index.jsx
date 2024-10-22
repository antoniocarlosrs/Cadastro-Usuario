import PropTypes from 'prop-types'
import { Button } from './styles'

function DefaulButton({children, ...props}){

    return (
        <Button {...props}>{children}</Button>
    )
}

// Validações TropTypes
DefaulButton.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaulButton