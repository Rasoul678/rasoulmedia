import LottieMaker from "components/LottieMaker";
import ComingSoonJson from "assets/animations/87843-coming-soon.json";

const Code: React.FC = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <h1>Code</h1>
      <LottieMaker animationJSON={ComingSoonJson} autoplay width="20rem" />
    </div>
  );
};

export default Code;
