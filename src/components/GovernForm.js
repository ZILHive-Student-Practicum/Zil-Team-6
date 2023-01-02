import React, {useState} from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Card, Heading } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel
} from '@chakra-ui/react';

{/* <Button colorScheme='blue' variant='outline' style={btn}>
    Create Poll
</Button> */}

const btn ={
    float: 'right',
    marginTop: '20px'
}

const GovernForm = () => {
//     const showForm = () => {
//       <form>
//         <Center>
//           <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
//             Verify your Email
//           </Heading>
//         </Center>
//       </form>
//     }
  
//     return <Button colorScheme='blue' variant='outline' style={btn} onClick={showForm}>Show alert</Button>;
//   }

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
                                <input type="text" />
                                <p>Description</p>
                                <input type="text" />
                                <p>Information Link (optional) </p>
                                <input type="text" />
                            </label>
                            </fieldset>
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