export const TopGradient = ({ children }) => {
  return (
    <div className="bg-[url('./glow-bottom.2e92759f.svg')] bg-bottom bg-cover backdrop-blur-lg overflow-hidden">
      {children}
    </div>
  );
};

export const BottomGradient = ({ children }) => {
  return (
    <div className="bg-[url('./glow-top.b910cff3.svg')] bg-top bg-cover backdrop-blur-lg overflow-hidden mt-[-10px]">
      {children}
    </div>
  );
};
