
import React,{Component} from "react";
import http from "./httpService.js";
class Input extends Component
{   state=
    {   name:"",
        error:"",
    }
    handleChange=(e)=>
    {   const {currentTarget:input}=e;
        let s1={...this.state};
        s1.name=input.value;
        this.setState(s1);
    }
    async postData(url)
    {   try{   
          let response=await http.get(url);
          let {data}=response;
          window.alert(data.message);
        }
        catch(ex){
            if(ex.response && ex.response.status===400)
            {   let errors={};
                errors.name=ex.response.data;
                this.setState({errors:errors})
            }
        }
        
    }

    handleSubmit=(e)=>
    {   e.preventDefault();
        const {name}=this.state;
        this.postData(`/api/greet?name=${name}`);
    }

    render()
    {   let{name}=this.state;
        return(
            <div className="container">
                <br/><br/>
                <div className="row">
                  <div className="col-4">
                    Enter Name
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={name}
                      placeholder="Enter Name"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <h1 className="text-center mt-1"><button className="btn btn-info" onClick={this.handleSubmit}>Get Greeting</button></h1>
            </div>
        )

    }

}export default Input;
