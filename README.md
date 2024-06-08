# Welcome to SnippetX

- This is simple and minimal extension alternative to ES7+ React/Redux/React-Native snippets
- No unnecessary snippets.
- Only useful snippets.

## Features

0. ### [JavaScript Snippets](#0-javascript-snippets)

   - [clg](#clg)
   - [clg](#clg)
   - [clo](#clo)
   - [cls](#cls)
   - [jmap](#jmap)
   - [jfilter](#jfilter)
   - [jfind](#jfind)
   - [jparse](#jparse)
   - [jsfy](#jsfy)

1. ### [React Snippets](#1-react-snippets)

   - [rfc](#rfc)
   - [rfce](#rfce)
   - [arfce](#arfce)
   - [us](#us)
   - [ue](#ue)
   - [od](#od)
   - [rmap](#rmap)
   - [rfind](#rfind)
   - [rfilter](#rfilter)
   - [rtern](#rtern)

2. ### [Redux-Toolkit Snippets](#2-redux-toolkit-snippets)

   - [usl](#usl)
   - [udis](#udis)
   - [red](#red)
   - [ered](#ered)
   - [asthunk](#asthunk)

<br/>

## 0. JavaScript Snippets

- #### **clg**

  ```javascript
  console.log();
  ```

- #### **clo**

  ```javascript
  console.log("first", first);
  ```

- #### **cls**

  ```javascript
  console.log("");
  ```

- #### **jmap**

  ```javascript
  const users = users.map((user)=>(

  ))
  ```

- #### **filter**

  ```javascript
  const users = users.filter((user)=>(

  ))
  ```

- #### **find**

  ```javascript
  const users = users.find((user)=>(

  ))
  ```

- #### **jparse**

  ```javascript
  JSON.parse();
  ```

- #### **jsfy**

  ```javascript
  JSON.stringify();
  ```

## 1. React Snippets

- #### **rfc**

  ```javascript
  const App = () => {
    return <div>App</div>;
  };
  export default App;
  ```

- #### **rfce**

  ```javascript
  export default function App() {
    return <div>App</div>;
  }
  ```

- #### **arfce**

  ```javascript
  export default async function App() {
    return <div>App</div>;
  }
  ```

- #### **us**

  ```javascript
  const [loading, setLoading] = useState(initialValue);
  ```

- #### **ue**

  ```javascript
  useEffect(() => {}, []);
  ```

- #### **od**

  ```javascript
  const { photo } = users.profile;
  ```

- #### **rmap**

  ```javascript
  {users.map((user) => (
     <div key={}></div>
  ))}
  ```

- #### **rfilter**

  ```javascript
  {users.filter((user) => (
     <div key={}></div>
  ))}
  ```

- #### **rfind**

  ```javascript
  {users.find((user) => (
     <div key={}></div>
  ))}
  ```

- #### **rtern**

  ```javascript
  {users? do something : something else}
  ```

## 2. Redux Toolkit Snippets

- #### **usl**

  ```javascript
  const data = useSelector((state) => state.slice.data);
  ```

- #### **udis**

  ```javascript
  const dispatch = useDispatch();
  ```

- #### **red**

  ```javascript
  userClearData: (state,action) => {
     state.edit = false;
     state.user = null;
     state.loading = false;
   },
  ```

- #### **ered**

  ```javascript
  builder.addCase(getAllUsers.pending, (state) => {
    state.loadingUsers = true;
  });
  builder.addCase(getAllUsers.fulfilled, (state, action) => {
    state.loadingUsers = false;
    state.users = action.payload.users;
    state.count = action.payload.count;
    state.next = action.payload.next;
  });

  builder.addCase(getAllUsers.rejected, (state) => {
    state.loadingUsers = false;
  });
  ```

- #### **asthunk**

  ```javascript
  export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (value, { rejectWithValue }) => {
      const { postsPerPage, status, loanType } = value;
      try {
        const { data } = await API.getUsers(postsPerPage, status, loanType);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  ```
