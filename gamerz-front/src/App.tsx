import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import MainLayout from './layout/MainLayout'
import CandidaciesTable from './components/CandidaciesTable'
import ChatroomModal from "./components/ChatroomModal.tsx";
import Chatroom from "./components/Chatroom.tsx";
import Chat from "./components/Chat.tsx";


function App() {


  return (
      <>
          <Routes>
              <Route path='/' element={<MainLayout />}>
                  <Route path='login' element={<Login />} />
                  <Route path='register' element={<Register />} />
                  <Route path='candidacies' element={<CandidaciesTable />} />
                  <Route path='chatroom' element={<ChatroomModal />} />
                  <Route path='chatrooms' element={<Chatroom />}>
                      <Route path=':id' element={<Chat />} />
                  </Route>
              </Route>
          </Routes>
      </>
  )
}

export default App
