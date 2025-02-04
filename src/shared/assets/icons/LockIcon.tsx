import { SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const LockIcon = ({ className, fill, ...otherProps }: IProps) => {
  return (
    <svg
      {...otherProps}
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4032_4680)">
        <path
          d="M4 6.66683V5.3335C4 5.10635 4.01893 4.88363 4.05531 4.66683M12 6.66683V5.3335C12 3.12436 10.2091 1.3335 8 1.3335C6.80531 1.3335 5.73294 1.85725 5 2.68767"
          stroke="#011627"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.33398 14.6665H5.33398C3.44837 14.6665 2.50556 14.6665 1.91977 14.0807C1.33398 13.4949 1.33398 12.5521 1.33398 10.6665C1.33398 8.78089 1.33398 7.83808 1.91977 7.25229C2.50556 6.6665 3.44837 6.6665 5.33398 6.6665H10.6673C12.5529 6.6665 13.4957 6.6665 14.0815 7.25229C14.6673 7.83808 14.6673 8.78089 14.6673 10.6665C14.6673 12.5521 14.6673 13.4949 14.0815 14.0807C13.4957 14.6665 12.5529 14.6665 10.6673 14.6665H10.0007"
          stroke="#011627"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4032_4680">
          <rect width="16" height="16" fill={fill || 'white'} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LockIcon;
