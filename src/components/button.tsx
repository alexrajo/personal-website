export type SimpleButtonProps = {
  className?: string;
  onClick?: React.MouseEventHandler;
};

export type ButtonProps = {
  children?: React.ReactNode;
} & SimpleButtonProps;

export const Button = (props: ButtonProps) => {
  const { children, className, onClick } = props;

  return (
    <button
      className={`bg-gradient-to-b from-btn-top to-btn-bottom rounded-md px-5 py-3 min-w-fit ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
