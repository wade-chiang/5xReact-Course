import { useState, Suspense, lazy, useTransition } from 'react';

const Spinner = () => <div className="my-spinner" />;

const Comments = lazy(() => import('./Comments'));
const LargeFile = lazy(() => import('./LargeFile'));

const Example = () => {
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
    <section data-name="Example5Suspense">
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
          Tab1(LargeFile)
        </button>
      </div>
      <div style={{ opacity: isPending ? 0.3 : 1 }}>
        <Suspense fallback={<Spinner />}>
          {tab === 0 && <Comments />}
          {tab === 1 && <LargeFile />}
        </Suspense>
      </div>
    </section>
  );
};

export default Example;
