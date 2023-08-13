import "./loader.scss";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="lds-spinner">
        {[...new Array(12)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
};
export default Loader;
