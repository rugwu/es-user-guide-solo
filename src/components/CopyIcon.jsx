const CopyIcon = ({ size = 16, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 16 16"
  >
    <path d="M10 1H2a1 1 0 0 0-1 1v10h1V2h8V1z" />
    <path d="M14 3H6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm0 12H6V4h8v11z" />
  </svg>
);

export default CopyIcon;
