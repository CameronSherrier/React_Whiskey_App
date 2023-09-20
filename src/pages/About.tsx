function About() {
  return (
    <>
    <section className="bg-black text-white flex flex-col text-center h-screen">
        <div id="gradient"> </div>
        <div>
            <h1>My About Page</h1>
        </div>
        <div className="bg-black text-white flex flex-row pb-5 mt-6">
            <div className="flex flex-col flex-grow-1">
                <div>
                    <h1>Cameron Sherrier</h1>
                </div>
                <p className="text-align-center mt-10">Thank you Coding Temple for everything!
                  I've learned so much since the beginning of March 2023 and couldn't
                  imagine being here without the assistance from the Instructors. I can't
                  wait to take what I have learned with me on my new journey!
                </p>
                <div>
                    <a href="#"><i className="fa-solid fa-graduation-cap fa-bounce"></i></a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About