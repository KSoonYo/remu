import kind from "@enact/core/kind";
import Panels from "@enact/sandstone/Panels";

import MainPanel from "../views/MainPanel";

import "./attachErrorHandler";

const App = kind({
  name: "App",

  styles: {
    className: "app",
  },

  render: (props) => (
    <Panels {...props}>
      <MainPanel />
    </Panels>
  ),
});

export default App;
