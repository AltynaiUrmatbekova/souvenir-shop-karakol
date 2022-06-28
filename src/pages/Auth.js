import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { start } from "../redux/authSlice";

export default function Auth() {
  const dispatch = useDispatch();
  const { error, localId } = useSelector(store => store.auth);
  const navigate = useNavigate();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(start({
      email: formData.get('email'),
      password: formData.get('password'),
      method: event.nativeEvent.submitter.innerText === "Sign up" ? 'signup' : 'signin',
    }));
  }

  if (localId !== null) {
    navigate('/');
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <strong style={{ color: "red" }}>{error}</strong>
  }

  return (
    <form onSubmit={onAuthStart}>
      {errorOutput}
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>

      <button>Sign in</button>
      <button>Sign up</button>
    </form>
  );
}