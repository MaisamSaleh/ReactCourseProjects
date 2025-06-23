import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewTask({ onAdd }){
    const [ enteresTask, setEnteredTask ] = useState('');
    const modal = useRef();

    function handleChange(event){
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        if(enteresTask.trim()==''){
        modal.current.open()
        return;
    }
        onAdd(enteresTask);
        setEnteredTask('');
    }

    return (
        <>
            <Modal ref={modal} btnCaption='Okey'>
                <p className='text-stone-600 mb-4'>..oops, looks like you forget to enter a value.</p>
            </Modal>
            <div className="flex items-center gap-4">
                <input onChange={handleChange} value={enteresTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" />
                <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
            </div>
        </>
    );
}