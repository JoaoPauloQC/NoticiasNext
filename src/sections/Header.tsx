import Login from "@/components/Login"

export const Header = () => {


    return (

        <div className="header__container h-2">
            <div className="wrapper">
                <div className="header__content flex justify-between">
                    <div className="header__left">

                    </div>
                    <div className="header__right">
                        <Login />
                    </div>
                </div>

            </div>
        </div>


    )

} 

