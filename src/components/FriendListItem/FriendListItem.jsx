import css from './FriendListItem.module.css'
import PropTypes from 'prop-types'
export const FriendListItem = ({avatar, name, isOnline, id}) => {
    return  <li key={id} className={css.item}>
    <span className={isOnline ? css.isOnline : css.isOffline}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
     <p className={css.name}>{name}</p>
        </li>
}
FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}