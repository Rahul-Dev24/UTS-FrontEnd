import Nav from "../navBar/Nav";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="loginContainer">
        <Nav language={false} />
        <div className="loginfooter">
          <div className="doc">
            <img src="/get_started_uts.png" alt="" width={30} height={40} />
            <p>Getting Started</p>
          </div>
          <div className="helpline">
            <img src="/helpline_uts.png" alt="" />
            <p>Helpline</p>
          </div>
          <div className="faq">
            <img src="/faq_uts.png" alt="" />
            <p>FAQs</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
