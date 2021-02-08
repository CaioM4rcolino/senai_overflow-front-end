import { Chip } from "./style";

function Tag({value, handleClose}){
    return(
         <Chip>
            {value}
            <span onClick={handleClose}>&times;</span>
        </Chip>
    );
}

export default Tag;