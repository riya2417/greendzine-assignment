import Link from "next/link";

const App=()=>{
	return(
		<div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        background:
          "transparent linear-gradient(180deg, #000000 0%, #000E09 100%) 0% 0% no-repeat padding-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",

          color: "white",
          position: "relative",
        }}
      >
        <h2>Welcome to GreenDzine</h2>
        <Link href="/login" passHref legacyBehavior>
          <a
            href="/login"
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              background:
                "transparent linear-gradient(180deg, #00FF2580 0%, #000000 100%, #36A54680 100%) 0% 0% no-repeat padding-box",
              color: "white",
              fontSize: "1rem",
            }}
          >
            Please Login to continue
          </a>
        </Link>
      </div>
    </div>
	)
}

export default App 