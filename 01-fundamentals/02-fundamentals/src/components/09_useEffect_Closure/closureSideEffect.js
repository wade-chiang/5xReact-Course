let memoryUseEffect;
const simulationUseEffect = (cb) => {
  if (!memoryUseEffect) {
    memoryUseEffect = cb;
    cb();
  }
};

function FakeComponent(newValue) {
  console.log(
    `%cFakeComponent:${newValue}`,
    'background:white;color:black;font-size:20px',
  );
  simulationUseEffect(() => {
    setInterval(() => {
      console.log(
        `%ctimeout:${newValue}`,
        'background:white;color:black;font-size:20px',
      );
    }, 2000);
  }, []);
}

FakeComponent(0);
FakeComponent(1);
FakeComponent(2);
FakeComponent(100);
