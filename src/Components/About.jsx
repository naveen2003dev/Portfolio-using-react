import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
          I have some experience in working with web technologies, such as HTML, CSS, JavaScript, Bootstrap, and more. I have also learned about web fundamentals such as SEO, accessibility, and performance optimization. <br />
          I am always eager to learn new skills and technologies, and I am
          looking for opportunities to work on real-world projects and gain more
          experience in web development.
        </p> <br />
        <p className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum atque impedit non magni molestiae in blanditiis harum quae rem error vitae doloremque similique laborum est nesciunt, consequuntur suscipit ab, maxime nostrum mollitia tempora natus! Dolores optio omnis, quae at architecto odit quidem beatae magnam impedit nulla nihil temporibus provident harum.</p>
      </div>
    </div>
  );
};

export default About;
