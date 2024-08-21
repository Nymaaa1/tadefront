import { NavLink } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div class="error-container">
      <div class="error-box">
        <h1>404</h1>
        <p>Хуудас олдсонгүй</p>
        <NavLink to="/">Буцах</NavLink>
      </div>
    </div>
  );
}
