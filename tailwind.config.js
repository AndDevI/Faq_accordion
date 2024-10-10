tailwind.config = {
    theme: {
        fontFamily: {
            'workSans':['Work Sans', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'imgDesktop': "url('./assets/images/background-pattern-desktop.svg')",
                'imgMobile': "url('./assets/images/background-pattern-mobile.svg')",
            },
            colors: {
                'lightPink':'#F9F0FF',
                'grayishPurple':'#8C6991',
                'darkPurple':'#2F1533',
            },       
        }
    }
}