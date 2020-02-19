import React from 'react';
import Button from "@material-ui/core/Button";
import SignIn from "./SignIn";
import {addParam} from './store/actions';
import {connect} from "react-redux";
import SimpleTable from "./SimpleTable";
import TextField from "@material-ui/core/TextField";
//import {params} from "./store/reducers";

function App({params, dispatch}) {
  return (
    <div className="App">
        <div align={"center"}>

      <Button onClick={()=>{dispatch(addParam(99,'test','number',false))}}
          variant="contained"
          color = "primary">
          Add param
      </Button>

      <TextField id="outlined-basic" label="ID" variant="outlined" />
      <TextField id="outlined-basic" label="Название" variant="outlined" />
      <TextField id="outlined-basic" label="Тип" variant="outlined" />
      <TextField id="outlined-basic" label="Обязательное" variant="outlined" />
      </div>
      <SimpleTable />
    </div>




  );
}

const mapStateToProps = state =>{
    return {params: state}
}

export default connect(mapStateToProps)(App);

//export default App;
