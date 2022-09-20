import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    image: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'ajay kumar',
    role: 'frontend developer',
  },
  {
    uniqueNo: 2,
    image: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'kavya',
    role: 'backend developer',
  },

  {
    uniqueNo: 3,
    image: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'sowmya',
    role: 'associate mentor',
  },
  {
    uniqueNo: 4,
    image: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'siva',
    role: 'berimo ceo',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">User Lists</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userdata={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
