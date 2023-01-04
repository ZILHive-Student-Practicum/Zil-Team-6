import React, {useState} from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Card, Heading } from '@chakra-ui/react';

{/* <Button colorScheme='blue' variant='outline' style={btn}>
    Create Poll
</Button> */}

const btn ={
    float: 'right',
    marginTop: '20px'
}

const GovernForm = () => {
    const[showForm, setShowForm] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <React.Fragment>
            {showForm ? 
                (
                <Card>
                    <div className="wrapper">
                        <Heading>Submit text poll</Heading>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                            <label>
                                <p>Title</p>
                                <input type="text" size="45"/>
                            </label>
                            <label>
                                <p>Description</p>
                                <textarea cols="47"/>
                            </label>
                            <label>
                                <p>Information Link (optional) </p>
                                <input type="text" placeholder="URL for additional information" size="45"/>
                            </label>
                            </fieldset>
                            <br></br>
                            <Button type="submit">Submit</Button>
                        </form>
                        </div>
                </Card>
                ) :
                (
                <Button colorScheme='blue' variant='outline' style={btn} onClick={() => setShowForm(true)}>
                Create Poll
                </Button> 
                )
            }
        </React.Fragment>
    );
}
  export default GovernForm;