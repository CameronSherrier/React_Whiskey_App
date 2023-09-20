import Input from './Input';
import Button from './Button';

import { useForm } from 'react-hook-form';
import { server_calls } from '../api/server';
import { useDispatch, useStore } from 'react-redux';
import { chooseName, chooseType, choosePrice, chooseYear } from '../redux/slices/RootSlice';

interface WhiskeyFormProps {
    id?: string[]
}

const WhiskeyForm = ( props: WhiskeyFormProps ) => {
    const { register, handleSubmit } = useForm({});
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit= (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(`ID: ${ props.id }`);
        console.log(data);
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.name } ${ props.id }`);
            setTimeout( () => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            dispatch(chooseName(data.name));
            dispatch(chooseType(data.type));
            dispatch(choosePrice(data.price));
            dispatch(chooseYear(data.year_made));

            server_calls.create(store.getState())
            setTimeout( () => {window.location.reload()}, 1000)
        }
        
    }
    
  return (

    // TODO -add Handle function
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="name">Name of Whiskey</label>
            <Input {...register('name')} name='name' placeholder='Name'/>
        </div>
        <div>
            <label htmlFor="type">Type of Whiskey</label>
            <Input {...register('type')} name='type' placeholder='Type'/>
        </div>
        <div>
            <label htmlFor="price">Price</label>
            <Input {...register('price')} name='price' placeholder='Price'/>
        </div>
        <div>
            <label htmlFor="year_made">Year Made</label>
            <Input {...register('year_made')} name='year_made' placeholder='Year Made'/>
        </div>
        <div className="flex-1">
            <Button
                className='flex justify-start m-3 bg-blue-300 p-2 rounded hover:bg-red-700 text-white'
                >
                    Submit
            </Button>
        </div>
      </form>
    </div>
  )
}

export default WhiskeyForm
