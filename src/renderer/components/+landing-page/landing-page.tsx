import "./landing-page.scss";
import React from "react";
import { observer } from "mobx-react";
import { clusterStore } from "../../../common/cluster-store";
import { Workspace, workspaceStore } from "../../../common/workspace-store";
import { WorkspaceOverview } from "./workspace-overview"
@observer
export class LandingPage extends React.Component {

  get workspace(): Workspace {
    return workspaceStore.currentWorkspace;
  }
  
  render() {
    const clusters = clusterStore.getByWorkspaceId(workspaceStore.currentWorkspaceId);

    const existingWorkspaces = workspaceStore.enabledWorkspacesList.map(w => ({value: w.name, label: w.name}));
    return (
        <div className="LandingPage flex auto">
          <div className="flex column">
            <h2 className="flex center gaps">
              <span className="box left">Workspace: {this.workspace.name}</span>       
            </h2>
            <WorkspaceOverview workspace={this.workspace}/>
          </div>
        </div>
    );
  }
}
