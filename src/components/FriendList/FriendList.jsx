import css from './FriendList.module.css'
import {FriendListItem} from 'components/FriendListItem/FriendListItem.jsx'
import PropTypes from 'prop-types'
export const FriendList = ({friends}) => {
    return <ul className={css.friendList}>
    {friends.map(({id, avatar, name, isOnline}) =>  <FriendListItem key ={id} avatar={avatar} name={name} isOnline={isOnline}/>)}
  </ul>
}
FriendList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired
        })
    )
}