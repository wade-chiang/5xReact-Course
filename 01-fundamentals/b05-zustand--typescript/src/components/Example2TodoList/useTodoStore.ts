/* eslint-disable no-plusplus */

import { create } from 'zustand';
import fetchData from '@/services/api';
import { devtools } from 'zustand/middleware';
// TODO

type TodoType = {
  id: string;
  text: string;
  done: boolean;
};
const initialState = {
  todos: [
    {
      id: 'fakeId0',
      text: '學會  React',
      done: true,
    },
    {
      id: 'fakdId1',
      text: '年薪百萬',
      done: false,
    },
  ],
  filterType: 'all' as FilterType,
};
export type FilterType = 'all' | 'active' | 'completed';

type TodoState = {
  todos: TodoType[];
  filterType: FilterType;

  setFilterType(value: FilterType): void;
  addTodo(value: string): void;
  toggleTodo(id: string): void;
  fetchTodo(): Promise<void>;
};

const todoIndex = 0;
const useTodoStore = create<TodoState>()(
  devtools(
    (set, get) => {
      return {
        ...initialState,
        // --------------------------- Action
        setFilterType(filterType: FilterType) {
          set({ filterType });
        },
        addTodo(text: string) {
          console.log('addTodo', text);
          const todos = get().todos.concat({
            id: `id:${todoIndex}`,
            text,
            done: false,
          });
          set({ todos });
        },
        toggleTodo(todoId: string) {
          const todos = get().todos.map((todo) => {
            if (todo.id === todoId) {
              return {
                ...todo,
                done: !todo.done,
              };
            }
            return todo;
          });
          set({ todos });
        },
        fetchTodo: async () => {
          console.log('fetch');
          // 支援 async
          const result = await fetchData();
          set((state) => {
            return {
              todos: state.todos.concat(result as TodoType),
            };
          });
        },
      };
    },
    { name: 'todo' },
  ),
);

export default useTodoStore;
