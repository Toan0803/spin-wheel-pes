import "./style.scss";

export default function HomePage() {
    const listWheel = [
        {
            color: "#ecef18",
            name: "Hà Lan",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",
        },
        {
            color: "#f018e4",
            name: "Nigeria",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/SSC_Neapel.svg/800px-SSC_Neapel.svg.png",
        },
        {
            color: "#7718f0",
            name: "Bỉ",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png",
        },
        {
            color: "#1895f0",
            name: "Brazil",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
        },
        {
            color: "#18e6f0",
            name: "Pháp",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        },
        {
            color: "#18f0bc",
            name: "Thụy Sỹ",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/800px-FC_Internazionale_Milano_2021.svg.png",
        },
        {
            color: "#18f037",
            name: "Ghana",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/1200px-Leicester_City_crest.svg.png",
        },
        {
            color: "#c5f018",
            name: "Tây bán nhà",
            image: "https://upload.wikimedia.org/wikipedia/vi/thumb/c/c7/Logo_Real_Madrid.svg/1432px-Logo_Real_Madrid.svg.png",
        },
        {
            color: "#f0b318",
            name: "Comlombia",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/LogoASMonacoFC2021.svg/1200px-LogoASMonacoFC2021.svg.png",
        },
        {
            color: "#f03f18",
            name: "Bồ",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Juventus_Logo.png/1200px-Juventus_Logo.png",
        },
        {
            color: "#591608",
            name: "Chile",
            image: "https://upload.wikimedia.org/wikipedia/en/1/12/Logo_Olympique_Lyonnais_2022.png",
        },
        {
            color: "#356434",
            name: "Thụy Điển",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/640px-Logo_of_AC_Milan.svg.png",
        },
        {
            color: "#f77f09",
            name: "Đức",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
        },
        {
            color: "#ff66cc",
            name: "Serbia",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/1200px-Valenciacf.svg.png",
        },
        {
            color: "#ccffcc",
            name: "Thổ nhỹ kì",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/S.S._Lazio_badge.svg/1200px-S.S._Lazio_badge.svg.png",
        },
        {
            color: "#003366",
            name: "Đức",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png",
        },
        {
            color: "#ff0000",
            name: "Anh",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png",
        },
        {
            color: "#993366",
            name: "Hàn Quốc",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
        },
        {
            color: "#009999",
            name: "AS Ba Lan",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/1200px-AS_Roma_logo_%282017%29.svg.png",
        },
        {
            color: "#6699ff",
            name: "Senegal",
            image: "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
        },
        {
            color: "#ffff00",
            name: "Ý",
            image: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
        },
        {
            color: "#6600cc",
            name: "Alectico Uruguay",
            image: "https://upload.wikimedia.org/wikipedia/vi/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png",
        },
        {
            color: "#6600cc",
            name: "Bà Aghentina",
            image: "https://upload.wikimedia.org/wikipedia/vi/thumb/9/91/FC_Barcelona_logo.svg/1200px-FC_Barcelona_logo.svg.png",
        },
        {
            color: "#663300",
            name: "Austria",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Ajax_Amsterdam.svg/640px-Ajax_Amsterdam.svg.png",
        },
    ];

    const spinStart = () => {
        const wheel = document.querySelector(".wheel") as any;
        const curentValue =
            +wheel["style"]["transform"]?.match(/\d/g)?.join("") || 0;
        const value = curentValue + Math.ceil(Math.random() * 3600);

        wheel["style"]["transform"] = `rotate(${value}deg)`;
    };
    return (
        <div className="body-home">
            <div className="container">
                <div className="spinBtn" onClick={spinStart}>
                    Spin
                </div>
                <div className="wheel">
                    {listWheel.map((item, index) => {
                        return (
                            <div
                                className="number"
                                key={index}
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    transform: `rotate(${
                                        (360 / listWheel.length) * (index + 1)
                                    }deg)`,
                                }}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
