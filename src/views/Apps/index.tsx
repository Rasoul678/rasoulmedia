import { Link } from "react-router-dom";
import { View } from "components/Global/GlobalStyles";
import editorGif from "assets/gif/code-editor.gif";

const Apps: React.FC = () => {
  return (
    <View>
        <h1>Apps</h1>
        <Link to="/apps/code-editor">
          <img
            width={600}
            style={{ borderRadius: "1rem", cursor: "pointer" }}
            src={editorGif}
            alt="code-editor-gif"
          />
        </Link>
    </View>
  );
};

export default Apps;
