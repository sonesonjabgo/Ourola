import { Link } from "react-router-dom";

const MyPageMenu = ({ menu }) => {
  //console.log(menu);
  return (
    <div>
      {menu.map((it) => (
        <Link key={it.id}>
          {it.title}
          <br />
        </Link>
      ))}
    </div>
  );
};

export default MyPageMenu;
