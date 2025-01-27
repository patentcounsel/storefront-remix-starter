import clsx from 'clsx';

export function Button(
  props: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>,
) {
  return (
    <button
      {...props}
      className={clsx(
        'bg-gray-100 border rounded-md py-2 px-4 text-base font-medium text-black hover:text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-800',
        'flex items-center justify-around gap-2',
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
