import bearHug from "../assets/bear-hug.gif";
import bearPhone from "../assets/bear-phone.gif";

const BearDisplay = ({ type }) => {
  const sources = {
    hug: bearHug,
    celebrate: bearPhone,
  };

  return (
    <div className="flex justify-center mb-6">
      <img
        src={sources[type] ?? bearHug}
        className="w-64 h-64 object-contain rounded-2xl"
        alt="Valentine Bear"
      />
    </div>
  );
};

export default BearDisplay;
