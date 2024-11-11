import { BuiltInIconProps } from './type';

const IconFlagUSACircle = (props: BuiltInIconProps) => {
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
        <g clipPath="url(#clip0_140_2708)">
          <path
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
            fill="white"
          />
          <path
            d="M11.4779 12H23.9997C23.9997 10.9169 23.8553 9.86768 23.5863 8.86957H11.4779V12Z"
            fill="#D02F44"
          />
          <path
            d="M11.4779 5.73855H22.2384C21.5038 4.53986 20.5646 3.48034 19.4695 2.60809H11.4779V5.73855Z"
            fill="#D02F44"
          />
          <path
            d="M11.9997 24C14.8239 24 17.4197 23.0239 19.4695 21.3914H4.5299C6.57975 23.0239 9.17554 24 11.9997 24Z"
            fill="#D02F44"
          />
          <path
            d="M1.76106 18.2599H22.2385C22.8282 17.2976 23.2856 16.2457 23.5864 15.1295H0.413166C0.713963 16.2457 1.17132 17.2976 1.76106 18.2599Z"
            fill="#D02F44"
          />
          <path
            d="M5.55863 1.87397H6.65217L5.63498 2.61295L6.02353 3.80869L5.00639 3.0697L3.98925 3.80869L4.32487 2.7757C3.42928 3.52172 2.64431 4.39575 1.99744 5.36963H2.34783L1.70034 5.84002C1.59947 6.0083 1.50272 6.17925 1.41 6.35273L1.71919 7.30434L1.14234 6.88523C0.998953 7.18903 0.867797 7.49967 0.749906 7.81678L1.09055 8.86528H2.34783L1.33064 9.60427L1.71919 10.8L0.702047 10.061L0.0927656 10.5037C0.0317812 10.9939 0 11.4932 0 12H12C12 5.37262 12 4.59131 12 0C9.62944 0 7.41961 0.687656 5.55863 1.87397ZM6.02353 10.8L5.00639 10.061L3.98925 10.8L4.3778 9.60427L3.36061 8.86528H4.61789L5.00639 7.66955L5.39489 8.86528H6.65217L5.63498 9.60427L6.02353 10.8ZM5.63498 6.10861L6.02353 7.30434L5.00639 6.56536L3.98925 7.30434L4.3778 6.10861L3.36061 5.36963H4.61789L5.00639 4.17389L5.39489 5.36963H6.65217L5.63498 6.10861ZM10.3279 10.8L9.31073 10.061L8.29359 10.8L8.68214 9.60427L7.66495 8.86528H8.92223L9.31073 7.66955L9.69923 8.86528H10.9565L9.93933 9.60427L10.3279 10.8ZM9.93933 6.10861L10.3279 7.30434L9.31073 6.56536L8.29359 7.30434L8.68214 6.10861L7.66495 5.36963H8.92223L9.31073 4.17389L9.69923 5.36963H10.9565L9.93933 6.10861ZM9.93933 2.61295L10.3279 3.80869L9.31073 3.0697L8.29359 3.80869L8.68214 2.61295L7.66495 1.87397H8.92223L9.31073 0.678234L9.69923 1.87397H10.9565L9.93933 2.61295Z"
            fill="#45457D"
          />
        </g>
        <defs>
          <clipPath id="clip0_140_2708">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default IconFlagUSACircle;
