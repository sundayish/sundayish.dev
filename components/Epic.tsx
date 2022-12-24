import Navbar from "./Navbar";
import Profile from "./Profile";

export default function Epic(){
    return(
        <>
            <div className="h-screen w-5/6 mx-auto">
                <Navbar />
                <Profile />
            </div>

        </>
    );
}