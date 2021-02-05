import { Chip } from "./style";

function Tag({value}){
    return(
         <Chip>
            {value}
            <span>&times;</span>
        </Chip>
    );
}

export default Tag;