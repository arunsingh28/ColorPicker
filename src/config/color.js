const Color = (color) => {
    const nutral_color = ["#3b46e8", "#ffffff", "#000000", "#6c813a"];

    nutral_color.map((item) => {
        if (item === color) {
            console.log(item);
            // return diffrent color
            return "#fff";
        }
    });

    // return suggested color
    // return color;
};

export default Color;