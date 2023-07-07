
import React from "react";
import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wq73kff",
        "template_58tyiop",
        form.current,
        "QHypGtniFdY1k0Cd2"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
    <div className="center ">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 fs-5">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3 ">
              <label  htmlFor='user_name ' className="text-dark">الاسم:</label>
              <input className="form-control  mt-2" type="text" name="user_name" id="user_name" />
              </div>
              <div className="mb-3">
              <label htmlFor="user_email" className="text-dark">الايميل:</label>
              <input  className="form-control mt-2" type="email" name="user_email" id="user_email" />
              </div>
             <div className="mb-3">
             <label htmlFor="message" className="text-dark">اكتب رسالتك:</label>
              <textarea  className="form-control mt-2" rows="6" cols="25" name="message" id="message" />
             </div>
              <div className="m-auto   d-flex justify-content-center">
              <input  className="btn btn-danger px-4 py-2  my-2" type="submit" value="إرسال" />
              </div>
            </form>
          </div>
          <div className="col-md-6">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.325935384601!2d31.31552721511543!3d30.056190481878104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e5708a11e59%3A0x9608668522f422c7!2sFaculty%20of%20Engineering%2C%20Al-Azhar%20University%2C%20Girls%E2%80%99%20Branch%2C%20Cairo!5e0!3m2!1sen!2seg!4v1683228965987!5m2!1sen!2seg"
             className="w-100"
              height={440}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
