import { Outlet } from "react-router-dom";

function MainLayout() {


    return (
        <>
            <header>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-3xl text-primary">Gamerz</span>
                    </div>
                </div>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout;
