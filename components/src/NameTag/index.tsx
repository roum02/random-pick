import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge, CloseButton} from 'react-bootstrap';

interface personProps {
    id: number;
    name: string;
}

interface NameTagProps {
    personInfo: personProps;
    onClick?: (id: number) => void;
}


const NameTag = ({personInfo, onClick}: NameTagProps) => {
    return (
        <Badge bg="light" text="dark">
            {personInfo.name} <CloseButton onClick={() => onClick(personInfo.id)}/>
        </Badge>
    )
}

export default NameTag;