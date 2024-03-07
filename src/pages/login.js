import { useRouter } from "next/router";

const USERS = [
  {
    name: "Arjun",
    employee_id: "1",
    email: "arjun@example.com",
    password: "pass@123",
  },
  {
    name: "Mahesh",
    employee_id: "2",
    email: "mahesh@example.com",
    password: "pass@123",
  },
];

export default function Login() {
  const router = useRouter();

  const onLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const user = USERS.find((user) => user.email === email);
    if (user && user.password === password) {
      router.push("/o/dashboard");
    } else {
      alert("Login unsuccessful");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 48,
        paddingBottom: 48,
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <div>
        <img
          src={"/Group-3.png"}
          alt="GreeenDzine"
          style={{
            width: 90,
            height: 90,
          }}
        />
      </div>
      <div>
        <h3
          style={{
            color: "#36A546CC",
            font: "normal normal normal 16px/21px Mulish",
          }}
        >
          We are Electric
        </h3>
      </div>
      <div>
        <form
          onSubmit={onLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 480,
            paddingTop: 24,
          }}
        >
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            style={{
              border: "1px solid",
              borderColor: "grey",
              padding: 8,
              borderRadius: 24,
              margin: 8,
              width: "100%",
              background: "#1F191966 0% 0% no-repeat padding-box",
              boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
              mixBlendMode: "normal",
              color: "white",
            }}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            required
            style={{
              border: "1px solid",
              borderColor: "grey",
              padding: 8,
              borderRadius: 24,
              margin: 8,
              width: "100%",
              background: "#1F191966 0% 0% no-repeat padding-box",
              boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
              mixBlendMode: "normal",
              color: "white",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              margin: 8,
              padding: 8,
              borderRadius: 24,
              fontSize: 16,
              fontWeight: "bold",
              border: "2px solid #8CFF0026",
              background:
                "transparent linear-gradient(180deg, #00FF2580 0%, #000000 100%, #36A54680 100%) 0% 0% no-repeat padding-box",
              color: "#FFFFFF8C",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
