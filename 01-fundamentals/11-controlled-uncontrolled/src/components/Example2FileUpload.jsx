import { memo, useState } from 'react';

const FileUpload = () => {
  const [base64, setBase64] = useState('');

  const atFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      setBase64(evt.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section data-name="Example2">
      <input
        type="file"
        accept=".jpg,.png"
        onChange={atFileChange}
        name="file"
      />
      {base64 && <img src={base64} alt="" />}
    </section>
  );
};

export default memo(FileUpload);
