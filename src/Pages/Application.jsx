import React from "react";

export default function Application() {
  return (
    <section className="container">
      <form id="my-form">
        <h1>Application Form</h1>
        <div class="msg"></div>
        <div>
          <label htmlFor="name">First Name:</label>
          <input type="text" id="fName" />
        </div>
        <div>
          <label htmlFor="name" aria-required="true">
            Last Name:
          </label>
          <input type="text" id="lName" />
        </div>
        <div>
          <label htmlFor="email" aria-required="true">
            Email:
          </label>
          <input type="text" id="email" />
        </div>
        <div>
          <label HtmlFor="name" aria-required="true">
            DOB:
          </label>

          <input type="date" id="dob" />
        </div>
        <br />
        <div>
          <label for="gender">Gender:</label>
          <label for="male">Male</label>
          <input type="radio" id="male" name="gender" value="Male" />
          <label for="female">Female</label>
          <input type="radio" id="female" name="gender" value="Female" />
          <br />
          <br />
        </div>
        <div id="checkbox">
          <label htmlFor="courses">Courses:</label>
          <label htmlFor="Javascript">Javascript</label>
          <input
            name="courses"
            type="checkbox"
            id="Javascript"
            value="Javascript"
          />
          <label htmlFor="Python">Python</label>
          <input name="courses" type="checkbox" id="Python" value="Python" />
          <label htmlFor="PHP">PHP</label>
          <input name="courses" type="checkbox" id="PHP" value="PHP" />
          <label for="C++">C++</label>
          <input name="courses" type="checkbox" id="c++" value="C++" />
        </div>
        <input class="btn" type="submit" value="Submit" />
      </form>

      <ul id="users"></ul>
    </section>
  );
}
