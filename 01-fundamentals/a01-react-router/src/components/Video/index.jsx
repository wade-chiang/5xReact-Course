import { Link, Outlet } from 'react-router-dom';

const VIDEO_LISTS = [
  { vid: 'oUipiVwEUrI', img: '/img/pic03.jpg' },
  { vid: 'Ghrk0tVwx14', img: '/img/pic04.jpg' },
  { vid: 'gf0fLrzchBk', img: '/img/pic05.jpg' },
  { vid: 'pAyMDW2we1s', img: '/img/pic06.jpg' },
];

const Video = () => {
  return (
    <>
      <section data-name="Video">
        <div className="grid grid-cols-2 gap-2">
          {VIDEO_LISTS.map(({ vid, img }) => (
            <div key={vid}>
              <Link className="image" to={`/video/${vid}`}>
                <img src={img} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <div className="videos__outlet">
        {/* TODO */}
        <Outlet />
      </div>
    </>
  );
};

export default Video;
