import RenderTip from '../RenderTip';
// TODO
import style from './TodoItem.module.scss';

/**
 * @typedef Props
 * @prop {string} id
 * @prop {boolean} done
 * @prop {string} text
 * @prop {(id:string) => void} onToggleItem
 */

/**
 * @param {Props} props
 */
const TodoItem = (props) => {
  const { id, text, done, onToggleItem } = props;

  const atClick = () => {
    onToggleItem(id);
  };

  return (
    <section data-name="TodoItem" data-gradient className="style-3">
      <RenderTip />
      <div data-active={done} className={style.todoItem} onClick={atClick}>
        {text}
      </div>
      {/* FIXME delete not working */}
      <button className="button">Delete</button>
    </section>
  );
};

export default TodoItem;
