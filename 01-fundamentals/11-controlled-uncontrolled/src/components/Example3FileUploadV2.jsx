import { memo, useState } from 'react';
import loadImage from 'blueimp-load-image';

// https://www.npmjs.com/package/blueimp-load-image

const FileUpload = () => {
  const [base64, setBase64] = useState('');

  const atFileChange = async (e) => {
    const file = e.target.files[0];
    const result = await loadImage(file, { maxWidth: 300, canvas: true });
    setBase64(result.image.toDataURL());
  };

  return (
    <section data-name="Example3">
      <input type="file" accept=".jpg,.png" onChange={atFileChange} />
      {base64 && <img src={base64} alt="" />}
    </section>
  );
};

export default memo(FileUpload);
