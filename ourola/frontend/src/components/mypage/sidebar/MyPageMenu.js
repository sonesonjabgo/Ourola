import "../../../style/mypage/sidebar/MyPageMenu.css";

const MyPageMenu = (props) => {
  //console.log(menu);
  const menu = props.menu;
  const onMenuClick = props.onMenuClick;

  const handleMenuClick = (title) => {
    onMenuClick(title);
  };

  return (
    <div className="menuItem">
      {menu.map((it) => (
        <div className="menuTitle" key={it.id}>
          <button className="menuBtn" onClick={() => handleMenuClick(it.title)}>
            {it.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyPageMenu;
