import { BuiltInIconProps } from './type';

const IconFlagVietnamCircle = (props: BuiltInIconProps) => {
  const { width, height, onClick } = props;
  return (
    <div
      onClick={onClick}
      role="presentation"
      style={{
        width: width ?? '24px',
        height: height ?? '24px',
      }}
      tabIndex={-1}
    >
      <svg
        fill="none"
        height="100%"
        viewBox="0 0 24 24"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_140_2683)">
          <path
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
            fill="#EA403F"
          />
          <path
            d="M12.0001 6.26123L13.2952 10.247H17.486L14.0955 12.7103L15.3906 16.696L12.0001 14.2327L8.60963 16.696L9.90469 12.7103L6.51423 10.247H10.705L12.0001 6.26123Z"
            fill="#FFFE4E"
          />
        </g>
        <defs>
          <clipPath id="clip0_140_2683">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default IconFlagVietnamCircle;
