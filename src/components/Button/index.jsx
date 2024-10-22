import PropTypes from 'prop-types'
import { Button } from './styles'

function DefaulButton({children, theme, ...props}){

    return (
        <Button {...props} theme={theme} >{children}</Button>
    )
}

// Validações TropTypes
DefaulButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaulButton