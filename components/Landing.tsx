export default function LandingPage(){
    return(
        <>
            <div className="h-screen relative flex items-center justify-center">
                <div className="absolute left-72 top-1/4">
                    <h1 className="text-9xl font-bold">Hello.</h1>
                    <div className="inline-flex overflow-hidden">
                        <div className="my-4 mr-4 ml-2">
                            <svg width="31" height="5" viewBox="0 0 31 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="2.5" x2="30.5" y2="2.5" stroke="white" strokeWidth="4"/>
                            </svg>
                        </div>
                        <div className="text-2xl font-bold">
                            <p>Tom Sonntag</p>
                            <p className="text-greytext pt-5">Design led, <br/>creative mind.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute w-128 h-128 rounded-full shadow shadow-inner shadow-white"></div>
            </div>

        </>
    );
}