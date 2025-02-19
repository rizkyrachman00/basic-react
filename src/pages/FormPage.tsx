import { useRef, useState } from "react";

const FormPage = () => {
  // dom manipulation / selector === useRef()
  // const ref = document.getElementById("full-name")

  // Uncontrolled component/input
  const inputRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);

  // controlled component/input
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleSubmit = () => {
    // Uncontrolled component/input
    // mengambil value dari input
    // const fullNameFormValue = inputRef.current?.value;
    // const emailFormValue = inputEmailRef.current?.value;
    // alert(
    //   "form submited: " +
    //     fullNameFormValue +
    //     " " +
    //     "Email : " +
    //     " " +
    //     emailFormValue
    // );

    // const usernameValidation = usernameInput.length < 3;
    const passwordValidation = passwordInput.length < 8;

    // if (usernameValidation || passwordValidation) {
    //   alert(
    //     "Username must be at least 3 characters and Passwords must be at least 8 characters"
    //   );

    //   return;

    // }

    // if (usernameValidation) {
    //   setUsernameErrorMessage("Username must be at least 3 characters");
    // }

    if (passwordValidation) {
      setPasswordErrorMessage("Password must be at least 8 characters");
    }

    // ....
  };

  return (
    <div>
      <h1>Form Page</h1>

      <h3>Username : {usernameInput}</h3>
      <h3>Password : {passwordInput}</h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "200px",
        }}
      >
        {/* input menggunakan uncontrolled */}
        {/* <input type="text" id="full-name" ref={inputRef} /> */}

        {/* menggunakan controlled component */}

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => {
            setUsernameInput(e.target.value);

            const usernameValidation = e.target.value.length < 3;

            if (usernameValidation) {
              setUsernameErrorMessage("Username must be at least 3 characters");
            } else {
              setUsernameErrorMessage("");
            }
          }}
          value={usernameInput}
        />
        <span style={{ color: "red" }}>{usernameErrorMessage}</span>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPasswordInput(e.target.value)}
          value={passwordInput}
        />
        <span style={{ color: "red" }}>{passwordErrorMessage}</span>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FormPage;
