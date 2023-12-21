export default function AuthPage(props) {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    props.onAuth({ username: value, secret: value });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input type="text" name="username" className="auth-input" />
          <button type="submit" className="auth-button">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}
