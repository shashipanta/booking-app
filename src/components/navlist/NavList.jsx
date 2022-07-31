import "./navList.css";

const NavList = () => {
    let citiesInfo = [
        {
            cityName: "Jersey",
            totalProperty: 89
        },
        {
            cityName: "Phuket Province",
            totalProperty: 5494
        },
        {
            cityName: "England",
            totalProperty: 73967
        },
        {
            cityName: "Ras Al Khaimah",
            totalProperty: 113
        },
        {
            cityName: "Ibiza",
            totalProperty: 1640
        },
        {
            cityName: "Guernsey",
            totalProperty: 61
        },
        {
            cityName: "Isle of Wright",
            totalProperty: 934
        },
        {
            cityName: "Tenerife",
            totalProperty: 9603
        },
        {
            cityName: "Mykonos",
            totalProperty: 1452
        },
        {
            cityName: "Uttar Pradesh",
            totalProperty: 4370
        },
        {
            cityName: "Zanzibar",
            totalProperty: 834
        },
        {
            cityName: "Santorini",
            totalProperty: 1762
        },
        {
            cityName: "Bihar",
            totalProperty: 761
        },
        {
            cityName: "Cornwall",
            totalProperty: 5275
        },
        {
            cityName: "Bali",
            totalProperty: 12681
        },
        {
            cityName: "Lake District",
            totalProperty: 2403
        },
        {
            cityName: "Bora Bora",
            totalProperty: 59
        },
        {
            cityName: "Texel",
            totalProperty: 411
        },
        {
            cityName: "Hawaii",
            totalProperty: 5515
        },


    ]
    let cityContainer = citiesInfo.map(
        (singleCity) => {
            return (
                <>
                <div className="navlist__singleContent">
                    <a href="#" className="city__name">{singleCity.cityName}</a>
                    <span className="city__hotels">{singleCity.totalProperty.toLocaleString()} Properties </span>
                </div>
                </>
            )
        }
    )

    return (
        <>
            <nav className="navlist-container">
                <div className="navlist__header">
                    <button className="navlist__btn active-btn">Regions</button>
                    <button className="navlist__btn">Cities</button>
                    <button className="navlist__btn">Places of Interest</button>
                </div>
                <div className="navlist__content">
                    {cityContainer}
                </div>
            </nav>
        </>
    )
}

export default NavList;