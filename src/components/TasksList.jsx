import "./tasklist.scss";

function TasksList({ allTasks, handleDelete }) {
  return (
    <ul className="list">
      {allTasks.map(({ title, description, id }) => (
        <li className="list__li" key={id}>
          <div className="list__container">
            <h2 className="list__title">{title}</h2>
            <button className="list__xbutton" onClick={() => handleDelete(id)}>
              X
            </button>
          </div>
          {!description ? null : (
            <p className="list__description">{description}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
export { TasksList };
