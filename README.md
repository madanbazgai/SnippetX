# Welcome to SnippetX

### JavaScript | React | React-Native | Expo Router | Zustand | Tanstack Query | Redux-Toolkit | ShadCn

- Simple, minimal
- Mostly used snippets.
- No nonsense.
- Better alternative of ES7+ React/Redux/React-Native

## Features

1. ### [JavaScript Snippets](#1-javascript-snippets)

   - [clg](#clg)
   - [clo](#clo)
   - [cls](#cls)
   - [jmap](#jmap)
   - [jfilter](#jfilter)
   - [jfind](#jfind)
   - [jparse](#jparse)
   - [jsfy](#jsfy)

2. ### [React Snippets](#2-react-snippets)

   - [rfc](#rfc)
   - [rfce](#rfce)
   - [rfca](#rfca)
   - [us](#us)
   - [ue](#ue)
   - [od](#od)
   - [rmap](#rmap)
   - [rfind](#rfind)
   - [rfilter](#rfilter)
   - [rtern](#rtern)

3. ### [React-Native Snippets](#3-react-native-snippets)

   - [rnf - React Native Functional Component](#rnf)
   - [rnfs - React Native Functional Component with Styles](#rnfs)

4. ### [Expo Router Snippets](#4-expo-router-snippets)

   - [ers - Expo Router Stack Layout](#ers)
   - [ert - Expo Router Tab Layout](#ert)
   - [erd - Expo Router Drawer Layout](#erd)
   - [ertl - Expo Router Tab Layout Component](#ertl)
   - [ersl - Expo Router Stack Layout Component](#ersl)
   - [erdl - Expo Router Drawer Layout Component](#erdl)

5. ### [Zustand Snippets](#5-zustand-snippets)

   - [zs](#zs)
   - [zu](#zu)

6. ### [Tanstack Query Snippets](#6-tanstack-query-snippets)

   - [tcq](#tcq)
   - [tuq](#tuq)
   - [tcm](#tcm)
   - [tum](#tum)

7. ### [Redux-Toolkit Snippets](#7-redux-toolkit-snippets)

   - [usl](#usl)
   - [udis](#udis)
   - [red](#red)
   - [ered](#ered)
   - [asthunk](#asthunk)

8. ### [ShadCn Snippets](#8-shadcn-snippets)

   - [snibutton](#snibutton)
   - [snbutton](#snbutton)
   - [snicard](#snicard)
   - [sncard](#sncard)
   - [sniinput](#sniinput)
   - [sninput](#sninput)
   - [snidialog](#snidialog)
   - [sndialog](#sndialog)
   - [sniform](#sniform)
   - [snformfield](#snformfield)

<br/>

## 1. JavaScript Snippets

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

- #### **jfilter**

  ```javascript
  const users = users.filter((user)=>(

  ))
  ```

- #### **jfind**

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

## 2. React Snippets

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

- #### **rfca**

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

## 3. React-Native Snippets

- #### **rnf**

  ```javascript
  import { View, Text } from "react-native";

  export default function Component() {
    return (
      <View>
        <Text>Component</Text>
      </View>
    );
  }
  ```

- #### **rnfs**

  ```javascript
  import { View, Text, StyleSheet } from "react-native";

  export default function Component() {
    return (
      <View style={styles.container}>
        <Text>Component</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  ```

## 4. Expo Router Snippets

- #### **ers**

  ```javascript
  import { Stack } from "expo-router";

  export default function AppLayout() {
    return <Stack />;
  }
  ```

- #### **ert**

  ```javascript
  import { Tabs } from "expo-router";

  export default function TabLayout() {
    return <Tabs />;
  }
  ```

- #### **erd**

  ```javascript
  import { Drawer } from "expo-router/drawer";

  export default function DrawerLayout() {
    return <Drawer />;
  }
  ```

  ```javascript
  import { Drawer } from "expo-router/drawer";
  import { Ionicons } from "@expo/vector-icons";

  export default function DrawerLayout() {
    return (
      <Drawer
        screenOptions={{
          drawerActiveTintColor: "#007AFF",
          drawerInactiveTintColor: "#8E8E93",
          headerShown: true,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            drawerLabel: "Home",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            drawerLabel: "Settings",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            title: "Profile",
            drawerLabel: "Profile",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    );
  }
  ```

- #### **ertl**

  ```javascript
  import { Tabs } from "expo-router";
  import { Ionicons } from "@expo/vector-icons";

  export default function TabLayout() {
    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#007AFF",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    );
  }
  ```

- #### **ersl**

  ```javascript
  import { Stack } from "expo-router";

  export default function StackLayout() {
    return (
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#007AFF",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="details" options={{ title: "Details" }} />
      </Stack>
    );
  }
  ```

- #### **erdl**

  ```javascript
  import { Drawer } from "expo-router/drawer";
  import { Ionicons } from "@expo/vector-icons";

  export default function DrawerLayout() {
    return (
      <Drawer
        screenOptions={{
          drawerActiveTintColor: "#007AFF",
          drawerInactiveTintColor: "#8E8E93",
          headerShown: true,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            drawerLabel: "Home",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            drawerLabel: "Settings",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            title: "Profile",
            drawerLabel: "Profile",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    );
  }
  ```

## 5. Zustand Snippets

- #### **zs**

  ```javascript
  import { create } from "zustand";
  import { persist } from "zustand/middleware";

  export type Status = "TODO" | "IN_PROGRESS" | "DONE";

  export type Task = {
    id: string | number;
    title: string;
    description?: string;
    status: Status;
  };

  export type State = {
    tasks: Task[];
  }

  export type Actions = {
    addTask: (title: string, description?: string) => void;
    removeTask: (title: string) => void;
  };

  export const useTaskStore = create<State & Actions>()(
    persist(
      (set) => ({
        tasks: [],

        addTask: (title: string, description?: string) =>
          set((state) => ({
            tasks: [...state.tasks, { id: "1", title, description, status: "TODO" }]
          })),

        removeTask: (id: string) =>
          set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id)
          })),
      }),

      { name: "task-store", skipHydration: true }
    )
  );
  ```

- #### **zu**

  ```javascript
  const { tasks, addTask, removeTask } = useTaskStore();
  ```

## 6. Tanstack Query Snippets

- #### **tcq**

  ```javascript
  export const useGetAllUsersApi = () => {
    return useQuery({
      queryKey: ["user"],
      queryFn: async () => await fetch("/api/users").then((res) => res.json()),
    });
  };
  ```

- #### **tuq**

  ```javascript
  const { data, isLoading, error } = useGetAllUsersApi();
  ```

- #### **tcm**

  ```javascript
  export const useCreateUserApi = () => {
    return useMutation({
      mutationFn: async (body: UserSchemaData) => {
        return await fetch("/api/users",{
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());
      },
      onSuccess: (data, variables, context) => {
        <!-- toast.success("User created successfully"); -->
        return data;
      },
      onError: (error, variables, context) => {
        <!-- toast.error(error.message); -->
      },
    });
  }
  ```

- #### **tum**

  ```javascript
  const { mutate } = useCreateUserApi();
  ```

## 7. Redux-Toolkit Snippets

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

## 8. ShadCn Snippets

- #### **sniaccordion**

```javascript
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
```

- #### **snaccordion**

```javascript
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

- #### **snialert**

```javascript
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
```

- #### **snalert**

```javascript
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
```

- #### **snialertdialog**

```javascript
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
```

- #### **snalertdialog**

```javascript
<AlertDialog>
  <AlertDialogOverlay>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Alert</AlertDialogTitle>
        <AlertDialogDescription>
          This is an alert — check it out!
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogBody>
        <p>
          Get a notification when your website visitors arrive at your website.
        </p>
        <p>This alert can be dismissed.</p>
      </AlertDialogBody>
      <AlertDialogFooter>
        <AlertDialogAction>Learn more</AlertDialogAction>
        <AlertDialogAction
          onClick={() => {
            setOpen(false);
          }}
        >
          Dismiss
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialogOverlay>
</AlertDialog>
```

- #### **sniaspectratio**

```javascript
import { AspectRatio } from "@/components/ui/aspect-ratio";
```

- #### **snaspectratio**

```javascript
<AspectRatio ratio={16 / 9}>
  <img
    src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    alt="mountain"
  />
</AspectRatio>
```

- #### **sniavatar**

```javascript
import { Avatar } from "@/components/ui/avatar";
```

- #### **snavatar**

```javascript
<Avatar
  src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  alt="mountain"
/>
```

- #### **snibadge**

```javascript
import { Badge } from "@/components/ui/badge";
```

- #### **snbadge**

```javascript
<Badge>1</Badge>
```

- #### **snibreadcrumb**

```javascript
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
```

- #### **snbreadcrumb**

```javascript
<Breadcrumb>
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Library</BreadcrumbItem>
  <BreadcrumbItem href="#">Data</BreadcrumbItem>
  <BreadcrumbItem href="#">Bootstrap</BreadcrumbItem>
</Breadcrumb>
```

- #### **snibutton**

```javascript
import { Button } from "@/components/ui/button";
```

- #### **snbutton**

```javascript
<Button>Button</Button>
```

- #### **snicalendar**

```javascript
import { Calendar } from "@/components/ui/calendar";
```

- #### **sncalendar**

```javascript
<Calendar />
```

- #### **snicard**

```javascript
import { Card, CardBody, CardHeader } from "@/components/ui/card";
```

- #### **sncard**

```javascript
<Card>
  <CardHeader>
    <CardTitle>Card title</CardTitle>
    <CardDescription>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </CardDescription>
  </CardHeader>
  <CardBody>
    <CardTitle>Card title</CardTitle>
    <CardDescription>
      This card has supporting text below as a natural lead-in to additional
      content.
    </CardDescription>
  </CardBody>
</Card>
```

- #### **snicarousel**

```javascript
import { Carousel, CarouselItem } from "@/components/ui/carousel";
```

- #### **sncarousel**

```javascript
<Carousel>
  <CarouselItem>
    <img
      src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      alt="mountain"
    />
  </CarouselItem>
  <CarouselItem>
    <img
      src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      alt="mountain"
    />
  </CarouselItem>
  <CarouselItem>
    <img
      src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      alt="mountain"
    />
  </CarouselItem>
  <CarouselItem>
    <img
      src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      alt="mountain"
    />
  </CarouselItem>
</Carousel>
```

- #### **snichart**

```javascript
import { Chart } from "@/components/ui/chart";
```

- #### **snchart**

```javascript
<Chart />
```

- #### **snicheckbox**

```javascript
import { Checkbox } from "@/components/ui/checkbox";
```

- #### **sncheckbox**

```javascript
<Checkbox>Checkbox</Checkbox>
```

- #### **snicollapsible**

```javascript
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
```

- #### **sncollapsible**

```javascript
<Collapsible>
  <CollapsibleTrigger>Is it accessible?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. It adheres to the WAI-ARIA design pattern.
  </CollapsibleContent>
</Collapsible>
```

- #### **snicombobox**

```javascript
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@/components/ui/combobox";
```

- #### **sncombobox**

```javascript
<Combobox>
  <ComboboxInput placeholder="Search..." />
  <ComboboxList>
    <ComboboxOption value="option-1">
      <ComboboxOptionText>Option 1</ComboboxOptionText>
    </ComboboxOption>
    <ComboboxOption value="option-2">
      <ComboboxOptionText>Option 2</ComboboxOptionText>
    </ComboboxOption>
    <ComboboxOption value="option-3">
      <ComboboxOptionText>Option 3</ComboboxOptionText>
    </ComboboxOption>
  </ComboboxList>
</Combobox>
```

- #### **snicommand**

```javascript
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
  CommandShortcut,
} from "@/components/ui/command";
```

- #### **sncommand**

```javascript
<Command>
  <CommandGroup>
    <CommandInput placeholder="Search..." />
    <CommandList>
      <CommandItem>
        <CommandShortcut>⌘</CommandShortcut>
        <CommandText>New</CommandText>
      </CommandItem>
      <CommandItem>
        <CommandShortcut>⌘</CommandShortcut>
        <CommandText>Open</CommandText>
      </CommandItem>
      <CommandItem>
        <CommandShortcut>⌘</CommandShortcut>
        <CommandText>Save</CommandText>
      </CommandItem>
      <CommandItem>
        <CommandShortcut>⌘⇧</CommandShortcut>
        <CommandText>Find</CommandText>
      </CommandItem>
    </CommandList>
  </CommandGroup>
</Command>
```

- #### **snicontextmenu**

```javascript
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
```

- #### **sncontextmenu**

```javascript
<ContextMenu>
  <ContextMenuTrigger>
    <button>Context menu</button>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Undo</ContextMenuItem>
    <ContextMenuItem>Redo</ContextMenuItem>
    <ContextMenuItem>Cut</ContextMenuItem>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```
