import { joinClasses } from "@/utils/common";

export interface UserAvatarProps {
  alt: string;
  avatarUrl?: string;
  fallbackElement?: boolean | JSX.Element;
  online?: boolean;
}

/**
 * @param {string} props.alt The alt text of the avatar image,
 * will be used as the fallback text if the avatar image is not available.
 * @param {string} props.avatarUrl
 * @param {boolean | JSX.Element} props.fallbackElement The fallback element to show when the avatar image is not available.
 * @param {boolean} props.online Whether to show the online status of the user.
 * @returns {JSX.Element}
 * @constructor
 * @description UserAvatar component
 * @example
 * <UserAvatar alt="user" avatarUrl="https://gravatar.com/avatar/1" online={true} logined={true} />
 */
const UserAvatar: React.FC<UserAvatarProps> = (props): JSX.Element => {
  if (props.alt === "") props.alt = "user";

  return (
    <div
      className={joinClasses(
        "avatar",
        props.online === true && "online",
        props.online === false && "offline",
        (!props.online || !props.avatarUrl) && "placeholder",
      )}
    >
      <div className="mask mask-squircle w-8 bg-neutral text-neutral-content">
        {props.avatarUrl ? (
          <img src={props.avatarUrl} alt={props.alt} />
        ) : props.fallbackElement ? (
          props.fallbackElement
        ) : (
          <span className="text-lg font-semibold">
            {props.alt[0].toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
};

export default UserAvatar;
