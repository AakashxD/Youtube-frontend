import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import Head from './components/head'
import store from './Utils/store'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import Sidebar from './components/Sidebar'
const appRouter=createBrowserRouter([{
     path:'/',
     element:<Body/>,
     children:[{
      path:"/",
      element:<MainContainer/>
     },
     {
      path:"watch",
      element:<WatchPage/>
     }
     ]
}])
function App() {
 

  return (
  <Provider store={store}>
  <div>
    <Head/>
    <RouterProvider router={appRouter}/>
    <Body/>
  </div>
  </Provider>
  )
}

export default App
