
import { Button} from "@mui/material";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';



const ButtonNew = props => {
 
   
    const{id,isDisabled,type,bcolor,size,isStart,isEnd,value,variant}=props

  return (
   
    <Button
      id={id}
      type={type}
      disabled={isDisabled}
      variant={variant}
      color={bcolor}
          size={size}
          startIcon={isStart ?<LocalGroceryStoreIcon/>:<></>}
      endIcon={isEnd ? <LocalGroceryStoreIcon /> : <></>}
      >
          
          {value}
          
      </Button>
     
  );
};

Button.defaultProps = {
  type: "button",
  isEnd: false,
  isStart: false,
  isDisabled: false
};

export default ButtonNew;

