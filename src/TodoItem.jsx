import PropTypes from 'prop-types'

export default function TodoItem({task, deleteTask, changeStatus}) {

    const handleDelete = () => {
        deleteTask(task.id);
    };

    const handleCheckbox = () => {
        changeStatus(task.id);
    };

    return(
        <li>
            <input type="checkbox" checked={task.completed} onChange={handleCheckbox}/>
            <span>{task.text + " id:" + task.id}</span>
            <button onClick={handleDelete}>delete</button>
        </li>
    );
}
TodoItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        completed: PropTypes.bool
    }),
    deleteTask: PropTypes.func,
    changeStatus: PropTypes.func
}