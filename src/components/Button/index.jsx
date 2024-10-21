import { Button } from './styles'

function DefaulButton({children, ...props}){

    return (
        <Button {...props}>{children}</Button>
    )
}

export default DefaulButton