import React, { useState } from 'react'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const DropdownButton = ({textToDispay, type, onClickFunction}) => {

  const [isActive, setIsActive] = useState(false);

  const onClickHandler = () => {
    setIsActive(true);
  }

  return (
    <div className={isActive ? 'dropdown-button-active' : 'dropdown-button'} onClick={onClickHandler}>
        <div className='dropdown-button-text'>{textToDispay}</div>
        <ExpandMoreRoundedIcon className='dropdown-button-icon' fontSize='small'/>
    </div>
  )
}

export default DropdownButton