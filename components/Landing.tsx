import Image from "next/image";

export default function LandingPage(){
    return(
        <>
            <div className="h-screen">
                <div>
                    <h1 className="text-9xl font-bold">Hello.</h1>
                    <div className="inline-flex overflow-hidden">
                        <Image width='31' height='5' src="/../public/white-line.svg.png"  alt="White dash" className="h-1 mt-4"/>
                        <div className="text-2xl font-bold">
                            <p>Tom Sonntag</p>
                            <p className="text-greytext pt-5">Design led, <br/>creative mind.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}