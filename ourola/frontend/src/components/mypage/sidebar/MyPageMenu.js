import { Link } from "react-router-dom";
import "../../../style/mypage/sidebar/MyPageMenu.css";

const MyPageMenu = ({ menu }) => {
  //console.log(menu);
  return (
    <div className="menuItem">
      {menu.map((it) => (
        <div className="menuTitle" key={it.id}>
          <Link>
            <span>{it.title}</span>
            <br />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MyPageMenu;
