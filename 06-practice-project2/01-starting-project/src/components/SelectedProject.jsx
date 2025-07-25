import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete, onAdd, onDeleteTask, tasks }){
    const formattedDate = new Date(project.dueTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month:'short',
        day:'numeric'
    });

    return(
        <div className="mx-5 w-[35rem] mt-16 flex flex-col gap-10">
            <header className="pd-4 md-4 border-b-4 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button onClick={onDelete} className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks onAdd={onAdd} onDeleteTask={onDeleteTask} tasks={tasks} />
        </div>
    );
}