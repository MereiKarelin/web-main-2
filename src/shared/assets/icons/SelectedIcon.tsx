import { SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const SelectedIcon = ({ className, ...otherProps }: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      className={className}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 16C12.9183 16 16.5 12.4183 16.5 8C16.5 3.58172 12.9183 0 8.5 0C4.08172 0 0.5 3.58172 0.5 8C0.5 12.4183 4.08172 16 8.5 16ZM12.3566 6.19113C12.6002 5.85614 12.5261 5.38708 12.1911 5.14345C11.8561 4.89982 11.3871 4.97388 11.1434 5.30887L7.65969 10.099L5.78033 8.21967C5.48744 7.92678 5.01256 7.92678 4.71967 8.21967C4.42678 8.51256 4.42678 8.98744 4.71967 9.28033L7.21967 11.7803C7.37477 11.9354 7.58999 12.0149 7.80867 11.9977C8.02734 11.9805 8.22754 11.8685 8.35655 11.6911L12.3566 6.19113Z"
        fill="#8EE4BA"
      />
    </svg>
  );
};

export default SelectedIcon;
