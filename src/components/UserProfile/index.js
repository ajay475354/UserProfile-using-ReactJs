import './index.css'

const UserProfile = props => {
  const {userdata} = props
  const {image, name, role} = userdata

  return (
    <li className="user-card-container">
      <img src={image} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}
export default UserProfile
