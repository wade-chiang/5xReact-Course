import React from 'react';
import RenderTip from '@/components/RenderTip';
import { type FilterType } from './useTodoStore';

type TodoFilterProps = {
  filterType: string;
  onFilterChange: (type: FilterType) => void;
};

const TodoFilter: React.FC<TodoFilterProps> = (props) => {
  const { onFilterChange, filterType } = props;
  return (
    <section data-name="TodoFilter.js" className="style-3">
      <RenderTip />
      <button
        data-active={filterType === 'all'}
        className="my-tab-btn"
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        data-active={filterType === 'active'}
        className="my-tab-btn"
        onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button
        data-active={filterType === 'completed'}
        className="my-tab-btn"
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </section>
  );
};

export default React.memo(TodoFilter);
