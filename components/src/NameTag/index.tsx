import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge, CloseButton} from 'react-bootstrap';


interface NameTagProps {
    name: string
    onClick?: () => void;
}


const NameTag = ({name, onClick}: NameTagProps) => {
    return (
        <Badge bg="light" text="dark">
            {name} <CloseButton onClick={onClick}/>
        </Badge>
    )
}

export default NameTag;