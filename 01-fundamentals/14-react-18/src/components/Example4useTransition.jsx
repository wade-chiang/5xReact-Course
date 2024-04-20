import { useState, useTransition } from 'react';
import ExpensiveView from './ExpensiveView';

const Example4 = () => {
  const [tab, setTab] = useState(0);
  const [isPending, startTransition] = useTransition();
  const atSelectTab = (nextTab) => {
    // setTab(nextTab); // Bad
    //* // Good
    startTransition(() => {
      setTab(nextTab);
    });
    // */
  };
  return (
    <section data-name="Example4useTransition">
      <div>
        <button
          data-active={tab === 0}
          className="my-btn"
          onClick={() => {
            atSelectTab(0);
          }}
        >
          Tab0
        </button>
        <button
          data-active={tab === 1}
          className="my-btn"
          onClick={() => {
            atSelectTab(1);
          }}
        >
          Tab1(slow)
        </button>
      </div>
      <div style={{ opacity: isPending ? 0.3 : 1 }}>
        {tab === 0 && <div className="bg-red p-2">Content1</div>}
        {tab === 1 && <ExpensiveView value={400} />}
      </div>
    </section>
  );
};

export default Example4;
