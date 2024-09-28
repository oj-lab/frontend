const Footer: React.FC = () => {
  return (
    <div className="footer flex w-full flex-col justify-center gap-1 text-xs text-base-content/80">
      <p>©2024 OJ Lab</p>
      <p className="flex flex-row">
        Github:
        <a href="https://github.com/oj-lab">https://github.com/oj-lab</a>
      </p>
    </div>
  );
};

export default Footer;
