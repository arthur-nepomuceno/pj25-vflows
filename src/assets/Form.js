import { Form } from '@unform/web';
import Input from '../components/Form/input';

export default function NewForm(){

    function handleSubmit(data){
        console.log(data)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" name="name"/>
            <Input type="email" name="email"/>
            <Input type="password" name="password"/>

            <button type="submit">Send</button>
        </Form>
    )
}