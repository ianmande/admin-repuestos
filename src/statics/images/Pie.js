import React from 'react';

function SvgComponent({ children = ' ', ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={180}
      height={229.998}
      viewBox="0 0 230 229.998"
      {...rest}
    >
      <path
        d="M186.924 97.008l38.544-13.992a115.523 115.523 0 00-56.489-69.532l-18.671 36.332a74.451 74.451 0 0136.614 47.191"
        fill="#ffa833"
      />
      <path
        d="M40.858 114.997a74.231 74.231 0 0170.5-74.047V.067a114.975 114.975 0 00-52.023 215.53l21.678-34.739a74.2 74.2 0 01-40.155-65.861"
        fill="#37a8ff"
      />
      <path
        d="M186.923 97.008a74.1 74.1 0 01-105.909 83.851l-21.68 34.737A114.994 114.994 0 00225.469 83.015z"
        fill="#d32b33"
      />
      <path
        d="M115 40.858a73.687 73.687 0 0135.309 8.96l18.672-36.335A114.3 114.3 0 00115 0c-1.219 0-2.432.026-3.643.062v40.887a77.186 77.186 0 013.643-.091"
        fill="#4ad987"
      />
      {children}
    </svg>
  );
}

export default SvgComponent;