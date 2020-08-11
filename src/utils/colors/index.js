const mainColors ={
    green1:'#0bcad4',
    green2:'#EDFCFD',
    dark1:'#112340',
    dark2:'#495A75',
    dark3:'#8092af',
    grey1:'#7d8797',
    grey2:'#E9E9E9',
    grey3:'#edeef0',
    blue1:'#0066cb'
}

export const colors ={
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    tertiary:mainColors.blue1,
    white:'white',
    black: 'black',
    disable: mainColors.grey3,
    text:{
        primary:mainColors.dark1,
        secondary:mainColors.grey1,
        active:mainColors.green1,
        inactive:mainColors.dark2,
        subTitle:mainColors.dark3
    },
    button:{
        primary:{
            background: mainColors.green1,
            text: 'white'
        },
        secondary:{
            background:'white',
            text:mainColors.dark1
        }
    },
    border: mainColors.grey2,
    cardLight:mainColors.green2
}
