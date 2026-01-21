import './inputLabel.css';

import eyeOpen from '../../../../assets/svgs/eye-svgrepo-com.svg';
import eyeClosed from '../../../../assets/svgs/eye-closed-svgrepo-com.svg'

import { useState } from 'react';

export default function InputLabel({type, width, title, placeholder, maxLength=15}){
    const [theType, setType] = useState(type);

    return(
        <div className="inputLabel" style={{width}}>
            <label style={{fontWeight: 500, textIndent: 10}}> {title} </label>
            <input 
                type={theType} 
                style={{width: '100%', height: '100%'}} 
                className='inptLbl'
                placeholder={placeholder}
                maxLength={maxLength}
                required
            />
            {type == 'password' && (
                <button 
                    className='showPass'
                    onClick={() => {
                        if(theType == 'password'){
                            setType('text');
                        }else{
                            setType('password');
                        }
                    }}
                >
                    {theType == 'text' && (
                        <img src={eyeOpen} style={{height: '30px'}}/>
                    )}

                    {theType == 'password' && (
                        <img src={eyeClosed} style={{height: '30px'}}/>
                    )}
                </button>
            )}
        </div>
    );
}