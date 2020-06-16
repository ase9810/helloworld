import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Steps, Button, message } from "antd";

const { Step } = Steps;



function Index() {
  
  const [state, setState] = useState({ current: 0 });

  const steps = [
    {
      title: "First",
      content: ["First-content"]
    },
    {
      title: "Second",
      content: ["Second-content"]
    },
    {
      title: "Last",
      content: ["Last-content"]
    }
  ];

  function next() {
    const current = state.current + 1;
    setState({current});
    console.log(state)
  }

  function prev() {
    const current = state.current - 1;
    setState({current});
    console.log(state)
  }

  const { current } = state;
  return (
    <div>
      <Steps current={current} direction="horizontal" size="small">
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
        {console.log(steps)}
      </Steps>
      <div className="steps-content">{steps[current].content}
      {console.log(steps[current].content)}
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}

export default Index;
