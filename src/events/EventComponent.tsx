const EventComponent: React.FC = () =>{
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event)
    }
    // Remove Handler word at the end React.DragEventHandler<HTMLDivElement>

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event)
    }
    //Remove Handler word at the end React.DragEventHandler<HTMLDivElement>
    
    return(
        <div>
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart}>Drag me!</div>
        </div>
    )

}

export default EventComponent;