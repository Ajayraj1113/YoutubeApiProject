import { useState } from 'react';
import {InputGroup,Form, Button,Stack} from 'react-bootstrap';
// import youtube from '../api/youtube';

const SearchBar = (props)=>{
    // console.log(props)
    const [search,setSearch] = useState('')
   
     return  <InputGroup className="mt-3">
        <Form onSubmit={(e)=>{
            e.preventDefault()
            props.onSubmit(search)
        }}>
        <Stack direction="horizontal" gap={3}>
        <Form.Control
          placeholder="Search...."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={e=>setSearch(e.target.value)}
          value={search}
        />
        <Button type='submit' id="basic-addon2">Search</Button>
        </Stack>
        </Form>
      </InputGroup>    
}

export default SearchBar