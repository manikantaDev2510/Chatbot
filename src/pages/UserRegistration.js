import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import the CSS file

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [step, setStep] = useState(1); // Track registration step (1 = form, 2 = verification)

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Send verification email
      await sendEmailVerification(user);
      console.log(user);
      
      // Show success message for email verification
      toast.success(
        "Verification email sent! Please check your inbox to verify your email.",
        {
          position: "top-center",
          autoClose: 5000, // Notification will auto-close after 5 seconds
        }
      );

      if (user) {
        // Store user data in Firestore
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: name,
          photo: "",
        });
      }

      // Move to verification step
      setStep(2);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div>
      {step === 1 && (
        <form onSubmit={handleRegister}>
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/login">Login</a>
          </p>
        </form>
      )}

      {step === 2 && (
        <p>
          Please check your email for the verification link before logging in.
        </p>
      )}
    </div>
  );
}

export default Register;
