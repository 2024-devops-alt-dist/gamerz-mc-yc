import { Outlet } from "react-router-dom";

function MainLayout() {


    return (
        <>
                <header className="w-full mb-6 mt-4">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <span className="text-3xl text-primary">GamerZ</span>
                        </div>
                    </div>
                </header>

                <main data-theme="dark" className="max-w-[1280px] w-full mx-auto flex items-center justify-center">
                    <Outlet />
                </main>
        </>
    )
}

export default MainLayout;
