import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }){
  const modal = useRef();
    
  const title = useRef();
  const description = useRef();
  const dueTime = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDuetime = dueTime.current.value;

    if(enteredTitle.trim()=='' || enteredDescription.trim()=='' || enteredDuetime.trim()=='' ){
        modal.current.open()
        return;
    }

    onAdd({
        title : enteredTitle,
        description : enteredDescription,
        dueTime : enteredDuetime
    });
  }

    return(
        <>
            <Modal ref={modal} btnCaption='Okey'>
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>..oops, looks like you forget to enter a value.</p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field!</p>
            </Modal>
            <div className="w-[35rem] mt-16 mx-6">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                    <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
                </menu>
                <div>
                    <Input ref={title} label='Title' />
                    <Input ref={description} label='Description' textarea />
                    <Input ref={dueTime} label='Due Time' type="date" />
                </div>
            </div>
        </>
    );
}