import { useState, useRef } from 'react';
import cx from 'classnames';
import Form1 from './Form1';

const Example3 = () => {
  const [step, setStep] = useState(0);
  const form1Ref = useRef(null);

  const atNextStep = () => {
    console.log('atNextStep');
    form1Ref.current
      .submit()
      .then(() => {
        setStep((prev) => prev + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section data-name="Example3">
      <div className={cx({ 'd-none': step !== 0 })}>
        <Form1 ref={form1Ref} />
      </div>

      <div className="d-flex">
        <button
          disabled={step === 0}
          className="btn btn-link"
          onClick={() => setStep((prev) => prev - 1)}
        >
          PrevStep
        </button>
        <button disabled={step === 2} className="btn btn-primary" onClick={atNextStep}>
          NextStep
        </button>
      </div>
    </section>
  );
};

export default Example3;
