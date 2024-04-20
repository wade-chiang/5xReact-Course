import React from 'react';
import RenderTip from '../RenderTip';

/**
 * @typedef Props
 * @prop {string} filterType
 * @prop {(type:string) => void} onFilterChange
 */

/**
 * @param {Props} props
 */

const TodoFilter = (props) => {
  const { onFilterChange, filterType } = props;
  return (
    <section data-name="TodoFilter" className="style-2">
      <RenderTip />
      <button
        className="my-tab-btn"
        data-active={filterType === 'all'}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        className="my-tab-btn"
        data-active={filterType === 'active'}
        onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button
        className="my-tab-btn"
        data-active={filterType === 'completed'}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </section>
  );
};
export default React.memo(TodoFilter);
