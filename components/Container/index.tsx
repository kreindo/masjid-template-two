export interface Props {  className?: string;
  children?: React.ReactNode;
}
export const BangRevaJie = ({ children, className }: Props) => {
  return (
    <div
      className={`pb-[100px] t-[200px] mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg ${className}`}
    >
      {children}
    </div>
  );
};
