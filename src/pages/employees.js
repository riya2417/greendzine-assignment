const PRODUCTIVITY_DATA = [
  {
    day: "Monday",
    productivity_in_pct: "4%",
  },
  {
    day: "Tuesday",
    productivity_in_pct: "92%",
  },
  {
    day: "Wednesday",
    productivity_in_pct: "122%",
  },
  {
    day: "Thursday",
    productivity_in_pct: "93%",
  },
  {
    day: "Friday",
    productivity_in_pct: "89%",
  },
  {
    day: "Saturday",
    productivity_in_pct: "98%",
  },
];

export default function Dashboard() {
  return (
    <div
      style={{
        height: "100vh",
        background:
          "transparent linear-gradient(180deg, #000000 0%, #000E09 100%) 0% 0% no-repeat padding-box",
        color: "white",
        position: "relative",
      }}
    >
      <div style={{ padding: 16 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <img src="/Group-46.png" alt="Profile page icon" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img src="/moptro-logo.png" alt="MOPTro" />
          <div
            style={{
              width: 35,
              height: 35,
              borderRadius: 18,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#5E5E5EB5 0% 0% no-repeat padding-box",
              mixBlendMode: "normal",
              border: "1px solid #FFFEFE00",
            }}
          >
            <p>4</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 36,
          }}
        >
          <input
            type="text"
            placeholder="Employee Productivity Dashboard"
            style={{
              padding: 8,
              background: "#1A2C2C99 0% 0% no-repeat padding-box",
              mixBlendMode: "normal",
              borderRadius: 48,
              width: "100%",
            }}
          />
        </div>
        <div>
          {PRODUCTIVITY_DATA.map((data, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h6>{`Productivity on ${data.day}`}</h6>
                <div style={{ width: 480 }}>
                  <div
                    style={{
                      width: 240,
                      height: 6,
                    }}
                  >
                    <div
                      style={{
                        height: 6,
                        borderRadius: 3,
                        background: "#36A54680 0% 0% no-repeat padding-box",
                        width: `${data.productivity_in_pct}`,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p>{data.productivity_in_pct}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            background:
              "transparent linear-gradient(262deg, #0F2323 0%, #0F2323 40%) 0% 0% no-repeat padding-box",
            boxShadow: "inset 8px 4px 4px #00000040",
          }}
        >
          <a
            href="/dashboard"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p>Home</p>
          </a>
          <a
            href="/employees"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p>Profile</p>
          </a>
        </div>
      </div>
    </div>
  );
}
