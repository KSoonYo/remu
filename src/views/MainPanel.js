// import Button from "@enact/sandstone/Button";
import kind from "@enact/core/kind";
import { Header, Panel } from "@enact/sandstone/Panels";
import AudioMaker from "../components/AudioMaker";
import BoardStyle from "./MainPanel.module.css";

const MainPanel = kind({
  name: "MainPanel",
  styles: {},

  render: (props) => {
    return (
      <Panel
        {...props}
        css={{
          panel: BoardStyle.board,
        }}
        header={
          <Header css={{ header: BoardStyle.header }} noCloseButton centered>
            <title> Welcome to REMU! </title>
          </Header>
        }
      >
        <AudioMaker />
      </Panel>
    );
  },
});

export default MainPanel;
