/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  // Link,
  useParams,
  useNavigate,
} from 'react-router-dom';
import style from './Overlay.module.scss';

const Overlay = () => {
  // TODO
  const params = useParams();
  // TODO
  const navigate = useNavigate();

  const atCloseClick = () => {
    // TODO
    navigate('/video');
  };

  return (
    <div className={style.overlay}>
      <div className="aspect-video w-[80vw]">
        <iframe
          src={`http://www.youtube.com/embed/${params.id}`}
          title="vid"
          frameBorder="0"
          className="w-full h-full"
        />
      </div>
      <button className={style.closer} onClick={atCloseClick}>
        x
      </button>
    </div>
  );
};

export default Overlay;
