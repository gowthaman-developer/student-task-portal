import React, { Component } from "react";
import { Divider } from "antd";

import StudentPageLayout from "../Layout/StudentPageLayout";

/* import Classes from "./Assignment.module.css";
import AssignmentList from "../../UI Components/AssignmentList/AssignmentList"; */
import AssignmentsTab from "../../UI Components/AssignmentsTab/AssignmentsTab";

// const { TabPane } = Tabs;

const data = [
  {
    title: "Assignment 1",
    desc: "pizza delivery Application",
  },
  {
    title: "Assignment 2",
    desc: "stack Overflow clone Application",
  },
  {
    title: "Assignment 3",
    desc: "Diary manager Application",
  },
  {
    title: "Assignment 4",
    desc: "Book keeping Application",
  },
  {
    title: "Assignment 5",
    desc: "web scrapping-E commerce",
  },
];

class AssignmentHome extends Component {
  state = {
    tabData: [
      "23.01.2020",
      "24.01.2020",
      "25.01.2020",
      "26.01.2020",
      "27.01.2020",
    ],
  };
  render() {
    return (
      <StudentPageLayout menuSelect="3">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            overflow: "scroll",
            flexWrap: "wrap",
          }}
        >
          <AssignmentsTab
            title="On-Going"
            data={data}
            tabData={this.state.tabData}
          />
          {window.innerWidth === 650 ? <Divider /> : null}
          <AssignmentsTab
            data={data}
            tabData={this.state.tabData}
            isCompleted={true}
            title="Completed"
          />
        </div>
      </StudentPageLayout>
    );
  }
}

export default AssignmentHome;
