interface PProps {
  className?: string;
  text: string;
}

function Paragraph({ className, text }: PProps) {
  return (
    <>
      <p className={` text-xl font-thin ${className}`}>{text}</p>
    </>
  );
}
export default Paragraph;
