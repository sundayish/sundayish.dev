import Card from "./Flipcard";

export default function GridLayout(){
    return(
        <>
        <div className="grid place-items-center min-h-screen">
            <div className="p-4 max-w-5xl grid gap-2.5 grid-cols-2 lg:grid-cols-4 text-white">
                <h1 className="flex items-center text-3xl sm:text-5xl font-extrabold sm:self-center sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-2.5 lg:col-span-3 lg:grid-cols-3"><span>Tom Sonntag</span></h1>
                <p className="sm:row-start-2 sm:col-start-2 sm:self-center lg:col-start-1 lg:col-span-2 lg:pr-6 lg:text-lg">
                    Currently studying as a bachelor student majoring in Computer Science. Working for <span className="underline decoration-2 decoration-blue-500 font-semibold">SAP</span> as a dual student.
                    Means I'm working 3 months full-time in a dedicated department and then I go back studying 3 months full-time in uni.
                </p>
                <div className="h-40 sm:h-auto sm:square ">
                    <Card imgSrc={"/portrait_tom_big.png"} text={"This is me. A curious learner. A quick adapter and tech nerd."} imgAlt={"Self portrait"} />
                </div>
                <div className="h-40 sm:h-auto sm:square">
                    <Card imgSrc={"/Tom_golf.png"} text={"That's me too. A sports enthusiast. A golfer. Driven by numbers."} imgAlt={"Self portrait"} />
                </div>
                <div className="h-40 sm:h-auto sm:square">
                    <Card imgSrc={""} text={"Spotify: this will become a webhook to display 'Now playing'."} imgAlt={"Web-hook"} flipped={true} />
                </div>
                <div className="h-40 bg-blue-500 sm:h-auto sm:square sm:rounded-md"></div>
                <div className="h-40 sm:h-auto sm:square">
                    <Card imgSrc={"/tom_fashion.png"} text={"Oh and that's me again. I'm super into fashion and got a project idea in my mind."} imgAlt={"Self portrait"} />
                </div>
                <div className="h-40 bg-blue-500 sm:h-auto sm:square sm:rounded-md"></div>
                <div className="h-40 bg-blue-500 sm:h-auto sm:square sm:rounded-md"></div>
                <div className="h-40 sm:h-auto sm:square">
                    <Card imgSrc={"/tom_presentation.png"} text={"I love speaking and presenting. Get in touch with me if you want to share ideas or just talk."} imgAlt={"Self portrait"} />
                </div>
                <p className="self-center lg:text-lg">Contact me via <a href="mailto:tom@sundayish.dev" className="underline decoration-2 decoration-blue-500 font-semibold">E-Mail.</a> I'd love to speak about your or my ideas and discuss nerdy tech stuff!</p>
            </div>
        </div>
        </>
    );
}