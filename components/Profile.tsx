import Image from "next/image";

export default function Profile() {
    return (
        <>
            <div className="pt-10 ml-10 relative w-100">
                <div className="flex container justify-between align-middle items-center">
                    <div>
                        <h1 className="text-3xl font-bold lg:text-8xl">Tom Sonntag</h1>
                        <div className="inline-flex overflow-hidden">
                            <div className="font-bold">
                                <p className="text-greytext pt-2 font-semibold lg:text-2xl">vocational student - computer
                                    science</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row w-44 h-44 mt-auto rounded-full bg-red overflow-hidden invisible lg:visible">
                        <Image className='pt-2' src='/portrait_tom_big.png' alt='Portrait' width='172'
                               height='172'/>
                    </div>
                </div>

            </div>
        </>
    )
}