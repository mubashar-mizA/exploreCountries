export default function Header(){
    return(
        <>
            <div className="shadow-md flex justify-center p-2
                max-w-xlg items-center
                mx-auto font-nunito text-xl
            ">
                <div className="ml-3 flex items-center">
                    <p className="font-nunito text-2xl">Where in the world</p>
                    <p className="ml-6 mt-1 hover:cursor-pointer "><ion-icon name="moon-outline"></ion-icon></p>
                </div>
            </div>
        </>
    )
}