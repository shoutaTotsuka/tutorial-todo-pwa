import { useState, useEffect } from 'react';
import localforage from 'localforage'
import GlobalStyles from '@mui/material/GlobalStyles';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo, pink } from '@mui/material/colors';

import { TodoItem } from '@/TodoItem';
import { FormDialog } from '@/FormDialog';
import { ToolBar } from '@/ToolBar';
import { SideBar } from '@/SideBar';
import { QR } from '@/QR';
import { AlertDialog } from '@/AlertDialog';
import { ActionButton } from '@/ActionButton';

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: pink[500],
    },
  },
});

const Container = styled('div')({
  margin: '0 auto',
  maxWidth: '640px',
  fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif',
});

export const App = (): JSX.Element => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('all');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const typeGuardTodo = (arg: any): arg is Todo => {
    return (
      arg !== null &&
      typeof arg === 'object' &&
      typeof arg.id === 'number' &&
      typeof arg.value === 'string' &&
      typeof arg.checked === 'boolean' &&
      typeof arg.removed === 'boolean'
    )
  }

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleQR = () => setQrOpen(!qrOpen);
  const toggleAlert = () => setAlertOpen(!alertOpen);

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
    setText('');
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.target.value);
  };

  const handleOnSubmit = () => {
    if (!text) {
      setDialogOpen(false);
      return;
    }

    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
      checked: false,
      removed: false,
    };

    setTodos([newTodo, ...todos]);
    setText('');
    setDialogOpen(false);
  };

  const handleOnEdit = (id: number, value: string) => {
    const deepCopy: Todo[] = JSON.parse(JSON.stringify(todos));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleOnCheck = (id: number, checked: boolean) => {
    const deepCopy: Todo[] = JSON.parse(JSON.stringify(todos));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleOnRemove = (id: number, removed: boolean) => {
    const deepCopy: Todo[] = JSON.parse(JSON.stringify(todos));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.removed = !removed;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleOnEmpty = () => {
    const newTodos = todos.filter((todo) => !todo.removed);
    setTodos(newTodos);
  };

  const handleOnSort = (filter: Filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'all':
        return !todo.removed;
      case 'checked':
        return todo.checked && !todo.removed;
      case 'unchecked':
        return !todo.checked && !todo.removed;
      case 'removed':
        return todo.removed;
      default:
        return todo;
    }
  });

  useEffect(() => {
    localforage.getItem('todo-20290925')
      .then((values) => {
        if (!values || !Array.isArray(values)) {
          return
        } else {
          const newTodos: Todo[] = []
          for (const value of values) {
            console.log('check type')
            console.log(value)
            if (typeGuardTodo(value)) {
              newTodos.push(value)
            }
          }
          setTodos(values as Todo[])
        }
      })
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    localforage.setItem('todo-20290925', todos)
      .catch((error) => console.error(error))
  }, [todos])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{
        html: { height: '100%' },
        body: { height: '100%', margin: 0, padding: 0, background: '#3f51b2' }
      }} />
      <ToolBar filter={filter} toggleDrawer={toggleDrawer} />
      <SideBar
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        onSort={handleOnSort}
        onOpen={toggleQR}
      />
      <QR open={qrOpen} onClose={toggleQR} />
      <FormDialog
        text={text}
        dialogOpen={dialogOpen}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        toggleDialog={toggleDialog}
      />
      <AlertDialog
        alertOpen={alertOpen}
        onEmpty={handleOnEmpty}
        toggleAlert={toggleAlert}
      />
      <Container>
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              filter={filter}
              onCheck={handleOnCheck}
              onEdit={handleOnEdit}
              onRemove={handleOnRemove}
            />
          );
        })}
        <ActionButton
          todos={todos}
          filter={filter}
          alertOpen={alertOpen}
          dialogOpen={dialogOpen}
          toggleAlert={toggleAlert}
          toggleDialog={toggleDialog}
        />
      </Container>
    </ThemeProvider>
  );
};
