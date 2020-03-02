import React from 'react';
import Button from "@material-ui/core/Button";
import SignIn from "./SignIn";
import {addParam} from './store/actions';
import {connect} from "react-redux";
import SimpleTable from "./SimpleTable";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import * as paramTypes from './constants/paramTypes'

const mainDivStyle = {
  padding: '40px'
}

const types = paramTypes



function App({params, dispatch}) {
  const [paramType, setParamType] =React.useState('');
  const handleChange = event => {
    setParamType(event.target.value);
  };
  return (
    
    <div className="App" style = {mainDivStyle} >
        <h2 style ={{ left: '20px' }}>Добавление свойства</h2>

        <Button onClick={()=>{dispatch(addParam(99,'test','number',false))}}
              variant="contained"
              color = "primary">
              Добавить свойство
        </Button>
        <Button style ={{ left: '50px' }}
              variant="contained"
              color = "secondary">
              Вернуться
        </Button>        
        <TextField id="outlined-basic" label="Название" variant="outlined" />
        <TextField id="outlined-basic" label="ID" variant="outlined" />
        
        
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={paramType}
          onChange={handleChange}          
        >         
          {types.map(parType =>(
             <MenuItem value={parType}>{parType}</MenuItem>  
            )
          )}          
        </Select>
      

        <TextField id="outlined-basic" label="Обязательное" variant="outlined" />
        
        <SimpleTable />
    </div>




  );
}

const mapStateToProps = state =>{
    return {params: state}
}

export default connect(mapStateToProps)(App);

//export default App;
