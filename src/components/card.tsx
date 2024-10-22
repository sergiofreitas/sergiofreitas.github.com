export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[linear-gradient(45deg,transparent_25%,rgba(120,120,120,.2)_50%,transparent_75%,transparent_100%)] bg-white relative overflow-hidden rounded-xl border bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-5 py-4 transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
      {children}
    </div>
  );
};
