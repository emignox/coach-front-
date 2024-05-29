interface ConnectionContainerProps {
  children: React.ReactNode;
}

export const ConnectionContainer: React.FC<ConnectionContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-4/5 h-auto p-5 text-black bg-gray-100 gap-y-5 s md:w-3/6 lg:w-2/6 rounded-2xl ">
      {children}
    </div>
  );
};

export default ConnectionContainer;
