import cx from 'classnames';
import PropTypes from 'prop-types';
import style from './MyButton.module.scss';

const MyButton = (props) => {
  const {
    onClick,
    children,
    rounded,
    className,
    color = 'black',
    variant = 'primary',
  } = props;
  return (
    <button
      type="button"
      style={{ color }}
      className={cx(style.root, className)}
      data-variant={variant}
      data-rounded={rounded}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

MyButton.propTypes = {
  onClick: PropTypes.func,
  /**
   * 就是 rounded
   */
  rounded: PropTypes.bool,
  /**
   * 就是 color
   */
  color: PropTypes.string,
  // children: React.children,
  /**
   * 可以傳 className
   */
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default MyButton;
