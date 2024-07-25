import { FC } from 'react';
import { TodoType } from '../Types/TodoType';
import { Todo } from './Todo';
import { TempTodo } from './TempTodo';

interface Props {
  onDelete: (id: number) => Promise<void>;
  onEdit: (id: number, data: Partial<TodoType>) => Promise<void>;
  todos: TodoType[];
  tempTodoTitle: string | null;
  idsProccesing: number[];
  tempTodoRef: React.MutableRefObject<HTMLInputElement | null>; // Add this prop
  onSubmit: (title: string) => void; // Add this prop
}

export const List: FC<Props> = ({
  todos,
  tempTodoTitle,
  onDelete,
  onEdit,
  idsProccesing,
  tempTodoRef,
  onSubmit,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
          idsProccesing={idsProccesing}
        />
      ))}

      {/* Pass props in a single line to TempTodo */}
      {tempTodoTitle && (
        <TempTodo
          title={tempTodoTitle}
          onSubmit={onSubmit}
          inputRef={tempTodoRef}
        />
      )}
    </section>
  );
};
